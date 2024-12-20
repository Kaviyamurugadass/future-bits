export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'
  ],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('flowbite-typography')
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base Theme Colors - Change these to update the entire theme
        themeColor: '#321353',    // Main brand color (purple)
        secondaryColor: '#FD7D00',  // Secondary color (orange)
        tertiaryColor: '#063B48',   // Tertiary color (dark green)
        bgColor: '#ffffff',         // Main background color
        primaryTextColor: '#ffffff', // Main text color
        secondaryTextColor: '#E6E6E6', // Secondary text color
        tertiaryTextColor: '#ffffff', // Light text color

        // Automatic color variations based on primary color
        primary: {
          50: '#F2F0F5',   // Lightest
          100: '#E5E0EB',
          200: '#CBC2D6',
          300: '#B1A3C2',
          400: '#9785AD',
          500: '#321353',  // Base color (same as themeColor-900)
          600: '#280F42',
          700: '#1E0B32',
          800: '#140821',
          900: '#0A0411'   // Darkest
        },
        themeColor: {
          50: '#fefce8',   // Lightest yellow
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',  // Medium yellow
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12'   // Darkest yellow
        },
      }
    }
  }
};