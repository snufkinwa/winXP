<script>
	import Desktop from './Desktop.svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
</script>

<MediaQuery query="(min-width: 1280px)" let:matches>
{#if matches}
<div class="mainContainer">
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
	}
</style>
