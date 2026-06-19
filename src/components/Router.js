/**
 * Router.js
 * Lightweight hash-based client-side router.
 * Usage: Router.navigate('#/login'), Router.on('#/login', () => renderLogin())
 */

const Router = (() => {
  const routes = {};

  function on(hash, handler) {
    routes[hash] = handler;
  }

  function navigate(hash) {
    window.location.hash = hash;
  }

  function resolve() {
    const hash = window.location.hash || '#/';
    const handler = routes[hash] || routes['#/404'] || routes['#/'];
    if (handler) handler();
  }

  function init() {
    window.addEventListener('hashchange', resolve);
    resolve();
  }

  return { on, navigate, resolve, init };
})();

// Expose and export
window.Router = Router;
export default Router;
