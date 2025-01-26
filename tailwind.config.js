/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        techelegance: {
          "primary": "#1E90FF",       // Bright Blue (for primary actions, like VS Code's blue)
          "secondary": "#FF8C00",     // Orange (for secondary actions, like GitHub's orange)
          "accent": "#32CD32",        // Lime Green (for highlights and success, like terminal success)
          "neutral": "#2D2D2D",       // Dark Gray (for neutral elements)
          "base-100": "#1E1E1E",      // Very Dark Gray (for the main background, like VS Code's editor)
          "base-200": "#252526",      // Slightly lighter dark gray (for secondary backgrounds)
          "base-300": "#333333",      // Medium Dark Gray (for tertiary backgrounds)
          "info": "#1E90FF",          // Bright Blue (for informational messages)
          "success": "#32CD32",       // Lime Green (for success messages)
          "warning": "#FF8C00",       // Orange (for warnings)
          "error": "#FF0000",         // Red (for errors or destructive actions)
          "text-base": "#FFFFFF",     // White (for primary text)
          "text-neutral": "#CCCCCC",  // Light Gray (for secondary text)
          // Enhanced Colors
          "primary-focus": "#007ACC", // Darker Blue (for focused/hovered primary elements)
          "secondary-focus": "#CC7000", // Darker Orange (for focused/hovered secondary elements)
          "accent-focus": "#228B22",  // Darker Green (for focused/hovered accent elements)
          "neutral-focus": "#1E1E1E", // Darker Gray (for focused/hovered neutral elements)
          "primary-content": "#FFFFFF", // White text on primary elements
          "secondary-content": "#FFFFFF", // White text on secondary elements
          "accent-content": "#FFFFFF", // White text on accent elements
          "neutral-content": "#FFFFFF", // White text on neutral elements
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};