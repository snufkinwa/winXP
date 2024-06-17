<script>
	import { onMount } from 'svelte';
	// import Draggable from './Draggable.svelte';
	import interact from 'interactjs';

	import {
		minimizeApp,
		updateAppState,
		focusApp,
		removeApp,
		toggleMaximizeApp
	} from '../stores/appState';
	import minimizeIcon from '$lib/assets/windowsIcons/Minimize.png';
	import maximizeIcon from '$lib/assets/windowsIcons/Maximize.png';
	import closeIcon from '$lib/assets/windowsIcons/Exit.png';

	export let window;
	export let onClose;
	export let defaultSize;
	export let defaultOffset;
	export let zIndex;
	export let onMinimize;
	export let onFocus;

	let localX = window.x;
	let localY = window.y;
	let localWidth = window.width;
	let localHeight = window.height;

	const position = { x: 0, y: 0 };

	const resizableContainer = interact('.resizable');
	const draggable = interact('.window-container');
	onMount(() => {
		draggable.draggable({
			allowFrom: '.header',
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent'
				})
			],
			listeners: {
				move(event) {
					position.x += event.dx;
					position.y += event.dy;

					Object.assign(event.target.style, {
						transform: `translate(${position.x}px, ${position.y}px)`
					});

					Object.assign(event.target.dataset, { x: position.x, y: position.y });
				},
				end(event) {
					// Update the window position in the appState
					updateAppState(window.id, localWidth, localHeight, position.x, position.y);
				}
			}
		});
		if (window.resizable) {
			resizableContainer.resizable({
				edges: { top: '.resizer-top', left: true, bottom: true, right: true },
				modifiers: [
					interact.modifiers.restrictSize({
						min: { width: window.minSize.width, height: window.minSize.height },
						max: { width: window.maxSize.width, height: window.maxSize.height }
					})
				],
				listeners: {
					move(event) {
						let { x, y } = event.target.dataset;

						x = (parseFloat(x) || 0) + event.deltaRect.left;
						y = (parseFloat(y) || 0) + event.deltaRect.top;

						Object.assign(event.target.style, {
							width: `${event.rect.width}px`,
							height: `${event.rect.height}px`,
							transform: `translate(${x}px, ${y}px)`
						});

						Object.assign(event.target.dataset, { x, y });
					},
					end(event) {
						localWidth = event.rect.width;
						localHeight = event.rect.height;
						let { x, y } = event.target.dataset;

						// Update the window size and position in the appState
						updateAppState(window.id, localWidth, localHeight, parseFloat(x), parseFloat(y));
					}
				}
			});
		}
	});

	function handleMinimize() {
		if (onMinimize) {
			minimizeApp(window.id);
		}
	}

	function handleMaximize() {
		toggleMaximizeApp(window.id);
	}

	function handleClose() {
		if (onClose) {
			removeApp(window.id);
		}
	}

	function handleFocus() {
		if (onFocus) {
			focusApp(window.id);
		}
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleFocus();
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="window-container resizable draggable"
	class:minimized={window.minimized}
	class:maximized={window.maximized}
	class:invisible={window.header.invisible}
	style="width: {window.maximized ? 0 : defaultSize.width + 'px'}; height: {window.maximized
		? 0
		: defaultSize.height + 'px'}; z-index: {zIndex}; top: {window.maximized
		? '0'
		: defaultOffset.y + 'px'}; left: {window.maximized ? '0' : defaultOffset.x + 'px'};"
	on:mousedown={handleFocus}
	tabindex="0"
	role="dialog"
	aria-label={window.header.title}
	on:keydown={handleKeyPress}
>
	<div class="header" id={window.id + 'header'}>
		<div class="left-side">
			<img src={window.header.icon} alt={window.header.title} class="window-icon" />
			<span class="title">{window.header.title}</span>
		</div>
		<div class="right-side">
			<button class="minimize" on:click={handleMinimize}>
				<img src={minimizeIcon} alt="&#9472;" />
			</button>
			<button class="maximize" on:click={handleMaximize}>
				<img src={maximizeIcon} alt="&#9723;" />
			</button>
			<button class="close" on:click={handleClose}>
				<img src={closeIcon} alt="&#10005;" />
			</button>
		</div>
	</div>
	<div class="window">
		<div class="content">
			<svelte:component this={window.component} />
		</div>
	</div>
	<div class="resizer-top" />
</div>

<style>
	.window-container {
		border-top: none !important;
		border: 3px solid #0000c0; /* Dark blue border */
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		overflow: hidden;
		position: absolute;
		cursor: pointer;
		touch-action: none;
		user-select: none;
		box-sizing: border-box;
	}

	.window {
		width: 100%;
		background: #e0e0e0;
		height: calc(100% - 28px);
		-webkit-font-smoothing: antialiased;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Trebuchet MS';
		font-size: 13px;
		color: #fff;
		height: 24px;
		border-left: 1px solid #0831d9;
		border-right: 1px solid #001ea0;
		border-top: 1px solid #0831d9;
		background: linear-gradient(
			180deg,
			rgba(9, 151, 255, 1) 0%,
			rgba(0, 83, 238, 1) 8%,
			rgba(0, 80, 238, 1) 40%,
			rgba(0, 102, 255, 1) 88%,
			rgba(0, 102, 255, 1) 93%,
			rgba(0, 91, 255, 1) 95%,
			rgba(0, 61, 215, 1) 96%,
			rgba(0, 61, 215, 1) 100%
		);
		padding: 3px 5px 3px 3px;
		border-top-left-radius: 8px;
		border-top-right-radius: 7px;
		text-shadow: 1px 1px #0f1089;
		cursor: default;
	}

	.left-side {
		display: flex;
		align-items: center;
	}

	.left-side img {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}

	.title {
		font-weight: bold;
	}

	.right-side {
		display: flex;
	}
	.minimize,
	.maximize,
	.close {
		width: 22px;
		height: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 2px;
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: 12px;
		margin-left: 5px;
		cursor: pointer;
	}

	.minimize:hover,
	.maximize:hover,
	.close:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.close:hover {
		background-color: #e81123;
	}

	.close {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.content {
		height: calc(100% - 3px);
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.window-container.invisible {
		border: none;
		display: flex;
	}

	.window-container.invisible .header {
		opacity: 0;
		position: absolute;
		height: 50px;
		width: 100px;
		background: transparent;
		border: none;
		border-bottom-left-radius: 50px;
		left: 63px;
		z-index: 0;
	}

	.window-container.invisible .header .minimize {
		padding-bottom: 50px;
		right: 50px;
		top: 18px;
		position: absolute;
	}

	.window-container.invisible .header .maximize {
		display: none;
	}

	.window-container.invisible .header .close {
		position: absolute;
		right: 0px;
		top: 39px;
	}
	.window-container.invisible .header .right-side {
		flex-direction: column;
		height: 100%;
	}
	.window-container.invisible .window-icon {
		display: none;
	}

	.window-container.invisible .title {
		display: none;
	}

	.window-container.invisible .window {
		background: transparent !important;
	}
	.window-container.minimized {
		display: none;
	}

	.window-container.maximized {
		width: 100% !important;
		height: calc(100% - 40px) !important;
		top: 0 !important;
		left: 0 !important;
		transform: none !important;
	}

	.resizable {
		touch-action: none;
		box-sizing: border-box;
	}

	.draggable {
		touch-action: none;
		user-select: none;
	}
	.resizer-top {
		cursor: n-resize;
		height: 5px;
		width: 20%;
		position: absolute;
		top: 0;
		left: 40%;
		right: 0%;
	}
</style>
