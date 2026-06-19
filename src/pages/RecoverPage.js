/**
 * RecoverPage.js
 * Password recovery page.
 */

function renderRecoverPage() {
  return `
    <main class="min-h-screen flex items-center justify-center bg-background text-on-background px-md py-xl">
      <div class="w-full max-w-md rounded-[2rem] bg-surface border border-outline-variant shadow-2xl overflow-hidden">
        <div class="bg-surface-container-high p-lg text-center">
          <h1 class="text-3xl font-bold">Recover your password</h1>
          <p class="mt-sm text-sm text-on-surface-variant">Enter your email and we’ll send instructions to reset your password.</p>
        </div>
        <div class="p-xl space-y-lg">
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Email address</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="email" placeholder="you@example.com" />
          </div>
          <button onclick="Toast.show('Recovery email sent', 'info')" class="w-full bg-primary text-white rounded-xl py-md font-bold hover:brightness-95 transition">Send Recovery Email</button>
          <div class="text-center text-sm text-on-surface-variant">
            <span>Remember your password?</span>
            <button onclick="Router.navigate('#/login')" class="underline">Sign In</button>
          </div>
        </div>
      </div>
    </main>
  `;
}

window.renderRecoverPage = renderRecoverPage;
export { renderRecoverPage };
