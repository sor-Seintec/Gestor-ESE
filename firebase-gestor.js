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
  getFirestore
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

export async function loginAdmin(email, password) {
  adminSessionPromise = null;
  dataPromise = null;
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
    'auth/invalid-credential': 'E-mail ou senha inválidos.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos.',
    'auth/network-request-failed': 'Não foi possível conectar ao Firebase.',
    'auth/required': 'Faça login para acessar o Gestor-ESE.',
    'access/admin-required': 'Esta conta não possui perfil de gestor.',
    'access/profile-not-found': 'O perfil administrativo não foi encontrado.'
  };
  return messages[error?.code] || 'Não foi possível validar o acesso administrativo.';
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
      const [supervisorSnapshot, schoolSnapshot, agendaSnapshot, visitSnapshot, justificationSnapshot] = await Promise.all([
        getDocs(collection(db, 'supervisors')),
        getDocs(collection(db, 'schools')),
        getDocs(collection(db, 'agenda')),
        getDocs(collection(db, 'visits')),
        optionalCollection('goalJustifications')
      ]);

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
