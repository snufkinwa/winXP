<script>
	export let text = '';
	export let icon = '';
	export let bold = false;
	export const style = '';
	export let onClick = () => {};

	let isHovered = false;

	function handleClick() {
		if (onClick) onClick(text);
	}
</script>

<div
	class="menu__item"
	class:active={isHovered}
	class:bold
	role="button"
	tabindex="0"
	on:click={onClick}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	on:keydown={(event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onClick();
		}
	}}
>
	<img class="menu__item__img" src={icon} alt={text} />
	<div class="menu__item__text-container">
		<span class="menu__item__text">{text}</span>
		<slot></slot>
	</div>
</div>

<style>
	.menu__item.bold .menu__item__text {
		font-weight: bold;
	}
	.menu__item {
		padding: 1px;
		display: flex;
		align-items: center;
		margin-bottom: 4px;
		flex-direction: row;
	}

	.menu__item.active {
		background-color: #316ac5;
		color: #fff;
	}

	.menu__item__img {
		width: 30px;
		height: 30px;
	}

	.menu__item__text-container {
		margin-left: 5px;
	}

	.menu__item__text {
		display: inline-block;
		text-indent: 0px;
		padding-left: 0px;
		white-space: pre-wrap;
		word-wrap: break-word;
		margin-top: -2px;
	}
</style>
