<script>
	import { onMount } from 'svelte';
	import Desktop from './Desktop.svelte';

	let showDesktop = false;
	let isVisible = false;

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
			setTimeout(() => {
				showDesktop = true;
			}, 50);
		}, 100);
	});
</script>

<div class="show-large">
	<div class={`mainContainer ${isVisible ? 'fade-in show' : ''}`}>
		{#if showDesktop}
			<Desktop />
		{/if}
	</div>
</div>

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
		transition: opacity 1s ease-in;
	}

	.fade-in {
		opacity: 0;
	}

	.show {
		opacity: 1;
	}

	.show-small {
		display: none;
	}
	.show-large {
		display: contents;
	}
	@media (max-width: 1090px) {
		.show-small {
			display: contents;
		}
		.show-large {
			display: none;
		}
	}
</style>
