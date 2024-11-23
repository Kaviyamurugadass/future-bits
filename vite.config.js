import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/future-bits/',
	server: {
		fs: {
			allow: ['.']
		}
	},
	build: {
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name].[hash][extname]',
				chunkFileNames: 'assets/[name].[hash].js',
				entryFileNames: 'assets/[name].[hash].js'
			}
		}
	}
});
