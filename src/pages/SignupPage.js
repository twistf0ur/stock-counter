/**
 * SignupPage.js
 * Simple signup page for new accounts.
 */

function renderSignupPage() {
  return `
    <main class="min-h-screen flex items-center justify-center bg-background text-on-background px-md py-xl">
      <div class="w-full max-w-md rounded-[2rem] bg-surface border border-outline-variant shadow-2xl overflow-hidden">
        <div class="bg-secondary text-on-secondary p-lg text-center">
          <h1 class="text-3xl font-bold">Create your account</h1>
          <p class="mt-sm text-sm text-on-secondary/85">Start managing stock with a free team workspace.</p>
        </div>
        <div class="p-xl space-y-lg">
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Full name</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="text" placeholder="Alex Sterling" />
          </div>
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Email address</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="email" placeholder="you@example.com" />
          </div>
          <div class="space-y-sm">
            <label class="block text-sm text-on-surface-variant">Password</label>
            <input class="w-full border border-outline-variant rounded-xl px-md py-sm bg-surface text-on-surface" type="password" placeholder="Create a password" />
          </div>
          <button onclick="handleSignUp()" class="w-full bg-primary text-white rounded-xl py-md font-bold hover:brightness-95 transition">Create Account</button>
          <div class="text-center text-sm text-on-surface-variant">
            <span>Already have an account?</span>
            <button onclick="Router.navigate('#/login')" class="underline">Sign In</button>
          </div>
        </div>
      </div>
    </main>
  `;
}

function handleSignUp() {
  Toast.show('Account created successfully', 'success');
  Router.navigate('#/dashboard');
}

window.renderSignupPage = renderSignupPage;
window.handleSignUp = handleSignUp;
export { renderSignupPage };
