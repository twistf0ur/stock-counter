/**
 * MetricCard.js
 * Reusable KPI metric card used on the dashboard overview.
 *
 * @param {Object} opts
 * @param {string} opts.label     - Metric label
 * @param {string} opts.value     - Primary value string
 * @param {string} opts.change    - Change indicator string (e.g. "+4.2%")
 * @param {string} opts.icon      - Material Symbol icon name
 * @param {string} opts.variant   - 'primary' | 'secondary' | 'alert'
 * @param {string} [opts.badge]   - Optional badge text
 * @param {string} [opts.sub]     - Optional sub-label text
 */

function renderMetricCard({ label, value, change, icon, variant = 'secondary', badge = '', sub = '' }) {
  const variants = {
    primary: {
      wrap: 'bg-primary-container text-on-primary-container border border-primary',
      value: 'text-white',
      change: 'text-secondary-fixed text-sm font-data-mono',
      sub: 'text-secondary-fixed',
      icon: 'text-secondary-fixed',
      bg_icon: 'absolute -right-4 -bottom-4 opacity-5 pointer-events-none',
    },
    secondary: {
      wrap: 'bg-secondary-container text-on-secondary-container border border-outline-variant',
      value: '',
      change: 'text-xs font-data-mono bg-on-secondary-container/10 px-2 py-1 rounded',
      sub: '',
      icon: '',
      bg_icon: '',
    },
    alert: {
      wrap: 'bg-surface-container-lowest border border-error/20 shadow-sm',
      value: 'text-on-surface',
      change: 'text-error font-data-mono text-xs font-bold px-2 py-1 bg-error-container rounded-full',
      sub: 'text-on-surface-variant',
      icon: 'text-error',
      bg_icon: '',
    },
  };

  const v = variants[variant] || variants.secondary;

  if (variant === 'primary') {
    return `
      <div class="p-lg rounded-xl flex flex-col justify-between relative overflow-hidden h-40 ${v.wrap}">
        <div class="z-10">
          <span class="font-label-sm uppercase tracking-wider text-on-primary-container/70 mb-base block">${label}</span>
          <div class="flex items-baseline gap-sm">
            <span class="font-display-lg text-4xl ${v.value}">${value}</span>
            <span class="${v.change}">${change}</span>
          </div>
        </div>
        <div class="z-10 flex items-center gap-base">
          <span class="material-symbols-outlined ${v.icon} text-sm">trending_up</span>
          <span class="font-label-sm ${v.sub}">${sub}</span>
        </div>
        <div class="${v.bg_icon}">
          <span class="material-symbols-outlined" style="font-size:120px">${icon}</span>
        </div>
      </div>
    `;
  }

  if (variant === 'secondary') {
    return `
      <div class="p-lg rounded-xl flex flex-col justify-between border h-40 ${v.wrap}">
        <div class="flex justify-between items-start">
          <div class="w-10 h-10 rounded-lg bg-on-secondary-container/10 flex items-center justify-center">
            <span class="material-symbols-outlined">${icon}</span>
          </div>
          ${badge ? `<span class="text-xs font-data-mono bg-on-secondary-container/10 px-2 py-1 rounded">${badge}</span>` : ''}
        </div>
        <div>
          <span class="font-display-lg text-4xl">${value}</span>
          <span class="font-label-sm block">${label}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="p-lg rounded-xl flex flex-col justify-between h-40 ${v.wrap}">
      <div class="flex justify-between items-start">
        <div class="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center">
          <span class="material-symbols-outlined ${v.icon}">${icon}</span>
        </div>
        ${badge ? `<span class="${v.change}">${badge}</span>` : ''}
      </div>
      <div>
        <span class="font-display-lg text-4xl ${v.value}">${value}</span>
        <span class="font-label-sm block ${v.sub}">${label}</span>
      </div>
    </div>
  `;
}

// Expose and export
window.renderMetricCard = renderMetricCard;
export { renderMetricCard };
