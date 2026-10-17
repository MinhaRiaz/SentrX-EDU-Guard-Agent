// Tailwind Theme Configuration
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-tertiary": "#ffffff",
        "on-primary-fixed": "#001b3e",
        "surface-container": "#ebedf7",
        "on-secondary-fixed-variant": "#2d476f",
        "tertiary-container": "#c05900",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9ff",
        "error-container": "#ffdad6",
        "on-primary-container": "#000512",
        "tertiary-fixed-dim": "#ffb68c",
        "secondary-fixed": "#d6e3ff",
        "surface-container-low": "#f1f3fc",
        "on-secondary-fixed": "#001b3d",
        "error": "#ba1a1a",
        "secondary": "#465f88",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed-variant": "#00458d",
        "on-tertiary-fixed-variant": "#763400",
        "background": "#f9f9ff",
        "tertiary": "#9a4600",
        "inverse-on-surface": "#eef0fa",
        "surface": "#f9f9ff",
        "on-error-container": "#93000a",
        "outline": "#717785",
        "tertiary-fixed": "#ffdbc9",
        "surface-dim": "#d7dae3",
        "on-secondary-container": "#3f5881",
        "on-error": "#ffffff",
        "surface-container-high": "#e6e8f1",
        "on-surface": "#181c22",
        "on-background": "#181c22",
        "surface-container-highest": "#e0e2eb",
        "on-tertiary-fixed": "#321200",
        "secondary-fixed-dim": "#aec7f7",
        "primary-container": "#1275e2",
        "on-tertiary-container": "#0d0300",
        "primary-fixed-dim": "#aac7ff",
        "on-surface-variant": "#414753",
        "surface-variant": "#e0e2eb",
        "inverse-primary": "#aac7ff",
        "primary-fixed": "#d6e3ff",
        "primary": "#005cb8",
        "on-secondary": "#ffffff",
        "secondary-container": "#b6d0ff",
        "surface-tint": "#005db8",
        "outline-variant": "#c1c6d5",
        "inverse-surface": "#2d3037"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-sm": "0.5rem",
        "gutter": "1.5rem",
        "margin": "2rem",
        "space-xl": "2.5rem",
        "space-md": "1rem",
        "space-xs": "0.25rem",
        "space-lg": "1.5rem"
      },
      "fontFamily": {
        "headline-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-sm": ["Inter", "sans-serif"],
        "label-code-sm": ["JetBrains Mono", "monospace"],
        "label-code-md": ["JetBrains Mono", "monospace"]
      },
      "fontSize": {
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "500"}],
        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "headline-sm": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
        "label-code-sm": ["11px", {"lineHeight": "14px", "fontWeight": "500"}],
        "label-code-md": ["12px", {"lineHeight": "16px", "fontWeight": "500"}]
      }
    }
  }
};

// Toggle Function for JSON Schema Drawer
function toggleJsonDrawer() {
  const drawer = document.getElementById('jsonSchemaDrawer');
  const btn = document.getElementById('schemaToggleBtn');
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    btn.classList.add('bg-surface-container-high');
  } else {
    drawer.classList.add('hidden');
    btn.classList.remove('bg-surface-container-high');
  }
}