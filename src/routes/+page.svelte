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
				<div class="windows__bg" class:fade-out={!isLoading}></div>
			{:else}
				<div class="content" class:fade-in={!isLoading}>
					<slot />
				</div>
			{/if}
		</div>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
	{#if matches}
		<div class="page-container"></div>
	{/if}
</MediaQuery>

<style>
	.page-container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #000000;
	}
	.windows__bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: #000000;
		background: url($lib/assets/windowXPboot.gif) no-repeat;
		background-size: contain;
		background-position: center;
		opacity: 1;
		transition: opacity 1s ease-out;
	}
	.windows__bg.fade-out {
		opacity: 0;
	}
	.content {
		opacity: 0;
		transition: opacity 1s ease-in;
		background-color: #000000;
	}
	.content.fade-in {
		opacity: 1;
	}
</style>
