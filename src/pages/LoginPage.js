/**
 * LoginPage.js
 * Simple login page for authentication flow.
 */

function renderLoginPage() {
  return `
    <main class="min-h-screen flex items-center justify-center bg-background text-on-background px-md py-xl">
      <div class="w-full max-w-md rounded-[2rem] bg-surface border border-outline-variant shadow-2xl overflow-hidden">
        <div class="bg-primary text-white p-lg text-center">
          <h1 class="text-3xl font-bold">Welcome back</h1>
          <p class="mt-sm text-sm text-white/85">Sign in to continue managing inventory and orders.</p>
        </div>
        <div class="p-xl space-y-lg">
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Email address</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="email" placeholder="you@example.com" />
          </div>
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Password</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="password" placeholder="••••••••" />
          </div>
          <button onclick="Toast.show('Signed in successfully', 'success')" class="w-full bg-primary text-white rounded-xl py-md font-bold hover:brightness-95 transition">Sign In</button>
          <div class="flex justify-between items-center text-sm text-on-surface-variant">
            <button onclick="Router.navigate('#/recover')" class="underline">Forgot password?</button>
            <button onclick="Router.navigate('#/signup')" class="underline">Create account</button>
          </div>
        </div>
      </div>
    </main>
  `;
}

window.renderLoginPage = renderLoginPage;
export { renderLoginPage };
