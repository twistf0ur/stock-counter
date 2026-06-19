/**
 * DashboardPage.js
 * Authenticated dashboard overview layout.
 */

function renderDashboardPage() {
  return `
    <div class="space-y-xl">
      <section class="grid gap-lg lg:grid-cols-3">
        ${window.renderMetricCard ? window.renderMetricCard({ label: 'Total Stock Value', value: '$1.2M', change: '+8.6%', icon: 'inventory', variant: 'primary', sub: 'vs last month' }) : ''}
        ${window.renderMetricCard ? window.renderMetricCard({ label: 'Orders Pending', value: '74', change: '+2.2%', icon: 'shopping_cart', variant: 'secondary', badge: 'Updated' }) : ''}
        ${window.renderMetricCard ? window.renderMetricCard({ label: 'Low Supply Alerts', value: '12', change: '-1.8%', icon: 'report_problem', variant: 'alert', badge: 'Immediate' }) : ''}
      </section>

      <section class="grid gap-lg lg:grid-cols-[2fr_1fr]">
        ${window.renderActivityFeed ? window.renderActivityFeed() : ''}
        ${window.renderMarketWidget ? window.renderMarketWidget() : ''}
      </section>

      <section>
        <div class="bg-surface rounded-3xl border border-outline-variant overflow-hidden shadow-sm">
          <div class="p-lg border-b border-outline-variant flex justify-between items-center">
            <div>
              <h3 class="font-headline-lg-mobile text-on-background">Inventory Snapshot</h3>
              <p class="text-on-surface-variant text-sm">A snapshot of the most critical stock locations and replenishment signals.</p>
            </div>
            <button onclick="Router.navigate('#/inventory')" class="bg-primary text-white px-lg py-sm rounded-xl font-bold hover:brightness-95 transition">Go to Inventory</button>
          </div>
          <div class="p-lg">${window.renderInventoryTable ? window.renderInventoryTable() : ''}</div>
        </div>
      </section>
    </div>
  `;
}

window.renderDashboardPage = renderDashboardPage;
export { renderDashboardPage };
