/**
 * Header.js
 * Renders the public marketing header (Landing page top bar).
 */

function renderPublicHeader(activePage = 'overview') {
  const navItems = [
    { label: 'Overview', hash: '#/' },
    { label: 'Inventory', hash: '#/inventory' },
    { label: 'Warehouse Sync', hash: '#/' },
    { label: 'Analytics', hash: '#/' },
    { label: 'Settings', hash: '#/' },
  ];

  const navLinks = navItems.map(item => {
    const isActive = item.label.toLowerCase() === activePage;
    return `
      <a href="${item.hash}" class="
        text-body-md transition-colors
        ${isActive
          ? 'text-primary font-bold relative after:content-[\'\'] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-[3px] after:bg-primary'
          : 'text-on-surface-variant hover:text-primary'}
      ">${item.label}</a>
    `;
  }).join('');

  return `
    <header class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
      <div class="flex justify-between items-center px-lg py-md max-w-container-max mx-auto">
        <div class="flex items-center gap-sm">
          <span class="material-symbols-outlined text-primary" style="font-size:32px">monitoring</span>
          <h1 class="font-headline-lg text-headline-lg font-bold text-primary">StockMaster</h1>
        </div>
        <nav class="hidden lg:flex items-center gap-xl">
          ${navLinks}
        </nav>
        <div class="flex items-center gap-md">
          <button
            onclick="Router.navigate('#/login')"
            class="hidden md:block text-primary font-bold px-lg py-sm hover:underline"
          >Log In</button>
          <button
            onclick="Router.navigate('#/signup')"
            class="bg-primary-container text-white font-bold px-lg py-sm rounded-xl hover:opacity-90 transition-opacity"
          >Get Started</button>
        </div>
      </div>
    </header>
  `;
}

/**
 * Renders the authenticated app top bar (used inside dashboard layouts).
 * @param {string} title - Page title shown in the bar
 */
function renderAppHeader(title = 'Dashboard Overview') {
  return `
    <header class="w-full h-16 sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <div class="h-full flex justify-between items-center px-xl">
        <h2 class="font-headline-lg-mobile text-on-background">${title}</h2>
        <div class="flex items-center gap-md">
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              class="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 w-64 text-sm focus:ring-2 focus:ring-primary/20"
              placeholder="Search inventory..."
              type="text"
              id="app-search"
            />
          </div>
          <button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
            notifications
          </button>
          <button
            onclick="Router.navigate('#/inventory')"
            class="bg-primary text-on-primary px-lg py-2 rounded-xl flex items-center gap-sm font-label-sm shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <span class="material-symbols-outlined text-sm">add</span>
            New Order
          </button>
        </div>
      </div>
    </header>
  `;
}

// Expose
window.renderPublicHeader = renderPublicHeader;
window.renderAppHeader = renderAppHeader;
export { renderPublicHeader, renderAppHeader };
