import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/future-bits', // Adjust this based on your GitHub Pages repository path
    },
    prerender: {
      handleHttpError: 'warn' // To prevent build errors on missing dynamic routes
    }
  }
};
