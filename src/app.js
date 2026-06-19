/**
 * app.js
 * Application bootstrap and routing for legacy page modules.
 */

function setAppContent(content) {
  const root = document.getElementById('app');
  if (!root) throw new Error('App root element (#app) not found');
  root.innerHTML = content;
  window.scrollTo(0, 0);
}

function renderAppShell(title, content) {
  return `
    <div class="app-shell min-h-screen bg-background text-on-background">
      ${window.renderAppHeader ? window.renderAppHeader(title) : ''}
      <div class="lg:grid lg:grid-cols-[18rem_1fr] gap-lg pt-6 lg:pt-8 px-md lg:px-xl">
        ${window.SidebarNav ? window.SidebarNav.render(window.location.hash || '#/dashboard') : ''}
        <main class="main-content rounded-3xl bg-surface p-lg lg:py-xl lg:px-xl overflow-hidden shadow-sm mt-24 lg:mt-0">
          ${content}
        </main>
      </div>
    </div>
  `;
}

function mountLandingPage() {
  const page = window.renderLandingPage ? window.renderLandingPage() : '<div class="p-8">Landing page not available</div>';
  setAppContent(page);
}

function mountDashboardPage() {
  const page = window.renderDashboardPage ? window.renderDashboardPage() : '<div class="p-8">Dashboard page not available</div>';
  setAppContent(renderAppShell('Dashboard Overview', page));
}

function mountInventoryPage() {
  const page = window.renderInventoryPage ? window.renderInventoryPage() : '<div class="p-8">Inventory page not available</div>';
  setAppContent(renderAppShell('Inventory Management', page));
}

function mountLoginPage() {
  const page = window.renderLoginPage ? window.renderLoginPage() : '<div class="p-8">Login page not available</div>';
  setAppContent(page);
}

function mountSignupPage() {
  const page = window.renderSignupPage ? window.renderSignupPage() : '<div class="p-8">Signup page not available</div>';
  setAppContent(page);
}

function mountRecoverPage() {
  const page = window.renderRecoverPage ? window.renderRecoverPage() : '<div class="p-8">Recovery page not available</div>';
  setAppContent(page);
}

function initializeApp() {
  if (!window.Router) {
    throw new Error('Router module is required before app initialization');
  }

  window.Router.on('#/', mountLandingPage);
  window.Router.on('#/dashboard', mountDashboardPage);
  window.Router.on('#/inventory', mountInventoryPage);
  window.Router.on('#/login', mountLoginPage);
  window.Router.on('#/signup', mountSignupPage);
  window.Router.on('#/recover', mountRecoverPage);
  window.Router.on('#/404', () => {
    setAppContent(`
      <div class="p-xl text-center">
        <h1 class="text-4xl font-bold">404</h1>
        <p class="mt-md text-on-surface-variant">Sorry, we could not find that page.</p>
        <button onclick="Router.navigate('#/')" class="mt-lg bg-primary text-white px-xl py-md rounded-xl">Back to Home</button>
      </div>
    `);
  });

  window.Router.init();
}

initializeApp();
