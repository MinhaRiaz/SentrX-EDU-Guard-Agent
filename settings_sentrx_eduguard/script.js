// Configure Tailwind Theme Extensions
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "error-container": "#ffdad6",
        "on-primary-container": "#000512",
        "secondary-container": "#b6d0ff",
        "secondary": "#465f88",
        "surface-variant": "#e0e2eb",
        "on-secondary": "#ffffff",
        "tertiary-container": "#c05900",
        "on-secondary-fixed-variant": "#2d476f",
        "on-tertiary-container": "#0d0300",
        "surface-bright": "#f9f9ff",
        "primary-container": "#1275e2",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#ffb68c",
        "surface-container": "#ebedf7",
        "on-surface-variant": "#414753",
        "secondary-fixed": "#d6e3ff",
        "inverse-on-surface": "#eef0fa",
        "tertiary": "#9a4600",
        "on-background": "#181c22",
        "primary": "#005cb8",
        "surface-tint": "#005db8",
        "surface-container-high": "#e6e8f1",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#e0e2eb",
        "surface-dim": "#d7dae3",
        "on-tertiary-fixed-variant": "#763400",
        "on-error-container": "#93000a",
        "outline": "#717785",
        "secondary-fixed-dim": "#aec7f7",
        "error": "#ba1a1a",
        "on-secondary-fixed": "#001b3d",
        "primary-fixed-dim": "#aac7ff",
        "inverse-surface": "#2d3037",
        "outline-variant": "#c1c6d5",
        "inverse-primary": "#aac7ff",
        "surface-container-low": "#f1f3fc",
        "on-error": "#ffffff",
        "on-primary": "#ffffff",
        "surface": "#f9f9ff",
        "on-tertiary-fixed": "#321200",
        "on-primary-fixed": "#001b3e",
        "on-secondary-container": "#3f5881",
        "primary-fixed": "#d6e3ff",
        "on-surface": "#181c22",
        "on-primary-fixed-variant": "#00458d",
        "tertiary-fixed": "#ffdbc9",
        "background": "#f9f9ff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem",
        "margin": "2rem",
        "space-md": "1rem",
        "gutter": "1.5rem",
        "gutter-desktop": "1.5rem",
        "space-lg": "1.5rem"
      },
      "fontFamily": {
        "label-md": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg": ["Inter"],
        "mono": ["JetBrains Mono"]
      },
      "fontSize": {
        "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
        "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-sm": ["16px", { "lineHeight": "24px", "letterSpacing": "-0.005em", "fontWeight": "600" }],
        "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.015em", "fontWeight": "700" }],
        "label-code-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500" }],
        "label-code-md": ["12px", { "lineHeight": "18px", "letterSpacing": "0.02em", "fontWeight": "600" }]
      }
    }
  }
};

// Application Event Listeners & Interactions
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Slider Label updates
  const quarantineSlider = document.getElementById('quarantine-slider');
  const quarantineVal = document.getElementById('quarantine-val');

  if (quarantineSlider && quarantineVal) {
    quarantineSlider.addEventListener('input', (e) => {
      quarantineVal.textContent = parseFloat(e.target.value).toFixed(1) + '%';
    });
  }

  // Interactive Save Button & Toast Notification
  const saveBtn = document.getElementById('save-btn');
  const toast = document.getElementById('status-toast');
  const closeToastBtn = document.getElementById('close-toast-btn');

  if (saveBtn && toast) {
    saveBtn.addEventListener('click', () => {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    });
  }

  if (closeToastBtn && toast) {
    closeToastBtn.addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }
});