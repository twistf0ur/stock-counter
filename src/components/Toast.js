/**
 * Toast.js
 * Lightweight toast notification system.
 * Usage: Toast.show('Message here', 'success' | 'error' | 'info')
 */

const Toast = (() => {
  let container = null;

  function ensureContainer() {
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
  }

  function show(message, type = 'info', duration = 2800) {
    ensureContainer();

    const icons = { success: 'check_circle', error: 'error', info: 'info' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:18px">${icons[type] || 'info'}</span>
      ${message}
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      setTimeout(() => toast.remove(), 320);
    }, duration);
  }

  return { show };
})();

// Expose and export
window.Toast = Toast;
export default Toast;
