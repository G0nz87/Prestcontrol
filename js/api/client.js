/* =====================================================
   API CLIENT — Prestcontrol REST API
===================================================== */

const API_BASE = 'http://31.97.83.191:5001/api'; // API REST de Prestcontrol

// ── CLIENTES ──────────────────────────────────────────
async function apiGetClientes() {
  try {
    const res = await fetch(`${API_BASE}/clientes`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching clientes:', err);
    return [];
  }
}

async function apiGetCliente(id) {
  try {
    const res = await fetch(`${API_BASE}/clientes/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching cliente:', err);
    return null;
  }
}

async function apiCreateCliente(data) {
  try {
    const res = await fetch(`${API_BASE}/clientes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error creating cliente:', err);
    return null;
  }
}

async function apiUpdateCliente(id, data) {
  try {
    const res = await fetch(`${API_BASE}/clientes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error updating cliente:', err);
    return null;
  }
}

async function apiDeleteCliente(id) {
  try {
    const res = await fetch(`${API_BASE}/clientes/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error deleting cliente:', err);
    return null;
  }
}

// ── PRESTAMOS ──────────────────────────────────────────
async function apiGetPrestamos() {
  try {
    const res = await fetch(`${API_BASE}/prestamos`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching prestamos:', err);
    return [];
  }
}

async function apiGetPrestamo(id) {
  try {
    const res = await fetch(`${API_BASE}/prestamos/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching prestamo:', err);
    return null;
  }
}

async function apiGetPrestamosByCliente(idCliente) {
  try {
    const res = await fetch(`${API_BASE}/prestamos/cliente/${idCliente}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching prestamos:', err);
    return [];
  }
}

async function apiCreatePrestamo(data) {
  try {
    const res = await fetch(`${API_BASE}/prestamos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error creating prestamo:', err);
    return null;
  }
}

async function apiUpdatePrestamo(id, data) {
  try {
    const res = await fetch(`${API_BASE}/prestamos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error updating prestamo:', err);
    return null;
  }
}

async function apiDeletePrestamo(id) {
  try {
    const res = await fetch(`${API_BASE}/prestamos/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error deleting prestamo:', err);
    return null;
  }
}

// ── CUOTAS ─────────────────────────────────────────────
async function apiGetCuotas() {
  try {
    const res = await fetch(`${API_BASE}/cuotas`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching cuotas:', err);
    return [];
  }
}

async function apiGetCuota(id) {
  try {
    const res = await fetch(`${API_BASE}/cuotas/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching cuota:', err);
    return null;
  }
}

async function apiGetCuotasByPrestamo(idPrestamo) {
  try {
    const res = await fetch(`${API_BASE}/cuotas/prestamo/${idPrestamo}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching cuotas:', err);
    return [];
  }
}

async function apiCreateCuota(data) {
  try {
    const res = await fetch(`${API_BASE}/cuotas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error creating cuota:', err);
    return null;
  }
}

async function apiUpdateCuota(id, data) {
  try {
    const res = await fetch(`${API_BASE}/cuotas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error updating cuota:', err);
    return null;
  }
}

async function apiDeleteCuota(id) {
  try {
    const res = await fetch(`${API_BASE}/cuotas/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error deleting cuota:', err);
    return null;
  }
}
