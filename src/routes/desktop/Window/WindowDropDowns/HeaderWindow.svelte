<script>
	import { onMount } from 'svelte';
	import WindowDropDown from './WindowDropDown.svelte';
	import { removeApp, appState } from '../../stores/appState';
	import { get } from 'svelte/store';

	export let items = {};
	export let onClickItem = () => {};
	export let onClose; // Add onClose prop

	let dropDown;
	let openOption = '';

	// Get the current app ID from the appState
	let currentWindowId = null;

	$: currentWindowId = get(appState).focusedAppId;

	function hoverOption(option) {
		if (openOption) openOption = option;
	}

	function handleClickItem(name) {
		if (name === 'Close' || name === 'Exit') {
			if (onClose) {
				onClose();
			}
			removeApp(currentWindowId); // Call removeApp with currentWindowId
		} else {
			onClickItem(name);
		}
	}

	function handleMouseUp(e) {
		if (!dropDown.contains(e.target)) openOption = '';
	}

	onMount(() => {
		window.addEventListener('mouseup', handleMouseUp);
		return () => {
			window.removeEventListener('mouseup', handleMouseUp);
		};
	});
</script>

<ul bind:this={dropDown} class="drop-down-list" role="menu" aria-label="Window Options">
	{#each Object.keys(items) as name}
		<li class="drop-down-item" role="presentation">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				role="menuitem"
				tabindex="0"
				on:mousedown={() => (openOption = name)}
				on:mouseenter={() => hoverOption(name)}
				on:click={() => handleClickItem(name)}
			>
				{name}
			</div>
			{#if openOption === name}
				<WindowDropDown onClick={handleClickItem} items={items[name]} />
			{/if}
		</li>
	{/each}
</ul>

<style>
	.drop-down-list {
		list-style-type: none;
		padding-left: 0;
		margin: 0;
		display: flex;
		font-size: 13px;
	}

	.drop-down-list li {
		padding-right: 10px;
	}

	.drop-down-item {
		margin-bottom: 0px;
	}
</style>
