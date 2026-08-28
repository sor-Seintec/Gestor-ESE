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
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
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
const CLOUD_SYNC_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.5 10a6.5 6.5 0 0 0-12.4-2A5 5 0 0 0 6 18h4v-2H6a3 3 0 1 1 .6-5.94l1.24.25.27-1.24A4.5 4.5 0 0 1 16.7 10H14l3.5 3.5L21 10h-2.5ZM14 14v2h4a3 3 0 0 1-.6 5.94l-1.24-.25-.27 1.24A4.5 4.5 0 0 1 7.3 22H10l-3.5-3.5L3 22h2.5A6.5 6.5 0 0 0 17.9 20a5 5 0 0 0 .1-10h-4v2h4a3 3 0 0 1 0 6h-4Z"/></svg>';

export function decorateCloudSyncButton(button = document.getElementById('refreshButton')) {
  if (!button || button.dataset.cloudSyncReady === 'true') return button;
  button.dataset.cloudSyncReady = 'true';
  button.classList.add('cloud-sync-button');
  button.innerHTML = `${CLOUD_SYNC_ICON}<span>Atualizar</span><span class="cloud-sync-comet" aria-hidden="true"><i></i><i></i><i></i></span>`;
  button.title = 'Buscar agora as alterações do Firebase';
  button.setAttribute('aria-label', 'Atualizar dados pelo Firebase');
  if (!document.getElementById('gestor-cloud-sync-style')) {
    const style = document.createElement('style');
    style.id = 'gestor-cloud-sync-style';
    style.textContent = '.cloud-sync-button{position:relative!important;isolation:isolate;overflow:visible!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;white-space:nowrap}.cloud-sync-button>svg{width:17px;height:17px;fill:currentColor;flex:none}.cloud-sync-button::before{content:"";position:absolute;inset:-3px;z-index:-1;border:1px solid transparent;border-radius:inherit;pointer-events:none;animation:cloudSyncResonance 4.8s ease-out infinite}.cloud-sync-comet{position:absolute;inset:-4px;pointer-events:none}.cloud-sync-comet i{position:absolute;width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 8px rgba(16,185,129,.72);offset-path:inset(1px round 12px);offset-rotate:0deg;animation:cloudSyncOrbit 4.8s cubic-bezier(.45,.05,.35,1) infinite}.cloud-sync-comet i:nth-child(2){width:4px;height:4px;opacity:.72;animation-delay:-.12s}.cloud-sync-comet i:nth-child(3){width:3px;height:3px;opacity:.48;animation-delay:-.24s}.cloud-sync-button.is-syncing>svg{animation:gestorCloudSync 1s linear infinite}.cloud-sync-button.is-syncing .cloud-sync-comet{display:none}@keyframes gestorCloudSync{to{transform:rotate(360deg)}}@keyframes cloudSyncOrbit{0%{offset-distance:0%;opacity:0;transform:scale(.55)}8%{opacity:1;transform:scale(1)}58%{opacity:1;transform:scale(1)}72%{offset-distance:100%;opacity:0;transform:scale(.55)}100%{offset-distance:100%;opacity:0;transform:scale(.55)}}@keyframes cloudSyncResonance{0%,64%,100%{border-color:transparent;box-shadow:0 0 0 0 transparent}70%{border-color:rgba(16,185,129,.34);box-shadow:0 0 0 0 rgba(16,185,129,.16)}82%{border-color:transparent;box-shadow:0 0 0 6px transparent}}@media(prefers-reduced-motion:reduce){.cloud-sync-button::before,.cloud-sync-comet i{animation:none}.cloud-sync-comet{display:none}}';
    document.head.appendChild(style);
  }
  return button;
}

if (!window.__gestorCacheFallbackListener) {
  window.__gestorCacheFallbackListener = true;
  window.addEventListener('gestor-cache-fallback', () => {
    const button = document.getElementById('refreshButton');
    const label = button?.querySelector('span');
    if (!button || !label) return;
    label.textContent = 'Cópia local';
    button.title = 'O Firebase não respondeu; os últimos dados salvos continuam visíveis';
    window.setTimeout(() => {
      label.textContent = 'Atualizar';
      button.title = 'Buscar agora as alterações do Firebase';
    }, 4000);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => decorateCloudSyncButton(), { once: true });
else queueMicrotask(() => decorateCloudSyncButton());

let adminSessionPromise;
let dataPromise;
let dataGeneration = -1;
const DATA_CACHE_KEY = '__GESTOR_ESE_FIREBASE_DATA_CACHE_V1__';
const ADMIN_CACHE_KEY = '__GESTOR_ESE_ADMIN_SESSION_CACHE_V1__';
const DATA_STORAGE_PREFIX = 'gestor-ese-daily-cache-v2';

function localDayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function nextLocalDayStart() {
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  return tomorrow.getTime();
}

function encodeCache(value) {
  if (value instanceof Map) return { __cacheType: 'Map', entries: [...value.entries()].map(([key, child]) => [key, encodeCache(child)]) };
  if (value instanceof Date) return { __cacheType: 'Date', milliseconds: value.getTime() };
  if (value && typeof value.toMillis === 'function') return { __cacheType: 'Timestamp', milliseconds: value.toMillis() };
  if (Array.isArray(value)) return value.map(encodeCache);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, encodeCache(child)]));
  return value;
}

function decodeCache(value) {
  if (Array.isArray(value)) return value.map(decodeCache);
  if (value && typeof value === 'object') {
    if (value.__cacheType === 'Map') return new Map(value.entries.map(([key, child]) => [key, decodeCache(child)]));
    if (value.__cacheType === 'Date') return new Date(value.milliseconds);
    if (value.__cacheType === 'Timestamp') return Timestamp.fromMillis(value.milliseconds);
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, decodeCache(child)]));
  }
  return value;
}

function storageKey(prefix, uid = auth.currentUser?.uid || '') {
  return `${prefix}:${uid}`;
}

function cacheHost() {
  try {
    if (window.top && window.top.location.origin === window.location.origin) return window.top;
  } catch (_) {
    // Uma página isolada ou de outra origem usa o próprio contexto.
  }
  return window;
}

function sharedDataCache() {
  const memory = cacheHost()[DATA_CACHE_KEY] || null;
  if (memory?.uid === auth.currentUser?.uid && memory.savedDay === localDayKey() && memory.expiresAt > Date.now()) return memory;
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey(DATA_STORAGE_PREFIX)) || 'null');
    if (!parsed || parsed.uid !== auth.currentUser?.uid || parsed.savedDay !== localDayKey() || parsed.expiresAt <= Date.now()) return null;
    const restored = { ...parsed, data: decodeCache(parsed.data) };
    cacheHost()[DATA_CACHE_KEY] = restored;
    return restored;
  } catch {
    return null;
  }
}

function storeSharedData(data) {
  const generation = sharedDataCache()?.generation || 0;
  cacheHost()[DATA_CACHE_KEY] = {
    generation,
    uid: auth.currentUser?.uid || '',
    data,
    savedDay: localDayKey(),
    expiresAt: nextLocalDayStart()
  };
  try {
    const cached = cacheHost()[DATA_CACHE_KEY];
    localStorage.setItem(storageKey(DATA_STORAGE_PREFIX), JSON.stringify({ ...cached, data: encodeCache(data) }));
  } catch {
    // O cache é uma otimização; a aplicação continua operando sem ele.
  }
  dataGeneration = generation;
}

function invalidateDataCache({ discard = false } = {}) {
  dataPromise = undefined;
  const generation = (sharedDataCache()?.generation || 0) + 1;
  dataGeneration = generation;
  cacheHost()[DATA_CACHE_KEY] = { generation, uid: auth.currentUser?.uid || '', data: null, expiresAt: 0 };
  if (discard) {
    try { localStorage.removeItem(storageKey(DATA_STORAGE_PREFIX)); } catch (_) { /* sem impacto funcional */ }
  }
}

export function clearGestorDataCache() {
  invalidateDataCache({ discard: true });
}

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
      
      const shared = cacheHost()[ADMIN_CACHE_KEY];
      if (shared?.uid === user.uid && shared.expiresAt > Date.now()) {
        return { user, profile: shared.profile };
      }

      let profileSnapshot;
      try {
        profileSnapshot = await getDoc(doc(db, 'users', user.uid));
      } catch (error) {
        // Se for erro de permissão, tenta recarregar o token
        if (error.code === 'permission-denied') {
          console.warn('Permissão negada, recarregando token...');
          await user.reload();
          profileSnapshot = await getDoc(doc(db, 'users', user.uid));
        } else {
          throw error;
        }
      }
      
      // Se o perfil não existir, cria automaticamente
      if (!profileSnapshot.exists()) {
        console.log('Criando perfil administrativo para', user.uid);
        const isMaster = (user.email || '').toLowerCase() === MASTER_ADMIN_EMAIL;
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName || 'Administrador',
          email: user.email,
          role: 'admin',
          active: true,
          isMaster: isMaster,
          schemaVersion: 1,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        profileSnapshot = await getDoc(doc(db, 'users', user.uid));
      }
      
      const profile = profileSnapshot.data();
      if (profile.active !== true || profile.role !== 'admin') {
        throw Object.assign(new Error('ADMIN_REQUIRED'), { code: 'access/admin-required' });
      }
      
      cacheHost()[ADMIN_CACHE_KEY] = { uid: user.uid, profile, savedDay: localDayKey(), expiresAt: nextLocalDayStart() };
      return { user, profile };
    })();
  }
  return adminSessionPromise;
}

export async function requireMasterAdmin() {
  const session = await requireAdmin();
  const legacyMaster = (session.user.email || '').trim().toLowerCase() === MASTER_ADMIN_EMAIL;
  if (session.profile.isMaster !== true && !legacyMaster) {
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
  delete cacheHost()[ADMIN_CACHE_KEY];
  invalidateDataCache({ discard: true });
  const email = administratorEmailFromLogin(identifier);
  await signInWithEmailAndPassword(auth, email, password);
  return requireAdmin();
}

export async function logoutAdmin() {
  adminSessionPromise = null;
  delete cacheHost()[ADMIN_CACHE_KEY];
  invalidateDataCache({ discard: true });
  await signOut(auth);
}

function validGoalPeriod(period) {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test((period || '').toString());
}

export async function saveMonthlyGoals(period, goals = []) {
  const session = await requireAdmin();
  if (!validGoalPeriod(period)) {
    throw Object.assign(new Error('INVALID_GOAL_PERIOD'), { code: 'data/invalid-goal-period' });
  }
  if (!Array.isArray(goals) || !goals.length) return;

  const batch = writeBatch(db);
  goals.forEach(({ supervisorId, monthlyGoal }) => {
    const id = (supervisorId || '').toString().trim();
    const value = Number(monthlyGoal);
    if (!id) throw Object.assign(new Error('SUPERVISOR_REQUIRED'), { code: 'data/supervisor-required' });
    if (!Number.isInteger(value) || value < 0 || value > 999) {
      throw Object.assign(new Error('INVALID_MONTHLY_GOAL'), { code: 'data/invalid-monthly-goal' });
    }
    batch.set(doc(db, 'monthlyGoals', `${period}_${id}`), {
      period,
      supervisorId: id,
      monthlyGoal: value,
      schemaVersion: 1,
      updatedAt: serverTimestamp(),
      updatedByUid: session.user.uid
    }, { merge: true });
  });
  await batch.commit();
  invalidateDataCache();
}

export async function resetMonthlyGoals(period, supervisorIds = []) {
  await requireAdmin();
  if (!validGoalPeriod(period)) {
    throw Object.assign(new Error('INVALID_GOAL_PERIOD'), { code: 'data/invalid-goal-period' });
  }
  const ids = [...new Set(supervisorIds.map((value) => (value || '').toString().trim()).filter(Boolean))];
  if (!ids.length) return;
  const batch = writeBatch(db);
  ids.forEach((supervisorId) => batch.delete(doc(db, 'monthlyGoals', `${period}_${supervisorId}`)));
  await batch.commit();
  invalidateDataCache();
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

function schoolSupervisorIds(school = {}) {
  return [...new Set([
    ...(Array.isArray(school.supervisorIds) ? school.supervisorIds : []),
    school.supervisorId
  ].filter(Boolean))];
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
  invalidateDataCache();
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
  invalidateDataCache();
  return { uid, supervisorId, email };
}

export async function setSupervisorActive(supervisorId, active) {
  const session = await requireMasterAdmin();
  if (!supervisorId) throw Object.assign(new Error('SUPERVISOR_REQUIRED'), { code: 'data/supervisor-required' });
  const supervisorRef = doc(db, 'supervisors', supervisorId);
  const supervisorSnapshot = await getDoc(supervisorRef);
  if (!supervisorSnapshot.exists()) throw Object.assign(new Error('SUPERVISOR_NOT_FOUND'), { code: 'data/supervisor-not-found' });

  const supervisor = supervisorSnapshot.data();
  const nextActive = active === true;
  const [schoolsSnapshot, usersSnapshot] = await Promise.all([
    getDocs(collection(db, 'schools')),
    getDocs(collection(db, 'users'))
  ]);
  const linkedSchools = schoolsSnapshot.docs.filter((item) => schoolSupervisorIds(item.data()).includes(supervisorId));
  const linkedUsers = usersSnapshot.docs.filter((item) =>
    item.data().supervisorId === supervisorId || (supervisor.authUid && item.id === supervisor.authUid)
  );
  const batch = writeBatch(db);

  batch.set(supervisorRef, {
    active: nextActive,
    accessEnabled: nextActive && Boolean(supervisor.authUid),
    statusChangedAt: serverTimestamp(),
    statusChangedByUid: session.user.uid,
    updatedAt: serverTimestamp()
  }, { merge: true });

  linkedUsers.forEach((item) => {
    batch.set(item.ref, {
      active: nextActive && item.id === supervisor.authUid,
      updatedAt: serverTimestamp()
    }, { merge: true });
  });

  if (!nextActive) {
    linkedSchools.forEach((item) => {
      const school = item.data();
      const remainingSupervisorIds = schoolSupervisorIds(school).filter((id) => id !== supervisorId);
      batch.set(item.ref, {
        supervisorIds: remainingSupervisorIds,
        supervisorId: remainingSupervisorIds.includes(school.supervisorId) ? school.supervisorId : (remainingSupervisorIds[0] || null),
        schemaVersion: 2,
        updatedAt: serverTimestamp()
      }, { merge: true });
    });
  }

  await batch.commit();
  invalidateDataCache();
  return {
    supervisorId,
    active: nextActive,
    removedSchoolLinks: nextActive ? 0 : linkedSchools.length,
    unassignedSchools: nextActive ? 0 : linkedSchools.length,
    loginBlocked: !nextActive
  };
}

function backupValue(value) {
  if (value == null) return value;
  if (typeof value?.toDate === 'function') return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(backupValue);
  if (typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, backupValue(item)]));
  }
  return value;
}

export async function prepareOperationalSanitization() {
  await requireMasterAdmin();
  const [agendaSnapshot, visitsSnapshot, justificationsSnapshot, correctionsSnapshot] = await Promise.all([
    getDocs(collection(db, 'agenda')),
    getDocs(collection(db, 'visits')),
    getDocs(collection(db, 'goalJustifications')),
    getDocs(collection(db, 'visitCorrectionRequests'))
  ]);
  const agendaIds = new Set(agendaSnapshot.docs.map((item) => item.id));
  const visitIds = new Set(visitsSnapshot.docs.map((item) => item.id));
  const relatedJustifications = justificationsSnapshot.docs.filter((item) => {
    const data = item.data();
    return (data.visitId && visitIds.has(data.visitId)) || (data.agendaId && agendaIds.has(data.agendaId));
  });
  const records = (items) => items.map((item) => ({ id: item.id, ...backupValue(item.data()) }));
  return {
    agendaIds: [...agendaIds],
    visitIds: [...visitIds],
    justificationIds: relatedJustifications.map((item) => item.id),
    correctionIds: correctionsSnapshot.docs.map((item) => item.id),
    backup: {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      scope: ['agenda', 'visits', 'goalJustifications vinculadas', 'visitCorrectionRequests'],
      agenda: records(agendaSnapshot.docs),
      visits: records(visitsSnapshot.docs),
      goalJustifications: records(relatedJustifications),
      visitCorrectionRequests: records(correctionsSnapshot.docs)
    }
  };
}

export async function sanitizeOperationalTestData({ agendaIds = [], visitIds = [], justificationIds = [], correctionIds = [] } = {}) {
  await requireMasterAdmin();
  const targets = [
    ...agendaIds.map((id) => doc(db, 'agenda', id)),
    ...visitIds.map((id) => doc(db, 'visits', id)),
    ...justificationIds.map((id) => doc(db, 'goalJustifications', id)),
    ...correctionIds.map((id) => doc(db, 'visitCorrectionRequests', id))
  ];
  for (let index = 0; index < targets.length; index += 450) {
    const batch = writeBatch(db);
    targets.slice(index, index + 450).forEach((reference) => batch.delete(reference));
    await batch.commit();
  }
  invalidateDataCache();
  return {
    agendaDeleted: agendaIds.length,
    visitsDeleted: visitIds.length,
    justificationsDeleted: justificationIds.length,
    correctionsDeleted: correctionIds.length
  };
}

function restoreValue(value) {
  if (Array.isArray(value)) return value.map(restoreValue);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, restoreValue(item)]));
  }
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return Timestamp.fromDate(parsed);
  }
  return value;
}

function validateBackupRecords(records, collectionName) {
  if (!Array.isArray(records)) throw Object.assign(new Error(`INVALID_${collectionName}`), { code: 'backup/invalid-file' });
  return records.map((record) => {
    if (!record || typeof record !== 'object' || Array.isArray(record)) {
      throw Object.assign(new Error(`INVALID_${collectionName}_RECORD`), { code: 'backup/invalid-file' });
    }
    const id = (record.id || '').toString().trim();
    if (!id || id.includes('/')) throw Object.assign(new Error(`INVALID_${collectionName}_ID`), { code: 'backup/invalid-file' });
    const { id: ignoredId, ...data } = record;
    return { id, data: restoreValue(data) };
  });
}

export async function restoreOperationalBackup(backup, { replace = false } = {}) {
  await requireMasterAdmin();
  if (!backup || typeof backup !== 'object' || Number(backup.schemaVersion) !== 1) {
    throw Object.assign(new Error('INVALID_BACKUP'), { code: 'backup/invalid-file' });
  }
  const agenda = validateBackupRecords(backup.agenda, 'agenda');
  const visits = validateBackupRecords(backup.visits, 'visits');
  const goalJustifications = validateBackupRecords(backup.goalJustifications, 'goalJustifications');
  // Backups anteriores a esta atualização não continham o histórico de
  // correções. Eles continuam válidos e restauram essa coleção como vazia.
  const visitCorrectionRequests = validateBackupRecords(backup.visitCorrectionRequests || [], 'visitCorrectionRequests');
  const records = [
    ...agenda.map((item) => ({ ...item, collectionName: 'agenda' })),
    ...visits.map((item) => ({ ...item, collectionName: 'visits' })),
    ...goalJustifications.map((item) => ({ ...item, collectionName: 'goalJustifications' })),
    ...visitCorrectionRequests.map((item) => ({ ...item, collectionName: 'visitCorrectionRequests' }))
  ];

  if (replace) {
    const snapshots = await Promise.all([
      getDocs(collection(db, 'agenda')),
      getDocs(collection(db, 'visits')),
      getDocs(collection(db, 'goalJustifications')),
      getDocs(collection(db, 'visitCorrectionRequests'))
    ]);
    const currentAgendaIds = new Set(snapshots[0].docs.map((item) => item.id));
    const currentVisitIds = new Set(snapshots[1].docs.map((item) => item.id));
    const relatedJustifications = snapshots[2].docs.filter((item) => {
      const data = item.data();
      return (data.visitId && currentVisitIds.has(data.visitId)) || (data.agendaId && currentAgendaIds.has(data.agendaId));
    });
    const targets = [
      ...snapshots[0].docs.map((item) => item.ref),
      ...snapshots[1].docs.map((item) => item.ref),
      ...relatedJustifications.map((item) => item.ref),
      ...snapshots[3].docs.map((item) => item.ref)
    ];
    for (let index = 0; index < targets.length; index += 450) {
      const batch = writeBatch(db);
      targets.slice(index, index + 450).forEach((reference) => batch.delete(reference));
      await batch.commit();
    }
  }

  for (let index = 0; index < records.length; index += 450) {
    const batch = writeBatch(db);
    records.slice(index, index + 450).forEach((item) => {
      batch.set(doc(db, item.collectionName, item.id), item.data, { merge: !replace });
    });
    await batch.commit();
  }
  invalidateDataCache();
  return {
    agendaRestored: agenda.length,
    visitsRestored: visits.length,
    justificationsRestored: goalJustifications.length,
    correctionsRestored: visitCorrectionRequests.length,
    mode: replace ? 'replace' : 'merge'
  };
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
  // conta for apagada e recriada no Authentication, o novo usu
