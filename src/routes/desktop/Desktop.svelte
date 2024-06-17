<script>
	import {
		iconState,
		appState,
		addApp,
		removeApp,
		minimizeApp,
		toggleMaximizeApp,
		focusApp
	} from './stores/appState';
	import { onMount, onDestroy } from 'svelte';
	import interact from 'interactjs';
	import StartBar from './StartBar/StartBar.svelte';
	import Window from './Window/Window.svelte';

	function handleIconClick(clickedIcon) {
		iconState.update((icons) => {
			return icons.map((icon) => {
				icon.active = icon.id === clickedIcon.id;
				return icon;
			});
		});
		addApp(clickedIcon.title);
	}

	function closeWindow(id) {
		removeApp(id);
	}

	function minimizeWindow(id) {
		minimizeApp(id);
	}

	function handleFocus(id) {
		focusApp(id);
	}

	function formatTitle(title) {
		const words = title.split(' ');
		if (words.length > 2) {
			return `${words.slice(0, 2).join(' ')}<br>${words.slice(2).join(' ')}`;
		}
		return title;
	}

	function handleClickOutside(event) {
		if (!event.target.closest('.icon')) {
			iconState.update((icons) => {
				return icons.map((icon) => {
					icon.active = false;
					return icon;
				});
			});
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		// Set up draggable functionality for desktop icons
		interact('.icon-draggable').draggable({
			cursorChecker() {
				// don't set a cursor for drag actions
				return null;
			},
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent'
				})
			],
			listeners: {
				move(event) {
					const target = event.target;
					const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
					const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

					target.style.transform = `translate(${x}px, ${y}px)`;

					target.setAttribute('data-x', x);
					target.setAttribute('data-y', y);
				}
			}
		});
	});
</script>

<div id="desktop">
	{#each $appState.apps as app (app.id)}
		{#if !app.minimized}
			<Window
				window={app}
				onClose={() => closeWindow(app.id)}
				onMinimize={() => minimizeWindow(app.id)}
				onFocus={() => handleFocus(app.id)}
				defaultSize={app.defaultSize}
				defaultOffset={app.defaultOffset}
				zIndex={app.zIndex}
			/>
		{/if}
	{/each}
	<div class="icons">
		{#each $iconState as icon (icon.id)}
			<div
				class="icon icon-draggable"
				class:active={icon.active}
				on:dblclick={() => handleIconClick(icon)}
				role="button"
				tabindex="0"
				on:keydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						handleIconClick(icon);
					}
				}}
			>
				<img src={icon.icon} alt={icon.title} />
				<p>{@html formatTitle(icon.title)}</p>
			</div>
		{/each}
	</div>

	<div class="start-bar-container">
		<StartBar />
	</div>
</div>

<style>
	#desktop {
		width: 100%;
		height: calc(100% - 36px);
		overflow-y: hidden;
		background-color: none;
	}

	.icons {
		width: 100%;
		height: calc(100% - 36px);
	}

	.icon-draggable {
		cursor: none;
		touch-action: none;
		user-select: none;
	}

	.icon {
		display: flex;
		flex-direction: column;
		width: 100px;
		align-items: center;
		justify-content: center;
		margin: 1% 0 3% 1%;
		padding: 5px;
		border: 2px solid transparent;
		border-radius: 4px;
		box-sizing: border-box;
		cursor: pointer;
	}

	.icon img {
		width: 54px;
		height: auto;
	}

	.icon p {
		position: absolute;
		line-height: 1.5;
		text-align: center;
		text-shadow: 1px 1px 2px black;
		margin-top: 96px;
		font-size: 12px;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: pre-line;
		max-width: 100%;
	}

	.icon.active p {
		background-color: #0078d7;
		padding: 1px 4px 1px 4px;
		color: #ffffff;
	}

	.icon.active img {
		opacity: 0.75;
	}

	.icon:focus {
		outline: none;
	}

	.start-bar-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1000;
	}
</style>
