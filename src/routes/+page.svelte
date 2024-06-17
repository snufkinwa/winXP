<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import NoCellphones from '$lib/components/NoCellphones.svelte';

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
		if (typeof window !== 'undefined') {
			audio = new Audio(
				'https://xpportfoliowebsite.s3.amazonaws.com/SystemSoundEffects/Windows+XP+Startup.wav'
			);

			const loadTimeout = setTimeout(() => {
				isLoading = false;
				goto('/login');
				playAudio();
			}, 9000);

			return () => clearTimeout(loadTimeout); // Cleanup the timeout on unmount
		}
	});
</script>

<div class="show-large">
	<div class="page-container">
		{#if isLoading}
			<div class="windows__bg fade"></div>
		{:else}
			<div class="content fade">
				<slot />
			</div>
		{/if}
	</div>
</div>

<div class="show-small">
	<NoCellphones />
</div>

<style>
	.page-container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #000;
	}
	.windows__bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background: url($lib/assets/windowXPboot.gif) no-repeat center/contain;
		opacity: 1;
		transition: opacity 1s ease-out;
	}
	.content {
		opacity: 0;
		transition: opacity 1s ease-in;
	}
	.fade {
		opacity: 1;
		transition: opacity 1s ease-in-out;
	}
	.show-small {
		display: none;
	}
	.show-large {
		display: contents;
	}
	@media (max-width: 900px) {
		.show-small {
			display: contents;
		}
		.show-large {
			display: none;
		}
	}
</style>
