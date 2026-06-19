/**
 * ActivityFeed.js
 * Recent activity list for the dashboard overview page.
 */

const activityItems = [
  {
    icon: 'inventory_2',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    code: 'NVDA-X2 - Graphics Processor Units',
    time: '2m ago',
    description: 'Inventory shipment processed: <span class="text-primary font-semibold">+450 units</span> received at <span class="font-medium text-on-surface">Warehouse A (Dublin)</span>',
  },
  {
    icon: 'sync',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    code: 'SYSTEM-RECONCILIATION',
    time: '15m ago',
    description: 'Full database reconciliation complete for <span class="font-semibold text-on-surface">Global Distribution Nodes</span>. No discrepancies found.',
  },
  {
    icon: 'shopping_cart_checkout',
    iconBg: 'bg-error-container/20',
    iconColor: 'text-error',
    code: 'ORDER #ORD-9921',
    time: '1h ago',
    description: 'Large bulk order fulfillment triggered for <span class="font-semibold text-on-surface">Client: Apex Corp</span>. Total value: <span class="font-bold text-on-surface">$12,400</span>',
  },
  {
    icon: 'person_add',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    code: 'NEW-ACCOUNT',
    time: '3h ago',
    description: 'New vendor account approved: <span class="font-semibold text-on-surface">Logi-Transit Solutions</span>. Integration pending.',
  },
];

function renderActivityFeed(items = activityItems) {
  const rows = items.map(item => `
    <div class="p-lg flex items-center gap-lg hover:bg-secondary-container/10 transition-colors">
      <div class="w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined ${item.iconColor}">${item.icon}</span>
      </div>
      <div class="flex-grow">
        <div class="flex justify-between items-center mb-1">
          <span class="font-data-mono text-primary font-bold">${item.code}</span>
          <span class="font-label-sm text-on-surface-variant">${item.time}</span>
        </div>
        <p class="text-on-surface-variant text-sm">${item.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="lg:col-span-2">
      <div class="flex justify-between items-end mb-md">
        <h3 class="font-headline-lg-mobile text-on-background">Recent Activity</h3>
        <div class="flex gap-sm">
          <button class="px-3 py-1 text-sm border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors">Filters</button>
          <button class="text-primary font-label-sm hover:underline py-1">View Full History</button>
        </div>
      </div>
      <div class="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div class="divide-y divide-outline-variant/30">
          ${rows}
        </div>
      </div>
    </section>
  `;
}

// Expose and export
window.renderActivityFeed = renderActivityFeed;
export { renderActivityFeed };
