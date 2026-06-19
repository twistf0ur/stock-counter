/**
 * InventoryCard.js
 * Interactive stock count card used on the Inventory Management page.
 *
 * @param {Object} item
 * @param {string} item.sku      - SKU identifier
 * @param {string} item.name     - Product name
 * @param {string} item.badge    - Status badge label
 * @param {string} item.variant  - 'normal' | 'low' | 'out'
 * @param {number} item.count    - Current stock count
 * @param {string} item.id       - Unique DOM id
 */

const InventoryCardData = [
  { id: 'card-1', sku: 'EB-001', name: 'Eco-friendly Water Bottle', badge: 'In Stock',   variant: 'normal', count: 45 },
  { id: 'card-2', sku: 'MS-452', name: 'Modernist Desk Lamp',        badge: 'Low Alert',  variant: 'low',    count: 8  },
  { id: 'card-3', sku: 'NB-110', name: 'Recycled Notebook A5',       badge: 'High Volume',variant: 'normal', count: 212},
  { id: 'card-4', sku: 'TP-229', name: 'Ceramic Travel Mug',         badge: 'Out of Stock',variant: 'out',  count: 0  },
  { id: 'card-5', sku: 'SL-038', name: 'Bamboo Desk Organiser',      badge: 'In Stock',   variant: 'normal', count: 73 },
  { id: 'card-6', sku: 'HD-112', name: 'Wireless HDMI Adapter',      badge: 'Low Alert',  variant: 'low',    count: 6  },
];

function getBadgeClass(variant) {
  return {
    normal: 'bg-secondary-container text-on-secondary-container',
    low:    'bg-error-container text-on-error-container',
    out:    'bg-surface-container-highest text-on-surface-variant',
  }[variant] || '';
}

function getCountClass(variant) {
  return {
    normal: 'text-primary',
    low:    'text-error',
    out:    'text-on-surface-variant',
  }[variant] || 'text-primary';
}

function getCardBorder(variant) {
  return {
    normal: 'border border-outline-variant',
    low:    'border-2 border-error/20',
    out:    'border border-outline-variant opacity-70',
  }[variant] || '';
}

function renderInventoryCard(item) {
  return `
    <div
      id="${item.id}"
      class="inventory-item-card bg-surface-container-lowest ${getCardBorder(item.variant)} rounded-xl p-lg flex flex-col gap-lg shadow-sm"
      data-count="${item.count}"
      data-variant="${item.variant}"
    >
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-xs">
          <span class="font-data-mono text-secondary uppercase text-[11px] tracking-widest">SKU: ${item.sku}</span>
          <h3 class="font-body-md text-lg font-bold text-on-surface">${item.name}</h3>
        </div>
        <span class="px-3 py-1 ${getBadgeClass(item.variant)} rounded-full font-label-sm text-[11px] uppercase badge-label">
          ${item.badge}
        </span>
      </div>

      <div class="flex items-end justify-between">
        <div class="flex flex-col">
          <span class="text-sm text-on-surface-variant mb-1">Current Stock</span>
          <span class="text-4xl font-bold count-display ${getCountClass(item.variant)} transition-colors">${item.count}</span>
        </div>
        <div class="flex items-center gap-sm">
          <button
            class="inv-btn-minus w-11 h-11 rounded-xl border border-outline text-primary flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all"
            data-target="${item.id}"
          >
            <span class="material-symbols-outlined">remove</span>
          </button>
          <button
            class="inv-btn-plus w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
            data-target="${item.id}"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderInventoryGrid(items = InventoryCardData) {
  return items.map(renderInventoryCard).join('');
}

/**
 * Binds +/- button interactions for all inventory cards in the DOM.
 * Call after the grid is inserted into the DOM.
 */
function initInventoryCardInteractions() {
  document.querySelectorAll('.inv-btn-plus, .inv-btn-minus').forEach(btn => {
    btn.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const card = document.getElementById(targetId);
      if (!card) return;

      const display = card.querySelector('.count-display');
      const badgeLabel = card.querySelector('.badge-label');
      let count = parseInt(card.getAttribute('data-count'), 10);

      const isPlus = this.classList.contains('inv-btn-plus');
      if (isPlus) {
        count++;
      } else if (count > 0) {
        count--;
      }

      card.setAttribute('data-count', count);
      display.textContent = count;

      // Update visual state
      if (count === 0) {
        display.className = `text-4xl font-bold count-display text-on-surface-variant transition-colors`;
        card.className = `inventory-item-card bg-surface-container-lowest border border-outline-variant opacity-70 rounded-xl p-lg flex flex-col gap-lg shadow-sm`;
        badgeLabel.className = `px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-label-sm text-[11px] uppercase badge-label`;
        badgeLabel.textContent = 'Out of Stock';
      } else if (count < 10) {
        display.className = `text-4xl font-bold count-display text-error transition-colors`;
        card.className = `inventory-item-card bg-surface-container-lowest border-2 border-error/20 rounded-xl p-lg flex flex-col gap-lg shadow-sm`;
        badgeLabel.className = `px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-sm text-[11px] uppercase badge-label`;
        badgeLabel.textContent = 'Low Alert';
      } else {
        display.className = `text-4xl font-bold count-display text-primary transition-colors`;
        card.className = `inventory-item-card bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col gap-lg shadow-sm`;
        badgeLabel.className = `px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-[11px] uppercase badge-label`;
        badgeLabel.textContent = 'In Stock';
      }

      Toast.show(isPlus ? 'Stock increased' : 'Stock decreased', 'success');
    });
  });
}

// Expose for non-module code and for imports
window.renderInventoryGrid = renderInventoryGrid;
window.initInventoryCardInteractions = initInventoryCardInteractions;
window.InventoryCardData = InventoryCardData;
export { renderInventoryGrid, initInventoryCardInteractions, InventoryCardData };
