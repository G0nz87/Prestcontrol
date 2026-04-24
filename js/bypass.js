/* =====================================================
   BYPASS — Desactiva Firebase y usa API REST
===================================================== */

// Limpiar variables globales conflictivas
if (window._fbUser !== undefined) delete window._fbUser;
if (window._fbAuth !== undefined) delete window._fbAuth;
if (window._fbDb !== undefined) delete window._fbDb;

// Variables simplificadas
window._fbUser = { uid: 'user123', email: 'test@test.com' };
window._fbAuth = null;
window._fbDb = null;

// Funciones stub para Firebase
window._initFirebase = () => {
  console.log('Firebase bypass - usando API REST');
  return false;
};

window.isUserLoggedIn = () => true;
window.doRegistro = () => true;
window.doLogin = () => true;
window.doLogout = () => location.reload();
window.getCurrentUser = () => window._fbUser;
window.showRegisterTab = () => {};
window.showLoginTab = () => {};
window.initGlobalDB = () => Promise.resolve();

console.log('✅ Firebase bypass activo - Usando API REST');
