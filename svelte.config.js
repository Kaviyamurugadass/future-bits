import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
            strict: false
        }),
        paths: {
            base: dev ? '' : '/future-bits'
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore specific 404 errors during prerendering
                if (message.includes('does not begin with `base`')) {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;