/**
 * Sidebar.js
 * Persistent left navigation sidebar used in authenticated app pages.
 */

const SidebarNav = (() => {
  const navItems = [
    { icon: 'dashboard',  label: 'Overview',   hash: '#/dashboard' },
    { icon: 'inventory_2',label: 'Inventory',  hash: '#/inventory' },
    { icon: 'sync',       label: 'Sync',        hash: '#/dashboard' },
    { icon: 'assessment', label: 'Reports',     hash: '#/dashboard' },
    { icon: 'settings',   label: 'Settings',    hash: '#/dashboard' },
  ];

  function render(activeHash = '#/dashboard') {
    const items = navItems.map(item => {
      const isActive = item.hash === activeHash;
      return `
        <button
          onclick="Router.navigate('${item.hash}')"
          class="flex items-center gap-md rounded-lg px-md py-sm w-full transition-colors
            ${isActive
              ? 'bg-primary-container text-on-primary-container'
              : 'text-on-surface-variant hover:bg-surface-container-high'}"
        >
          <span class="material-symbols-outlined" style="${isActive ? "font-variation-settings:'FILL' 1" : ''}">
            ${item.icon}
          </span>
          <span class="font-label-sm">${item.label}</span>
        </button>
      `;
    }).join('');

    return `
      <aside class="w-64 bg-surface border-r border-outline-variant flex flex-col relative">
        <div class="px-lg py-xl flex items-center gap-sm">
          <span class="material-symbols-outlined text-primary" style="font-size:32px">monitoring</span>
          <h1 class="font-headline-lg-mobile text-2xl font-bold text-primary">StockMaster</h1>
        </div>

        <nav class="flex-grow px-md py-sm flex flex-col gap-xs">
          ${items}
        </nav>

        <!-- Optimization status -->
        <div class="p-md border-t border-outline-variant">
          <div class="bg-primary/5 rounded-xl p-md mb-sm">
            <p class="font-label-sm text-on-surface-variant mb-xs">Optimization Mode</p>
            <div class="h-2 w-full bg-outline-variant rounded-full overflow-hidden">
              <div class="h-full bg-primary w-3/4"></div>
            </div>
            <p class="text-[11px] mt-sm text-on-surface-variant">Real-time sync active</p>
          </div>

          <!-- User profile row -->
          <div class="flex items-center gap-sm p-sm hover:bg-surface-container-high rounded-lg cursor-pointer">
            <div class="w-10 h-10 rounded-full border border-outline-variant overflow-hidden bg-secondary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-on-secondary-container">person</span>
            </div>
            <div class="flex flex-col flex-1 min-w-0">
              <span class="font-label-sm text-on-surface truncate">Alex Sterling</span>
              <span class="text-xs text-on-surface-variant">Admin</span>
            </div>
            <span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
          </div>
        </div>
      </aside>
    `;
  }

  return { render };
})();

// Expose and export
window.SidebarNav = SidebarNav;
export default SidebarNav;
