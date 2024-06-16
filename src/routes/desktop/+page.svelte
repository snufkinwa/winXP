<script>
	import { onMount } from 'svelte';
	import Desktop from './Desktop.svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';

	let showDesktop = false;
	let isVisible = false;

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
			setTimeout(() => {
				showDesktop = true;
			}, 50); // Delay to ensure the transition effect is applied correctly
		}, 100);
	});
</script>

<MediaQuery query="(min-width: 1280px)" let:matches>
	{#if matches}
		<div class="mainContainer {isVisible ? 'fade-in show' : ''}">
			<Desktop />
		</div>
	{/if}
</MediaQuery>

<style>
	.mainContainer {
		margin: 0;
		top: 0;
		display: flex;
		width: 100vw;
		height: 100vh;
		background-image: url('https://i.imgur.com/Zk6TR5k.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		opacity: 0;
	}

	.fade-in {
		opacity: 0;
		transition: opacity 1s ease-in;
	}

	.show {
		opacity: 1;
	}
</style>
