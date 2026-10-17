// Configure Tailwind Theme Extensions
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-secondary-container": "#3f5881",
        "on-tertiary-fixed": "#321200",
        "on-secondary-fixed": "#001b3d",
        "surface": "#f9f9ff",
        "tertiary-fixed": "#ffdbc9",
        "surface-container-highest": "#e0e2eb",
        "on-primary-fixed": "#001b3e",
        "surface-bright": "#f9f9ff",
        "on-tertiary-fixed-variant": "#763400",
        "on-secondary": "#ffffff",
        "primary": "#005cb8",
        "error": "#ba1a1a",
        "on-primary": "#ffffff",
        "surface-container": "#ebedf7",
        "surface-container-high": "#e6e8f1",
        "tertiary-container": "#c05900",
        "on-tertiary-container": "#0d0300",
        "tertiary": "#9a4600",
        "inverse-surface": "#2d3037",
        "surface-variant": "#e0e2eb",
        "surface-dim": "#d7dae3",
        "primary-fixed": "#d6e3ff",
        "surface-container-lowest": "#ffffff",
        "on-error-container": "#93000a",
        "primary-fixed-dim": "#aac7ff",
        "on-surface": "#181c22",
        "inverse-primary": "#aac7ff",
        "surface-tint": "#005db8",
        "inverse-on-surface": "#eef0fa",
        "background": "#f9f9ff",
        "on-surface-variant": "#414753",
        "surface-container-low": "#f1f3fc",
        "secondary-fixed-dim": "#aec7f7",
        "on-background": "#181c22",
        "on-primary-fixed-variant": "#00458d",
        "outline": "#717785",
        "on-error": "#ffffff",
        "on-primary-container": "#000512",
        "primary-container": "#1275e2",
        "outline-variant": "#c1c6d5",
        "secondary": "#465f88",
        "secondary-fixed": "#d6e3ff",
        "secondary-container": "#b6d0ff",
        "error-container": "#ffdad6",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#2d476f",
        "tertiary-fixed-dim": "#ffb68c"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "1.5rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-md": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "margin": "2rem",
        "gutter-desktop": "1.5rem",
        "margin-desktop": "2rem"
      },
      "fontFamily": {
        "label-md": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg": ["Inter"],
        "body-sm": ["Inter"],
        "headline-sm": ["Inter"],
        "headline-md": ["Inter"],
        "display": ["Inter"],
        "label-code-lg": ["JetBrains Mono"],
        "label-code-sm": ["JetBrains Mono"],
        "label-code-md": ["JetBrains Mono"]
      },
      "fontSize": {
        "label-md": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
        "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-lg": ["26px", { "lineHeight": "34px", "fontWeight": "600" }],
        "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
        "headline-sm": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
        "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
        "label-code-lg": ["13px", { "lineHeight": "18px", "fontWeight": "500" }],
        "label-code-sm": ["11px", { "lineHeight": "16px", "fontWeight": "500" }],
        "label-code-md": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
      }
    }
  }
};

// Executive Decision Button Interactions
document.addEventListener('DOMContentLoaded', () => {
  const btnApprove = document.getElementById('btn-approve');
  const btnReject = document.getElementById('btn-reject');

  if (btnApprove) {
    btnApprove.addEventListener('click', function () {
      this.innerHTML = `
        <span class="material-symbols-outlined text-[20px] animate-spin">refresh</span>
        <span>Deploying Lockdown & Revoking...</span>
      `;
      this.classList.add('opacity-90', 'pointer-events-none');

      setTimeout(() => {
        this.innerHTML = `
          <span class="material-symbols-outlined text-[20px]">check_circle</span>
          <span>Access Revoked // Action Signed</span>
        `;
        this.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
        this.classList.add('bg-emerald-100', 'text-emerald-800', 'border', 'border-emerald-300');
      }, 850);
    });
  }

  if (btnReject) {
    btnReject.addEventListener('click', function () {
      if (confirm('Acknowledge: Marking INC-8829-EDU as False Positive will unflag the ingress IP and archive the incident.')) {
        this.innerText = 'Archiving Incident...';
        this.classList.add('opacity-50', 'pointer-events-none');
      }
    });
  }
});