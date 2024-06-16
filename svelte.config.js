import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	preprocess: preprocess()
};

export default config;
