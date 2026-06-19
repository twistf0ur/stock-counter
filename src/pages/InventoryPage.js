/**
 * InventoryPage.js
 * Inventory management page.
 */

function renderInventoryPage() {
  return `
    <div class="space-y-xl">
      <section class="grid lg:grid-cols-[1fr_0.44fr] gap-lg">
        <div class="space-y-md">
          <div class="flex flex-col sm:flex-row justify-between gap-sm">
            <div>
              <p class="font-label-sm uppercase tracking-[0.2em] text-primary">Inventory Management</p>
              <h2 class="font-headline-lg-mobile text-4xl text-on-background">Maintain stock levels with intelligent supply signals.</h2>
            </div>
            <div class="flex gap-sm">
              <button class="bg-white border border-outline-variant px-lg py-sm rounded-xl font-bold hover:bg-surface-container-high transition">Bulk actions</button>
              <button class="bg-primary text-white px-lg py-sm rounded-xl font-bold hover:brightness-95 transition">Add Product</button>
            </div>
          </div>

          <div class="grid gap-lg lg:grid-cols-2">
            <div class="bg-surface rounded-3xl p-lg border border-outline-variant">
              <p class="text-on-surface-variant uppercase tracking-[0.18em] text-xs mb-sm">Stock availability</p>
              <p class="text-4xl font-bold text-primary">94.6%</p>
              <p class="mt-sm text-sm text-on-surface-variant">Inventory is synced and available across all warehouses.</p>
            </div>
            <div class="bg-surface rounded-3xl p-lg border border-outline-variant">
              <p class="text-on-surface-variant uppercase tracking-[0.18em] text-xs mb-sm">Orders pending</p>
              <p class="text-4xl font-bold text-primary">48</p>
              <p class="mt-sm text-sm text-on-surface-variant">Pending shipments that are flagged for urgent fulfillment.</p>
            </div>
          </div>
        </div>

        <div class="bg-primary-container rounded-3xl p-lg text-on-primary-container shadow-sm">
          <div class="flex items-center justify-between mb-lg">
            <div>
              <h3 class="font-bold text-xl">Recommendation</h3>
              <p class="text-sm text-on-primary-container/85">Optimize reorder volume for this week.</p>
            </div>
            <span class="material-symbols-outlined">tips_and_updates</span>
          </div>
          <div class="rounded-3xl bg-white/10 p-lg">
            <p class="text-on-primary-container text-sm mb-md">Daily trend shows replenishment priority on premium electronics and supply chain buffers.</p>
            <div class="grid gap-sm">
              <div class="bg-surface-container rounded-2xl p-md">
                <p class="text-sm text-on-primary-container/90">Reorder target</p>
                <p class="font-bold text-2xl">+320 units</p>
              </div>
              <div class="bg-surface-container rounded-2xl p-md">
                <p class="text-sm text-on-primary-container/90">Expected delivery</p>
                <p class="font-bold text-2xl">3 days</p>
              </div>
            </div>
            <button
              onclick="Toast.show('Recommendation saved to your dashboard', 'success')"
              class="mt-lg w-full bg-secondary text-on-secondary rounded-xl py-md font-bold hover:brightness-95 transition"
            >
              Save Recommendation
            </button>
          </div>
        </div>
      </section>

      ${window.renderInventoryTable ? window.renderInventoryTable() : ''}
    </div>
  `;
}

window.renderInventoryPage = renderInventoryPage;
export { renderInventoryPage };
