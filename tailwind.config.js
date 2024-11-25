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
        // themeColor: {
        //   50: '#faf5ff',   // Lightest purple
        //   100: '#f3e8ff',
        //   200: '#e9d5ff',
        //   300: '#d8b4fe',
        //   400: '#c084fc',
        //   500: '#a855f7',  // Medium purple
        //   600: '#9333ea',
        //   700: '#7e22ce',
        //   800: '#6b21a8',
        //   900: '#9333ea'   //581C87  Darkest purple
        // },
      //   themeColor: {
      //     50: '#f0f9ff',   // Lightest sky blue
      //     100: '#e0f2fe',
      //     200: '#bae6fd',
      //     300: '#7dd3fc',
      //     400: '#38bdf8',
      //     500: '#0ea5e9',  // Medium sky blue
      //     600: '#0284c7',
      //     700: '#0369a1',
      //     800: '#075985',
      //     900: '#0284c7'   // Your primary/darkest sky blue (instead of #0c4a6e for better visibility)
      // },
      themeColor: {
        50: '#f0f9ff',   // Lightest blue-white
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Medium blue
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'   // Darkest blue
      },
      }
    }
  }
};