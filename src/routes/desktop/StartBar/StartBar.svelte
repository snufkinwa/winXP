<script>
	import { onMount, onDestroy } from 'svelte';
	import { time } from '../stores/stores';
	import { appState, restoreApp, focusApp, removeApp } from '../stores/appState';
	import StartBarMenu from './StarBarMenu.svelte';
	import WindowIcon from '$lib/assets/windowsIcons/Windowslogo.png';
	import start from '$lib/assets/windowsIcons/starttext.png';
	import soundIcon from '$lib/assets/windowsIcons/690(16x16).png';

	let startMenuOpen = false;
	let startMenu;

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit'
	});

	function toggleStartMenu() {
		startMenuOpen = !startMenuOpen;
		if (startMenuOpen) {
			document.addEventListener('click', handleClickOutside, true);
		} else {
			document.removeEventListener('click', handleClickOutside, true);
		}
	}

	function handleClickOutside(event) {
		if (startMenu && !startMenu.contains(event.target)) {
			startMenuOpen = false;
			document.removeEventListener('click', handleClickOutside, true);
		}
	}

	function handleAppClick(id) {
		restoreApp(id);
		focusApp(id);
	}

	onMount(() => {
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
</script>

<div class="taskbar">
	<div class="taskbar__start-section">
		<button class="taskbar__start" on:click={toggleStartMenu}>
			<div>
				<img class="taskbar__windowicon" src={WindowIcon} alt=" " />
			</div>
			<div><img class="taskbar__start--logo" src={start} alt="start" /></div>
		</button>
		{#if startMenuOpen}
			<div id="start-menu" bind:this={startMenu}>
				<StartBarMenu />
			</div>
		{/if}
		<div class="taskbar__apps">
			{#each $appState.apps as app (app.id)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="taskbar__app {app.id === $appState.focusedAppId ? 'active' : ''}"
					on:click={() => handleAppClick(app.id)}
				>
					<img src={app.header.icon} alt={app.header.title} />
					<span>{app.header.title}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="taskbar__time-section">
		<div class="taskbar__icons"><img src={soundIcon} alt="sound" /></div>
		<div id="time-options">
			<span>{formatter.format($time)}</span>
		</div>
	</div>
</div>

<style>
	.taskbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(
			to bottom,
			#1868ce 0%,
			#0e60cb 12%,
			#0e60cb 20%,
			#1164cf 32%,
			#1667cf 33%,
			#1b6cd3 47%,
			#1e70d9 54%,
			#2476dc 60%,
			#297ae0 65%,
			#3482e3 77%,
			#3786e5 79%,
			#428ee9 90%,
			#4791eb 100%
		);
		width: 100vw;
		height: 36px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0px;
	}

	.taskbar:before {
		content: '';
		display: block;
		position: absolute;
		top: 1px;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(
			to right,
			transparent 0,
			rgb(255, 255, 255, 0.3) 1%,
			rgb(255, 255, 255, 0.5) 2%,
			rgb(255, 255, 255, 0.5) 95%,
			rgb(255, 255, 255, 0.3) 98%,
			rgb(255, 255, 255, 0.2) 99%,
			transparent 100%
		);
		box-shadow: inset 0 -1px 1px #0e60cb;
		z-index: 0;
	}

	.taskbar__start-section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		z-index: 1;
	}

	.taskbar__start {
		width: 105px;
		height: 100%;
		color: white;
		font-weight: bold;
		font-size: 1.1rem;
		font-style: italic;
		border: none;
		border-radius: 0px 15px 17px 0px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
		background: linear-gradient(to bottom, #67ae55, #578843);
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
	}

	.taskbar__start::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 0px 25px 17px 0px;
		height: 55%;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0.2) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		opacity: 0.8;
		pointer-events: none;
	}

	.taskbar__start::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 92%;
		height: 3px;
		border-radius: 0px 0px 17px 0px;
		background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%);
	}

	.taskbar__windowicon {
		margin-left: 12px;
		width: 20px;
		height: 20px;
		display: flex;
	}

	.taskbar__start--logo {
		margin-top: 5px;
		width: 50px;
	}

	#start-menu {
		position: absolute;
		bottom: 36px;
		left: 0;
		width: 400px;
		background-color: transparent;
		border: none;
		padding: 0px;
		z-index: 1000;
	}

	.taskbar__time-section {
		display: flex;
		height: 106%;
		justify-content: space-between;
		align-items: center;
		background-color: #0b77e9;
		flex-shrink: 0;
		background: linear-gradient(
			to bottom,
			#0c59b9 1%,
			#139ee9 6%,
			#18b5f2 10%,
			#139beb 14%,
			#1290e8 19%,
			#0d8dea 63%,
			#0d9ff1 81%,
			#0f9eed 88%,
			#119be9 91%,
			#1392e2 94%,
			#137ed7 97%,
			#095bc9 100%
		);
		border-left: 1px solid #1042af;
		box-shadow: inset 1px 0 1px #18bbff;
		padding: 0 0px;
		margin-left: 0px;
		z-index: 1;
		position: absolute;
		right: 0;
	}

	#time-options {
		margin-left: 10px;
		color: #fff;
		font-size: 14px;
		font-weight: normal;
		text-shadow: none;
	}

	#time-options span {
		margin-right: 20px;
	}

	.taskbar__icons {
		display: flex;
		align-items: center;
		margin-left: 15px;
		justify-content: space-between;
	}

	.taskbar__icons img {
		width: 20px;
		height: 20px;
	}

	.taskbar__apps {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		left: 100px;
		margin-left: 10px;
		overflow: hidden;
		width: calc(90% - 20px);
	}

	.taskbar__app {
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 5px 56px 5px 0px;
		min-width: 20px;
		border: 1px solid #0174e0;
		background: linear-gradient(to bottom, #4f81fe, #3576f3, #4f81fe);
		color: white;
		font-size: 14px;
		cursor: pointer;
		outline: none;
		flex-shrink: 1;
		flex-basis: 175px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		box-shadow:
			inset 1px 1px 0px #a4bdec,
			inset -1px -1px 0px #2758cc,
			inset -2px -2px 0px #0064c1;
	}

	.taskbar__app.active {
		background: #2d5daf;
		box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3);
		border-left: 2px solid #0b2042;
		border-top: 2px solid #0b2042;
		border-right: #003c74 1px solid;
		border-bottom: #003c74 1px solid;
	}

	.taskbar__app img {
		width: 16px;
		height: 16px;
		margin-right: 5px;
		margin-left: 5px;
	}

	.taskbar__app:hover {
		background-color: #53a3ff;
	}
</style>
