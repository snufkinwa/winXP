import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
		'process.env.TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
		'process.env.PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_KEY)
	},
	build: {
		sourcemap: true
	}
});
