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
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        primaryColor: '#800080', //purple
        secondaryColor : '#FD7D00', //orange
        tertiaryColor: '#063B48', //darkgreen

        bgColor : '#ffffff',  //white

        primaryTextColor: "#063B48", //darkgreen
        secondaryTextColor: '#E6E6E6', //gray
        tertiaryTextColor: '#ffffff', //white

      }
    }
  }
};