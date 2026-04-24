/* =====================================================
   FIREBASE — DISABLED (usando API REST)
===================================================== */

let _fbAuth = null;
let _fbDb = null;
let _fbUser = { uid: 'user123', email: 'test@test.com' };

function _initFirebase() {
  return false;
}

let driveAccessToken = null;
let driveSyncTimer = null;
let drivePendingSync = false;

function getDriveClientId() { return Promise.resolve(''); }
function guardarDriveClientId() { }
function driveSetStatus() { }
function syncDrive() { return Promise.resolve(); }
