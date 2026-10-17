// Configure Tailwind Theme Extensions
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-secondary-fixed-variant": "#2d476f",
        "secondary-container": "#b6d0ff",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#00458d",
        "surface-bright": "#f9f9ff",
        "tertiary-fixed": "#ffdbc9",
        "on-tertiary-container": "#0d0300",
        "surface-dim": "#d7dae3",
        "error": "#ba1a1a",
        "surface-tint": "#005db8",
        "surface-container-high": "#e6e8f1",
        "secondary": "#465f88",
        "surface": "#f9f9ff",
        "tertiary-fixed-dim": "#ffb68c",
        "outline": "#717785",
        "on-tertiary-fixed-variant": "#763400",
        "inverse-primary": "#aac7ff",
        "on-secondary-fixed": "#001b3d",
        "on-surface-variant": "#414753",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "surface-variant": "#e0e2eb",
        "inverse-surface": "#2d3037",
        "on-primary-fixed": "#001b3e",
        "primary-container": "#1275e2",
        "tertiary-container": "#c05900",
        "surface-container": "#ebedf7",
        "on-tertiary": "#ffffff",
        "primary": "#005cb8",
        "secondary-fixed": "#d6e3ff",
        "outline-variant": "#c1c6d5",
        "secondary-fixed-dim": "#aec7f7",
        "inverse-on-surface": "#eef0fa",
        "surface-container-low": "#f1f3fc",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "surface-container-highest": "#e0e2eb",
        "on-secondary-container": "#3f5881",
        "primary-fixed": "#d6e3ff",
        "on-background": "#181c22",
        "on-surface": "#181c22",
        "on-primary-container": "#000512",
        "tertiary": "#9a4600",
        "primary-fixed-dim": "#aac7ff",
        "background": "#f9f9ff",
        "on-tertiary-fixed": "#321200"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-sm": "0.5rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-xs": "0.25rem",
        "space-md": "1rem",
        "margin": "2rem",
        "gutter": "1.5rem",
        "gutter-desktop": "1.5rem",
        "margin-desktop": "2rem"
      },
      "fontFamily": {
        "label-md": ["Inter"],
        "headline-lg": ["Inter"],
        "body-md": ["Inter"],
        "body-sm": ["Inter"],
        "display": ["Inter"],
        "headline-sm": ["Inter"],
        "label-code-lg": ["JetBrains Mono"],
        "label-code-sm": ["JetBrains Mono"],
        "label-code-md": ["JetBrains Mono"]
      },
      "fontSize": {
        "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
        "display": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-sm": ["16px", { "lineHeight": "24px", "letterSpacing": "-0.005em", "fontWeight": "500" }],
        "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-code-lg": ["13px", { "lineHeight": "18px", "letterSpacing": "0.01em", "fontWeight": "500" }],
        "label-code-sm": ["10px", { "lineHeight": "14px", "letterSpacing": "0.03em", "fontWeight": "500" }],
        "label-code-md": ["11px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
        "headline-lg": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
        "body-lg": ["15px", { "lineHeight": "22px", "fontWeight": "400" }]
      }
    }
  }
};

// Filter switching logic
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Toggle button active state styles
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-primary-container', 'text-white', 'shadow-sm');
        btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
      });

      button.classList.add('active', 'bg-primary-container', 'text-white', 'shadow-sm');
      button.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');

      // Filter incident cards by risk status
      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.incident-card');

      cards.forEach(card => {
        const risk = card.getAttribute('data-risk');
        if (filter === 'all' || filter === risk) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});