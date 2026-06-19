/**
 * MarketWidget.js
 * Market intelligence sidebar widget for the dashboard.
 */

function renderMarketWidget() {
  return `
    <section class="lg:col-span-1">
      <h3 class="font-headline-lg-mobile text-on-background mb-md">Market Intelligence</h3>
      <div class="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm sticky top-24">

        <!-- Gradient header -->
        <div class="relative h-48 bg-gradient-to-br from-primary-container to-tertiary-container overflow-hidden">
          <svg class="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 400 200">
            <path d="M0,150 Q50,120 100,140 T200,100 T300,120 T400,80" fill="none" stroke="#70a380" stroke-width="3"/>
            <path d="M0,170 Q70,140 140,160 T280,120 T400,150" fill="none" stroke="#baefc8" stroke-width="2"/>
          </svg>
          <div class="absolute inset-0 p-lg flex flex-col justify-between">
            <div>
              <span class="font-label-sm text-on-primary-container uppercase tracking-widest">Market Pulse</span>
              <h4 class="text-white font-headline-lg-mobile mt-1">Bullish Trends</h4>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-md rounded-lg border border-white/20">
              <p class="text-on-primary-container font-label-sm">
                Tech sector logistics costs are down 12% this week. Optimal time for restocking high-volume units.
              </p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="p-lg bg-surface">
          <div class="space-y-md">
            <div class="flex justify-between items-center">
              <span class="text-sm text-on-surface-variant">Global Volatility Index</span>
              <span class="text-sm font-data-mono text-primary bg-primary-fixed/30 px-2 py-0.5 rounded">Low</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-on-surface-variant">Shipping Reliability</span>
              <span class="text-sm font-data-mono text-primary">98.4%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-on-surface-variant">Active Suppliers</span>
              <span class="text-sm font-data-mono text-primary">47</span>
            </div>
            <div class="pt-md border-t border-outline-variant">
              <button
                class="w-full py-2 bg-secondary-container text-on-secondary-container font-label-sm rounded-lg hover:brightness-95 transition-all"
                onclick="Toast.show('Forecast report downloading...', 'success')"
              >
                Download Full Forecast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Expose and export
window.renderMarketWidget = renderMarketWidget;
export { renderMarketWidget };
