import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const base = process.env.BASE_PATH || (dev ? '' : '/future-bits');

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
            base: base
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                if (message.includes('does not begin with `base`')) {
                    return;
                }
                throw new Error(message);
            }
        },
        appDir: 'app'
    }
};

export default config;