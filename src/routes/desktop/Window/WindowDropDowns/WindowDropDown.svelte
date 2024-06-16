<script>
	export let items = [];

	export let onClick = () => {};

	let option = '';

	function handleItemClick(item) {
		onClick(item.text);
	}
</script>

<div class="drop-down__menu">
	{#each items as item, index}
		{#if item.type === 'item'}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`drop-down__row${item.disable ? '--disable' : ''}`}
				on:mouseenter={() => (option = item.text)}
				on:click={() => handleItemClick(item)}
			>
				<div class="drop-down__check"></div>
				<div class="drop-down__text">
					{item.text}
					<span class="drop-down__hot-key">{item.hotkey || ''}</span>
				</div>
				<div class="drop-down__arrow--disable"></div>
			</div>
		{:else if item.type === 'separator'}
			<div class="drop-down__separator"></div>
		{/if}
	{/each}
</div>

<style>
	.drop-down__menu {
		position: absolute;
		background-color: #f0f0f0;
		border: 1px solid #a6a6a6;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
		font-size: 12px;
		min-width: 200px;
		z-index: 1000;
		padding: 4px 0px;
	}

	.drop-down__row {
		display: flex;
		flex-direction: column;
		padding: 4px 2px;
		cursor: pointer;
		color: #000;
		white-space: nowrap;
	}

	.drop-down__row:hover {
		background-color: #0a246a;
		color: #fff;
	}

	.drop-down__row--disable {
		color: #aaa;
		cursor: default;
		display: flex;
		flex-direction: column;
		padding: 4px 4px;
		cursor: pointer;
		white-space: nowrap;
	}

	.drop-down__check {
		width: 16px;
		margin-right: 8px;
	}

	.drop-down__text {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
	}

	.drop-down__hot-key {
		margin-right: 5px;
		color: #888;
	}

	.drop-down__arrow {
		width: 0;
		height: 0;
		margin-left: 8px;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid #000;
	}

	.drop-down__arrow--disable {
		width: 0;
		height: 0;
	}

	.drop-down__separator {
		height: 1px;
		background-color: #a6a6a6;
		margin: 4px 0;
	}
</style>
