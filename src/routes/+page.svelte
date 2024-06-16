<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import MediaQuery from '$lib/components/MediaQuery.svelte';

	let isLoading = true;
	let audio;

	function playAudio() {
		if (audio) {
			audio.play().catch((error) => {
				console.warn('Failed to play audio:', error);
			});
		}
	}

	onMount(() => {
		audio = new Audio(
			'https://xpportfoliowebsite.s3.amazonaws.com/SystemSoundEffects/Windows+XP+Startup.wav'
		);
		setTimeout(() => {
			isLoading = false;
			goto('/login');
			playAudio();
		}, 6000);
	});
</script>

<MediaQuery query="(min-width: 1280px)" let:matches>
	{#if matches}
		<div class="page-container">
			{#if isLoading}
				<div class="windows__bg"></div>
			{:else}
				<slot />
			{/if}
		</div>
	{/if}
</MediaQuery>

<style>
	.page-container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: black;
	}

	.windows__bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: black;
		background: url($lib/assets/windowXPboot.gif) no-repeat;
		background-size: contain;
		background-position: center;
	}
</style>
