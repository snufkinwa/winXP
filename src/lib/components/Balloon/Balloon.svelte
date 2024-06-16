<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let startAfter = 3000;
	export let duration = 15000;
	export let headerText = 'Did you forget your password?';
	export let firstText = 'Please type your password again.';
	export let secondText = 'Be sure to use correct uppercase and lowercase letters.';
	export let imageSrc = '';
	export let start = false;
	let show = false;
	let openTimer;
	let fadeTimer;
	let closeTimer;
	const dispatch = createEventDispatcher();

	function startBalloon() {
		show = true;
		openTimer = setTimeout(() => (start = true), startAfter);
		fadeTimer = setTimeout(() => (show = false), startAfter + duration);
		closeTimer = setTimeout(() => (start = false), startAfter + duration + 1000);
	}
	function closeBalloon() {
		show = false;
		start = false;
		clearTimeout(openTimer);
		clearTimeout(fadeTimer);
		clearTimeout(closeTimer);
		dispatch('close');
	}
	onMount(() => {
		if (start) {
			startBalloon();
		}
	});
	function restart() {
		show = false;
		clearTimeout(openTimer);
		clearTimeout(fadeTimer);
		clearTimeout(closeTimer);
		setTimeout(() => {
			start = true;
			startBalloon();
		}, 0);
	}
	$: if (start) {
		restart();
	}
	onDestroy(() => {
		clearTimeout(openTimer);
		clearTimeout(fadeTimer);
		clearTimeout(closeTimer);
	});
</script>

{#if start}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="balloon"
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 1000 }}
		class:show
		on:click={closeBalloon}
	>
		<div class="balloon__container">
			<div class="balloon__header">
				{#if imageSrc}
					<img class="balloon__header__img" src={imageSrc} alt="Icon" />
				{/if}
				<span class="balloon__header__text">{headerText}</span>
			</div>
			<p class="balloon__text__first">{firstText}</p>
			<p class="balloon__text__second">{secondText}</p>
		</div>
	</div>
{/if}

<style>
	.balloon {
		position: absolute;
		display: block;
		opacity: 0;
		color: black;
		filter: drop-shadow(2px -2px 1px rgba(0, 0, 0, 0.4));
		z-index: 10;
		cursor: pointer;
	}
	.balloon.show {
		opacity: 1;
	}
	.balloon__container {
		position: absolute;
		right: -4px;
		top: 19px;
		border: 1px solid black;
		border-radius: 7px;
		padding: 10px 28px 6px 10px;
		background-color: #ffffe1;
		font-size: 11px;
		white-space: nowrap;
	}
	.balloon__container:before {
		content: '';
		position: absolute;
		display: block;
		top: -19px;
		right: 14px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 0 19px 19px;
		border-color: transparent transparent black transparent;
	}
	.balloon__container:after {
		content: '';
		position: absolute;
		display: block;
		top: -17px;
		right: 15px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 0 18px 18px;
		border-color: transparent transparent #ffffe1 transparent;
	}
	.balloon__header {
		display: flex;
		align-items: center;
		font-weight: 700;
	}
	.balloon__header__img {
		width: 14px;
		height: 14px;
		margin-right: 8px;
	}
	.balloon__text__first {
		margin: 10px 0 5px;
	}
</style>
