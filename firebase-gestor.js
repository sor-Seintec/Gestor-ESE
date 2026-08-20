import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch
} from 'https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBwV4kS3BpzAL8q8yMFvsFqh5xIhV0ZR-E',
  authDomain: 'supervisor-ese.firebaseapp.com',
  projectId: 'supervisor-ese',
  storageBucket: 'supervisor-ese.firebasestorage.app',
  messagingSenderId: '756390446092',
  appId: '1:756390446092:web:26a898746dd4e3fab45a29'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const MASTER_ADMIN_EMAIL = 'desornit@prof.educacao.sp.gov.br';
const ACCESS_EMAIL_PREFIX = 'desornit+';
const ACCESS_EMAIL_DOMAIN = '@prof.educacao.sp.gov.br';

let adminSessionPromise;
let dataPromise;

function waitForAuthState() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

export async function requireAdmin() {
  if (!adminSessionPromise) {
    adminSessionPromise = (async () => {
      const user = auth.currentUser || await waitForAuthState();
      if (!user) throw Object.assign(new Error('AUTH_REQUIRED'), { code: 'auth/required' });
      const profileSnapshot = await getDoc(doc(db, 'users', user.uid));
      if (!profileSnapshot.exists()) throw Object.assign(new Error('PROFILE_NOT_FOUND'), { code: 'access/profile-not-found' });
      const profile = profileSnapshot.data();
      if (profile.active !== true || profile.role !== 'admin') {
        throw Object.assign(new Error('ADMIN_REQUIRED'), { code: 'access/admin-required' });
      }
      return { user, profile };
    })();
  }
  return adminSessionPromise;
}

export async function requireMasterAdmin() {
  const session = await requireAdmin();
  if ((session.user.email || '').trim().toLowerCase() !== MASTER_ADMIN_EMAIL) {
    throw Object.assign(new Error('MASTER_REQUIRED'), { code: 'access/master-required' });
  }
  return session;
}

export function administratorLoginAlias(email) {
  const normalized = (email || '').toString().trim().toLowerCase();
  if (normalized === MASTER_ADMIN_EMAIL) return 'admmaster';
  if (normalized.startsWith(ACCESS_EMAIL_PREFIX) && normalized.endsWith(ACCESS_EMAIL_DOMAIN)) {
    return `adm${normalized.slice(ACCESS_EMAIL_PREFIX.length, -ACCESS_EMAIL_DOMAIN.length)}`;
  }
  return normalized;
}

function administratorEmailFromLogin(identifier) {
  const normalized = (identifier || '').toString().trim().toLowerCase();
  if (normalized.includes('@')) return normalized;
  if (normalized === 'admmaster') return MASTER_ADMIN_EMAIL;
  if (!/^adm[a-z0-9._-]+$/.test(normalized)) {
    throw Object.assign(new Error('INVALID_LOGIN'), { code: 'auth/invalid-login' });
  }
  return `${ACCESS_EMAIL_PREFIX}${normalized.slice(3)}${ACCESS_EMAIL_DOMAIN}`;
}

export async function loginAdmin(identifier, password) {
  adminSessionPromise = null;
  dataPromise = null;
  const email = administratorEmailFromLogin(identifier);
  await signInWithEmailAndPassword(auth, email, password);
  return requireAdmin();
}

export async function logoutAdmin() {
  adminSessionPromise = null;
  dataPromise = null;
  await signOut(auth);
}

export function authErrorMessage(error) {
  const messages = {
    'auth/invalid-credential': 'Usuário ou senha inválidos.',
    'auth/invalid-login': 'Informe um usuário iniciado por adm, como admruivo.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos.',
    'auth/network-request-failed': 'Não foi possível conectar ao Firebase.',
    'auth/required': 'Faça login para acessar o Gestor-ESE.',
    'access/admin-required': 'Esta conta não possui perfil de gestor.',
    'access/master-required': 'Somente o Administrador Master pode realizar este cadastro.',
    'access/profile-not-found': 'O perfil administrativo não foi encontrado.'
  };
  return messages[error?.code] || 'Não foi possível validar o acesso administrativo.';
}

function searchable(value) {
  return (value || '').toString().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function documentId(value) {
  return searchable(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 72);
}

export async function createSupervisorProfile({ displayName, loginEmail = '' }) {
  await requireMasterAdmin();
  const name = (displayName || '').trim();
  const email = (loginEmail || '').trim().toLowerCase();
  if (!name) throw Object.assign(new Error('NAME_REQUIRED'), { code: 'data/name-required' });
  if (!email) throw Object.assign(new Error('EMAIL_REQUIRED'), { code: 'data/email-required' });
  if (!/^desornit\+[a-z0-9._-]+@prof\.educacao\.sp\.gov\.br$/.test(email)) throw Object.assign(new Error('INVALID_EMAIL'), { code: 'data/invalid-email' });
  const id = documentId(name);
  if (!id) throw Object.assign(new Error('INVALID_NAME'), { code: 'data/invalid-name' });
  const reference = doc(db, 'supervisors', id);
  if ((await getDoc(reference)).exists()) throw Object.assign(new Error('ALREADY_EXISTS'), { code: 'data/already-exists' });
  const supervisorsSnapshot = await getDocs(collection(db, 'supervisors'));
  if (supervisorsSnapshot.docs.some((item) => (item.data().loginEmail || '').toString().trim().toLowerCase() === email)) {
    throw Object.assign(new Error('EMAIL_IN_USE'), { code: 'data/email-in-use' });
  }
  await setDoc(reference, {
    displayName: name,
    legacyName: name.toLocaleUpperCase('pt-BR'),
    loginEmail: email || null,
    loginAlias: `sup${email.slice(ACCESS_EMAIL_PREFIX.length, -ACCESS_EMAIL_DOMAIN.length)}`,
    authUid: null,
    active: true,
    schemaVersion: 1,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  dataPromise = null;
  return id;
}

export async function activateSupervisorAccess({ supervisorId, authUid }) {
  await requireMasterAdmin();
  const uid = (authUid || '').toString().trim();
  if (!supervisorId) throw Object.assign(new Error('SUPERVISOR_REQUIRED'), { code: 'data/supervisor-required' });
  if (!/^[A-Za-z0-9_-]{20,128}$/.test(uid)) throw Object.assign(new Error('INVALID_UID'), { code: 'data/invalid-uid' });

  const supervisorRef = doc(db, 'supervisors', supervisorId);
  const supervisorSnapshot = await getDoc(supervisorRef);
  if (!supervisorSnapshot.exists()) throw Object.assign(new Error('SUPERVISOR_NOT_FOUND'), { code: 'data/supervisor-not-found' });
  const supervisor = supervisorSnapshot.data();
  const email = (supervisor.loginEmail || '').toString().trim().toLowerCase();
  if (!email) throw Object.assign(new Error('EMAIL_REQUIRED'), { code: 'data/email-required' });
  if (supervisor.authUid && supervisor.authUid !== uid) throw Object.assign(new Error('ACCESS_ALREADY_LINKED'), { code: 'data/access-already-linked' });

  const [userSnapshot, supervisorsSnapshot] = await Promise.all([
    getDoc(doc(db, 'users', uid)),
    getDocs(collection(db, 'supervisors'))
  ]);
  const existingUser = userSnapshot.exists() ? userSnapshot.data() : null;
  if (existingUser?.role === 'admin') throw Object.assign(new Error('UID_ADMIN'), { code: 'data/uid-admin' });
  if (existingUser && ((existingUser.email || '').toLowerCase() !== email || existingUser.supervisorId !== supervisorId)) {
    throw Object.assign(new Error('UID_IN_USE'), { code: 'data/uid-in-use' });
  }
  if (supervisorsSnapshot.docs.some((item) => item.id !== supervisorId && item.data().authUid === uid)) {
    throw Object.assign(new Error('UID_IN_USE'), { code: 'data/uid-in-use' });
  }

  const batch = writeBatch(db);
  batch.set(doc(db, 'users', uid), {
    displayName: supervisor.displayName || supervisorId,
    email,
    loginAlias: supervisor.loginAlias || `sup${email.slice(ACCESS_EMAIL_PREFIX.length, -ACCESS_EMAIL_DOMAIN.length)}`,
    role: 'supervisor',
    supervisorId,
    active: true,
    mustChangePassword: true,
    schemaVersion: 1,
    createdAt: existingUser?.createdAt || serverTimestamp(),
    updatedAt: serverTimestamp()
  }, { merge: true });
  batch.set(supervisorRef, {
    authUid: uid,
    active: true,
    accessEnabled: true,
    updatedAt: serverTimestamp()
  }, { merge: true });
  await batch.commit();
  dataPromise = null;
  return { uid, supervisorId, email };
}

export async function activateAdministratorAccess({ displayName, loginEmail, authUid }) {
  const session = await requireMasterAdmin();
  const name = (displayName || '').toString().trim();
  const email = (loginEmail || '').toString().trim().toLowerCase();
  const uid = (authUid || '').toString().trim();
  if (!name) throw Object.assign(new Error('NAME_REQUIRED'), { code: 'data/name-required' });
  if (!/^desornit\+[a-z0-9._-]+@prof\.educacao\.sp\.gov\.br$/.test(email)) throw Object.assign(new Error('INVALID_EMAIL'), { code: 'data/invalid-email' });
  if (!/^[A-Za-z0-9_-]{20,128}$/.test(uid)) throw Object.assign(new Error('INVALID_UID'), { code: 'data/invalid-uid' });

  const [userSnapshot, usersSnapshot, supervisorsSnapshot] = await Promise.all([
    getDoc(doc(db, 'users', uid)),
    getDocs(collection(db, 'users')),
    getDocs(collection(db, 'supervisors'))
  ]);
  const existingUser = userSnapshot.exists() ? userSnapshot.data() : null;
  const emailProfiles = usersSnapshot.docs.filter((item) =>
    (item.data().email || '').toString().trim().toLowerCase() === email
  );

  // O Firebase Authentication e o Firestore são cadastros separados. Se uma
  // conta for apagada e recriada no Authentication, o novo usuário recebe
  // outro UID, mas o perfil users/{UID antigo} continua existindo. Neste caso,
  // migramos o perfil antigo em vez de bloquear o e-mail para sempre.
  if (emailProfiles.some((item) => item.id === session.user.uid && item.id !== uid)) {
    throw Object.assign(new Error('CURRENT_ADMIN_REPLACEMENT'), { code: 'data/current-admin-replacement' });
  }
  if (existingUser && (existingUser.email || '').toString().trim().toLowerCase() !== email) {
    throw Object.assign(new Error('UID_IN_USE'), { code: 'data/uid-in-use' });
  }

  const replacedProfiles = emailProfiles.filter((item) => item.id !== uid);
  const replacedUids = new Set(replacedProfiles.map((item) => item.id));
  const supervisorLinks = supervisorsSnapshot.docs.filter((item) => {
    const linkedUid = (item.data().authUid || '').toString().trim();
    return linkedUid === uid || replacedUids.has(linkedUid);
  });
  const conflictingSupervisor = supervisorLinks.find((item) => {
    const supervisorEmail = (item.data().loginEmail || '').toString().trim().toLowerCase();
    return supervisorEmail && supervisorEmail !== email;
  });
  if (conflictingSupervisor) {
    throw Object.assign(new Error('UID_IN_USE'), { code: 'data/uid-in-use' });
  }

  const batch = writeBatch(db);
  replacedProfiles.forEach((item) => batch.delete(item.ref));
  supervisorLinks.forEach((item) => batch.set(item.ref, {
    authUid: null,
    accessEnabled: false,
    updatedAt: serverTimestamp()
  }, { merge: true }));
  batch.set(doc(db, 'users', uid), {
    displayName: name,
    email,
    loginAlias: administratorLoginAlias(email),
    role: 'admin',
    active: true,
    mustChangePassword: true,
    schemaVersion: 1,
    createdByUid: session.user.uid,
    createdAt: existingUser?.createdAt || replacedProfiles[0]?.data().createdAt || serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  await batch.commit();
  dataPromise = null;
  return {
    uid,
    displayName: name,
    email,
    role: 'admin',
    active: true,
    replacedUids: [...replacedUids],
    supervisorLinksRemoved: supervisorLinks.map((item) => item.id)
  };
}

export async function createSchoolRecord({ name, supervisorId = null }) {
  await requireAdmin();
  const schoolName = (name || '').trim();
  if (!schoolName) throw Object.assign(new Error('NAME_REQUIRED'), { code: 'data/name-required' });
  const snapshot = await getDocs(collection(db, 'schools'));
  if (snapshot.docs.some((item) => searchable(item.data().name) === searchable(schoolName))) {
    throw Object.assign(new Error('ALREADY_EXISTS'), { code: 'data/already-exists' });
  }
  const suffix = crypto.randomUUID().replaceAll('-', '').slice(0, 8);
  const id = `${documentId(schoolName) || 'escola'}-${suffix}`;
  await setDoc(doc(db, 'schools', id), {
    name: schoolName,
    searchName: searchable(schoolName),
    supervisorId: supervisorId || null,
    active: true,
    schemaVersion: 1,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  dataPromise = null;
  return id;
}

export async function updateSchoolAssignment(schoolId, supervisorId = null) {
  await requireAdmin();
  await updateDoc(doc(db, 'schools', schoolId), {
    supervisorId: supervisorId || null,
    updatedAt: serverTimestamp()
  });
  dataPromise = null;
}

export async function setSchoolActive(schoolId, active) {
  await requireAdmin();
  await updateDoc(doc(db, 'schools', schoolId), {
    active: active === true,
    updatedAt: serverTimestamp()
  });
  dataPromise = null;
}

export function dataErrorMessage(error) {
  const messages = {
    'data/name-required': 'Informe o nome.',
    'data/invalid-name': 'O nome informado não pode ser usado.',
    'data/email-required': 'Informe a variável do e-mail de acesso.',
    'data/invalid-email': 'Use somente letras, números, ponto, hífen ou sublinhado na variável do e-mail.',
    'data/email-in-use': 'Este e-mail de acesso já está vinculado a outro cadastro.',
    'data/already-exists': 'Já existe um cadastro com esse nome.',
    'data/supervisor-required': 'Selecione o supervisor que receberá o acesso.',
    'data/supervisor-not-found': 'O cadastro do supervisor não foi encontrado.',
    'data/invalid-uid': 'Cole o UID completo gerado pelo Firebase Authentication.',
    'data/access-already-linked': 'Este supervisor já está vinculado a outro UID.',
    'data/uid-admin': 'Este UID pertence a uma conta administrativa e não pode ser alterado.',
    'data/uid-in-use': 'Este UID já está vinculado a outro usuário ou supervisor.',
    'data/current-admin-replacement': 'A conta administrativa usada nesta sessão não pode ser substituída. Entre com outro administrador para realizar essa troca.',
    'access/master-required': 'Somente desornit@prof.educacao.sp.gov.br pode cadastrar administradores e supervisores.',
    'permission-denied': 'O Firebase não autorizou esta alteração.'
  };
  return messages[error?.code] || 'Não foi possível salvar a alteração.';
}

function asDate(value) {
  if (!value) return null;
  if (typeof value?.toDate === 'function') return value.toDate();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function brDate(value) {
  const date = asDate(value);
  return date ? date.toISOString() : '';
}

function statusLabel(item) {
  const canonical = {
    scheduled: 'Planejada',
    completed: 'Realizada',
    cancelled: 'Cancelada',
    postponed: 'Adiada',
    justified: 'Justificada'
  };
  const rawStatus = (item.status || '').toString().trim();
  const normalizedStatus = rawStatus.toLowerCase();
  return canonical[item.statusCode]
    || canonical[normalizedStatus]
    || rawStatus
    || 'Não informado';
}

function supervisorName(item, supervisors) {
  return supervisors.get(item.supervisorId)?.displayName
    || item.supervisorName
    || item.legacySupervisorName
    || item.supervisorId
    || 'Não informado';
}

async function optionalCollection(name) {
  try {
    return await getDocs(collection(db, name));
  } catch (error) {
    if (error?.code === 'permission-denied') return { docs: [], size: 0 };
    throw error;
  }
}

export async function loadGestorData({ refresh = false } = {}) {
  await requireAdmin();
  if (refresh) dataPromise = null;
  if (!dataPromise) {
    dataPromise = (async () => {
      const [userSnapshot, supervisorSnapshot, schoolSnapshot, agendaSnapshot, visitSnapshot, justificationSnapshot] = await Promise.all([
        getDocs(collection(db, 'users')),
        getDocs(collection(db, 'supervisors')),
        getDocs(collection(db, 'schools')),
        getDocs(collection(db, 'agenda')),
        getDocs(collection(db, 'visits')),
        optionalCollection('goalJustifications')
      ]);

      const users = new Map(userSnapshot.docs.map((item) => [item.id, { id: item.id, ...item.data() }]));
      const supervisors = new Map(supervisorSnapshot.docs.map((item) => [item.id, { id: item.id, ...item.data() }]));
      const schools = schoolSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
      const schoolMap = new Map(schools.map((item) => [item.id, item]));
      const agenda = agendaSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
      const visits = visitSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
      const goalJustifications = justificationSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));

      const agendaRows = agenda.map((item) => ({
        'Data Agendada': brDate(item.scheduledDate),
        'Data da Agenda': brDate(item.scheduledDate),
        Data: brDate(item.scheduledDate),
        Supervisor: supervisorName(item, supervisors),
        Escola: item.schoolName || schoolMap.get(item.schoolId)?.name || '',
        Turno: item.shift || '',
        Status: statusLabel(item),
        _id: item.id,
        _raw: item
      }));

      const visitRows = visits.map((item) => {
        const actionText = Array.isArray(item.actionNames) && item.actionNames.length
          ? item.actionNames.join(' | ')
          : item.folderAction || item.customSubject || '';
        return {
          'Data da Visita': brDate(item.visitDate),
          'Data Visita': brDate(item.visitDate),
          'Data do Registro': brDate(item.recordedAt),
          Data: brDate(item.visitDate),
          Supervisor: supervisorName(item, supervisors),
          Escola: item.schoolName || schoolMap.get(item.schoolId)?.name || '',
          Status: statusLabel(item),
          Justificativa: item.justification || '',
          'Motivo Operacional': item.operationalReason || '',
          'Ações das Pastas': actionText,
          'Ações': actionText,
          'E-mail (Autor)': item.authorEmail || '',
          Origem: item.visitType === 'direct' ? 'Registro direto' : 'Planejamento',
          TipoOrigem: item.visitType === 'direct' ? 'Registro direto' : 'Planejamento',
          _id: item.id,
          _raw: item
        };
      });

      return {
        users,
        supervisors,
        schools,
        agenda,
        visits,
        goalJustifications,
        agendaRows,
        visitRows,
        loadedAt: new Date()
      };
    })();
  }
  return dataPromise;
}
