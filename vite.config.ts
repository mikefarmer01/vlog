import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		fs: {
			allow: ['..']
		}
	},
	plugins: [
		vue(),
		Components({
			dts: true,
			resolvers: [
				PrimeVueResolver()
			]
		})
	]
});
