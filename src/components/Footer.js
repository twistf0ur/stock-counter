/**
 * Footer.js
 * Marketing site footer used on the landing page.
 */

function renderFooter() {
  return `
    <footer class="bg-white border-t border-outline-variant py-xl">
      <div class="max-w-container-max mx-auto px-md grid md:grid-cols-4 gap-xl">

        <div class="col-span-1">
          <div class="flex items-center gap-sm mb-md">
            <span class="material-symbols-outlined text-primary" style="font-size:24px">monitoring</span>
            <h2 class="font-headline-lg text-xl font-bold text-primary">StockMaster</h2>
          </div>
          <p class="text-on-surface-variant text-sm mb-lg">
            The intelligent backbone for modern commerce and supply chain management.
          </p>
        </div>

        <div>
          <h5 class="font-bold text-primary mb-md">Product</h5>
          <ul class="space-y-sm text-on-surface-variant text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">API Docs</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h5 class="font-bold text-primary mb-md">Company</h5>
          <ul class="space-y-sm text-on-surface-variant text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Press</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 class="font-bold text-primary mb-md">Legal</h5>
          <ul class="space-y-sm text-on-surface-variant text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Security</a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-container-max mx-auto px-md mt-xl pt-lg border-t border-outline-variant flex justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
        <p>© 2024 STOCKMASTER TECHNOLOGIES INC.</p>
        <div class="flex gap-lg">
          <span>System Status: Operational</span>
          <span>Version 4.2.1-Prod</span>
        </div>
      </div>
    </footer>
  `;
}

// Expose and export
window.renderFooter = renderFooter;
export { renderFooter };
