/**
 * InventoryTable.js
 * Live stock inventory table used on the landing page and overview.
 *
 * @param {Array} items - Array of stock item objects
 */

const defaultStockItems = [
  {
    icon: 'laptop_mac',
    name: 'MacBook Pro M3 Max',
    category: 'Laptops & Computing',
    sku: 'APL-024-X',
    status: 'OPTIMAL',
    statusVariant: 'optimal',
    units: 42,
    updatedAgo: '2m ago',
    trend: '+4.2%',
    trendUp: true,
  },
  {
    icon: 'mouse',
    name: 'MX Master 3S',
    category: 'Peripherals',
    sku: 'LOG-MSE-G',
    status: 'SURPLUS',
    statusVariant: 'surplus',
    units: 128,
    updatedAgo: '15m ago',
    trend: '−12.1%',
    trendUp: false,
  },
  {
    icon: 'headphones',
    name: 'Sony WH-1000XM5',
    category: 'Audio Hardware',
    sku: 'SNY-HDP-5',
    status: 'CRITICAL LOW',
    statusVariant: 'critical',
    units: 8,
    updatedAgo: 'Restock required',
    trend: '+8.4%',
    trendUp: true,
  },
];

function getStatusBadge(variant) {
  const map = {
    optimal:  'bg-emerald-100 text-emerald-800',
    surplus:  'bg-secondary-container text-on-secondary-container',
    critical: 'bg-error text-white',
  };
  return map[variant] || 'bg-surface-container text-on-surface-variant';
}

function getIconBg(variant) {
  return variant === 'critical'
    ? 'bg-error-container'
    : 'bg-surface-container-highest';
}

function getIconColor(variant) {
  return variant === 'critical' ? 'text-error' : 'text-primary';
}

function renderInventoryTable(items = defaultStockItems) {
  const rows = items.map(item => `
    <div class="grid grid-cols-12 gap-md items-center p-lg hover:bg-secondary-container/5 transition-colors cursor-pointer group">
      <div class="col-span-3 flex items-center gap-md">
        <div class="w-12 h-12 ${getIconBg(item.statusVariant)} rounded-lg flex items-center justify-center">
          <span class="material-symbols-outlined ${getIconColor(item.statusVariant)}">${item.icon}</span>
        </div>
        <div>
          <p class="font-bold text-primary">${item.name}</p>
          <p class="text-xs text-on-surface-variant">${item.category}</p>
        </div>
      </div>
      <div class="col-span-2 font-data-mono text-on-surface-variant text-sm">${item.sku}</div>
      <div class="col-span-2 flex justify-center">
        <span class="${getStatusBadge(item.statusVariant)} text-[10px] font-bold px-sm py-1 rounded-full">
          ${item.status}
        </span>
      </div>
      <div class="col-span-2 text-right">
        <p class="font-data-mono ${item.statusVariant === 'critical' ? 'text-error font-extrabold text-lg' : 'text-primary font-bold'}">
          ${item.units} Units
        </p>
        <p class="text-[10px] ${item.statusVariant === 'critical' ? 'text-error font-bold uppercase' : 'text-on-surface-variant'}">
          ${item.updatedAgo}
        </p>
      </div>
      <div class="col-span-2 text-right">
        <div class="flex items-center justify-end ${item.trendUp ? 'text-emerald-600' : 'text-error'} font-bold gap-xs">
          <span class="material-symbols-outlined text-sm">${item.trendUp ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
          <span class="font-data-mono">${item.trend}</span>
        </div>
      </div>
      <div class="col-span-1 text-right">
        <button class="p-sm hover:bg-primary/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
          <span class="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </div>
  `).join('');

  return `
    <section class="bg-surface-container-low px-md py-32">
      <div class="max-w-container-max mx-auto">
        <div class="flex justify-between items-end mb-lg">
          <div>
            <h3 class="font-headline-lg text-3xl text-primary mb-xs">Live Stock Inventory</h3>
            <p class="text-on-surface-variant font-body-md">Real-time status of your high-velocity assets.</p>
          </div>
          <div class="flex gap-sm">
            <button class="bg-white border border-outline-variant px-md py-sm rounded-lg font-bold flex items-center gap-sm hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-md">filter_list</span> Filter
            </button>
            <button class="bg-white border border-outline-variant px-md py-sm rounded-lg font-bold flex items-center gap-sm hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-md">download</span> Export
            </button>
          </div>
        </div>

        <div class="bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm">
          <!-- Table header -->
          <div class="bg-surface-container p-lg border-b border-outline-variant grid grid-cols-12 gap-md items-center">
            <div class="col-span-3 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">Product Info</div>
            <div class="col-span-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">SKU Reference</div>
            <div class="col-span-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant text-center">Status</div>
            <div class="col-span-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant text-right">Available Units</div>
            <div class="col-span-2 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant text-right">Market Trend</div>
            <div class="col-span-1"></div>
          </div>

          <!-- Rows -->
          <div class="divide-y divide-outline-variant">
            ${rows}
          </div>

          <!-- Footer -->
          <div class="bg-surface-container p-md border-t border-outline-variant flex justify-center">
            <button
              onclick="Router.navigate('#/inventory')"
              class="text-primary font-bold text-sm hover:underline"
            >
              View All 1,420 Inventory Items
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Expose for non-module code and for imports
window.renderInventoryTable = renderInventoryTable;
export { renderInventoryTable };
