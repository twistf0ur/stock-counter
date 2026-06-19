/**
 * InventoryPage.js
 * Comprehensive inventory management page with add/edit/delete operations.
 */

function renderInventoryPage() {
  if (!window.currentInventoryItems) {
    window.currentInventoryItems = [
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
  }

  return `
    <div class="space-y-xl">
      <!-- Header Section -->
      <section class="grid lg:grid-cols-[1fr_0.44fr] gap-lg">
        <div class="space-y-md">
          <div class="flex flex-col sm:flex-row justify-between gap-sm">
            <div>
              <p class="font-label-sm uppercase tracking-[0.2em] text-primary">Inventory Management</p>
              <h2 class="font-headline-lg-mobile text-4xl text-on-background">Maintain stock levels with intelligent supply signals.</h2>
            </div>
            <div class="flex gap-sm">
              <button onclick="handleBulkActions()" class="bg-white border border-outline-variant px-lg py-sm rounded-xl font-bold hover:bg-surface-container-high transition">Bulk actions</button>
              <button onclick="openAddProductModal()" class="bg-primary text-white px-lg py-sm rounded-xl font-bold hover:brightness-95 transition">Add Product</button>
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

      <!-- Inventory Table -->
      <div id="inventory-table-root">
        ${window.renderInventoryTable ? window.renderInventoryTable(window.currentInventoryItems) : ''}
      </div>

      <!-- Add Product Modal -->
      <div id="add-product-modal" style="display:none" class="fixed inset-0 bg-black/50 z-[9000] flex items-center justify-center p-md">
        <div class="bg-surface rounded-3xl shadow-2xl max-w-md w-full p-lg space-y-lg">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold text-on-background">Add Product</h3>
            <button onclick="closeAddProductModal()" class="material-symbols-outlined text-on-surface-variant hover:text-on-background">close</button>
          </div>

          <form id="add-product-form" class="space-y-md" onsubmit="submitAddProduct(event)">
            <div>
              <label class="block text-sm font-bold text-on-surface-variant mb-xs">Product Name</label>
              <input type="text" id="product-name" required class="w-full border border-outline-variant rounded-xl px-md py-sm" placeholder="e.g., MacBook Pro" />
            </div>

            <div>
              <label class="block text-sm font-bold text-on-surface-variant mb-xs">Category</label>
              <input type="text" id="product-category" required class="w-full border border-outline-variant rounded-xl px-md py-sm" placeholder="e.g., Laptops & Computing" />
            </div>

            <div>
              <label class="block text-sm font-bold text-on-surface-variant mb-xs">SKU</label>
              <input type="text" id="product-sku" required class="w-full border border-outline-variant rounded-xl px-md py-sm" placeholder="e.g., APL-024-X" />
            </div>

            <div>
              <label class="block text-sm font-bold text-on-surface-variant mb-xs">Units</label>
              <input type="number" id="product-units" required min="1" class="w-full border border-outline-variant rounded-xl px-md py-sm" placeholder="e.g., 42" />
            </div>

            <div class="flex gap-sm pt-md">
              <button type="button" onclick="closeAddProductModal()" class="flex-1 border border-outline-variant text-on-surface rounded-xl py-md font-bold hover:bg-surface-container-high transition">Cancel</button>
              <button type="submit" class="flex-1 bg-primary text-white rounded-xl py-md font-bold hover:brightness-95 transition">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

function openAddProductModal() {
  const modal = document.getElementById('add-product-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('product-name')?.focus();
  }
}

function closeAddProductModal() {
  const modal = document.getElementById('add-product-modal');
  if (modal) {
    modal.style.display = 'none';
  }
  document.getElementById('add-product-form')?.reset();
}

function submitAddProduct(event) {
  event.preventDefault();

  if (!window.currentInventoryItems) {
    window.currentInventoryItems = [];
  }

  const name = document.getElementById('product-name').value;
  const category = document.getElementById('product-category').value;
  const sku = document.getElementById('product-sku').value;
  const units = parseInt(document.getElementById('product-units').value);

  if (!name || !category || !sku || !units) {
    Toast.show('Please fill all fields', 'error');
    return;
  }

  window.currentInventoryItems.unshift({
    icon: 'inventory_2',
    name: name,
    category: category,
    sku: sku,
    status: units > 50 ? 'OPTIMAL' : units > 20 ? 'SURPLUS' : 'CRITICAL LOW',
    statusVariant: units > 50 ? 'optimal' : units > 20 ? 'surplus' : 'critical',
    units: units,
    updatedAgo: 'Just added',
    trend: '+1.1%',
    trendUp: true,
  });

  const tableRoot = document.getElementById('inventory-table-root');
  if (tableRoot && window.renderInventoryTable) {
    tableRoot.innerHTML = window.renderInventoryTable(window.currentInventoryItems);
  }

  closeAddProductModal();
  Toast.show(`Product "${name}" added successfully`, 'success');
}

function handleBulkActions() {
  Toast.show('Bulk actions are ready. Select items to update stock.', 'info');
}

window.renderInventoryPage = renderInventoryPage;
window.openAddProductModal = openAddProductModal;
window.closeAddProductModal = closeAddProductModal;
window.submitAddProduct = submitAddProduct;
window.handleBulkActions = handleBulkActions;
export { renderInventoryPage };
