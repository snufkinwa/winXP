<script>
	import Item from './Item.svelte';
	export let items = [];
	export let onClick;
	export let bold = false;
</script>

{#each items as { text, icon }}
	<Item {text} {icon} on:click={onClick} {bold} />
{/each}
