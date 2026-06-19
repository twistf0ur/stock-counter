/**
 * LandingPage.js
 * Marketing landing page with overview content.
 */

function renderLandingPage() {
  return `
    ${window.renderPublicHeader ? window.renderPublicHeader('overview') : ''}
    <main class="bg-background text-on-background">
      <section class="max-w-container-max mx-auto px-md pt-24 pb-xl grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div class="space-y-8">
          <p class="font-label-sm uppercase tracking-[0.25em] text-primary">Stock intelligence for modern commerce</p>
          <h1 class="font-headline-lg text-5xl lg:text-[4rem] leading-tight">Move inventory faster with real-time insights and smart automation.</h1>
          <p class="text-body-lg max-w-2xl text-on-surface-variant">
            StockMaster helps operations teams monitor critical stock, avoid stockouts, and keep fulfillment workflows synchronized across warehouse, retail, and e-commerce systems.
          </p>
          <div class="flex flex-col sm:flex-row gap-sm">
            <button onclick="Router.navigate('#/signup')" class="bg-primary text-white rounded-xl px-8 py-4 font-bold shadow-lg hover:brightness-95 transition">Get Started</button>
            <button onclick="Router.navigate('#/login')" class="border border-outline-variant rounded-xl px-8 py-4 font-bold text-on-surface hover:bg-surface-container transition">Sign In</button>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[2rem] bg-surface border border-outline-variant shadow-xl p-lg">
          <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
          <div class="rounded-[1.75rem] overflow-hidden bg-white">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="Dashboard preview" class="w-full h-full object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section class="max-w-container-max mx-auto px-md pb-xl space-y-xl">
        <div class="grid gap-lg lg:grid-cols-3">
          <article class="bg-surface rounded-3xl p-lg border border-outline-variant shadow-sm">
            <h3 class="font-bold text-xl text-primary mb-sm">Optimized inventory health</h3>
            <p class="text-on-surface-variant">Stay ahead of demand with projected stock alerts and intelligent reorder recommendations.</p>
          </article>
          <article class="bg-surface rounded-3xl p-lg border border-outline-variant shadow-sm">
            <h3 class="font-bold text-xl text-primary mb-sm">Unified supplier sync</h3>
            <p class="text-on-surface-variant">Automate supplier updates and reduce out-of-stock risk across every sales channel.</p>
          </article>
          <article class="bg-surface rounded-3xl p-lg border border-outline-variant shadow-sm">
            <h3 class="font-bold text-xl text-primary mb-sm">Actionable performance</h3>
            <p class="text-on-surface-variant">Track critical KPIs and orders with an intuitive operational dashboard.</p>
          </article>
        </div>

        ${window.renderInventoryTable ? window.renderInventoryTable() : ''}
      </section>
    </main>
  `;
}

window.renderLandingPage = renderLandingPage;
export { renderLandingPage };
