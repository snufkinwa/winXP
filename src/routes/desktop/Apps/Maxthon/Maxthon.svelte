<script>
	import HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';
	import menuItems from './menuItems';

	import forward from '$lib/assets/windowsIcons/Forward.png';
	import back from '$lib/assets/windowsIcons/Back.png';
	import folder from '$lib/assets/windowsIcons/OE Folder List.png';
	import search from '$lib/assets/windowsIcons/Search.png';
	import xangaIcon from '$lib/assets/MaxthonImages/xanga.png';
	import globe from '$lib/assets/windowsIcons/Internet Shortcut.png';
	import refresh from '$lib/assets/windowsIcons/IE Refresh.png';
	import stop from '$lib/assets/windowsIcons/IE Stop.png';
	import blank from '$lib/assets/windowsIcons/Generic Document.png';
	import link from '$lib/assets/windowsIcons/links.png';
	import myspacelogo from '$lib/assets/myspace-logo.png';
	import empty from '$lib/assets/empty.png';

	import About from './Portfolio/About.svelte';
	import Projects from './Portfolio/Projects.svelte';
	import Contact from './Portfolio/Contact.svelte';
	import { onMount } from 'svelte';

	function handleClickItem(item) {
		console.log('click!');
	}

	let items = [
		{
			id: '1',
			icon: myspacelogo,
			address: 'https://myspace.com/jlpngcodes',
			label: 'About',
			value: 1,
			component: About
		},
		{
			id: '2',
			icon: xangaIcon,
			address: 'https://jlpngcodes.livejournal.com/',
			label: 'Projects',
			value: 2,
			component: Projects
		},
		{
			id: '3',
			icon: empty,
			address: 'http://www.geocities.com/jlpngcodes/9984',
			label: 'Projects',
			label: 'Contact',
			value: 3,
			component: Contact
		}
	];

	let activeTabValue = 1;
	let selectID = '1';

	const handleClick = (tabValue) => () => {
		activeTabValue = tabValue;
		const selectedItem = items.find((item) => item.value === tabValue);
		if (selectedItem) {
			selectID = selectedItem.id;
		}
	};

	const handleSelectChange = (event) => {
		const selectedId = event.target.value;
		const selectedItem = items.find((item) => item.id === selectedId);
		if (selectedItem) {
			activeTabValue = selectedItem.value;
		}
	};
	onMount(() => {
		const tabButtons = document.querySelectorAll('.tabs li');

		const backButton = document.querySelector('.back');

		const forwardButton = document.querySelector('.forward');

		console.log('Tab buttons:', tabButtons);
		console.log('Back button:', backButton);
		console.log('Forward button:', forwardButton);

		if (tabButtons.length === 0 || !backButton || !forwardButton) {
			console.error('One or more elements are not correctly selected.');
			return;
		}

		tabButtons.forEach((button, index) => {
			button.addEventListener('click', () => {
				console.log('Tab button clicked:', index);

				tabButtons.forEach((btn) => btn.classList.remove('active'));

				button.classList.add('active');

				if (index === 0) {
					backButton.style.filter = 'grayscale(100%)';
				} else {
					backButton.style.filter = 'none';
				}

				if (index === tabButtons.length - 1) {
					forwardButton.style.filter = 'grayscale(100%)';
				} else {
					forwardButton.style.filter = 'none';
				}
			});
		});
	});
</script>

<div class="main-container">
	<section class="max-toolbar">
		<HeaderWindow items={menuItems} onClickItem={handleClickItem} />
	</section>
	<section class="max-function__bar">
		<div class="func-right">
			<button class="func-icon"><img src={blank} alt="blank" /> </button>
			<div class="down--arrow"></div>
		</div>
		<div class="max--seperator"></div>
		<div class="func-right">
			<button class="func-icon"><img class="back" src={back} alt="blank" /> </button>
			<div class="down--arrow"></div>
		</div>
		<div class="func-right">
			<button class="func-icon"><img class="forward" src={forward} alt="blank" /> </button>
			<div class="down--arrow"></div>
		</div>
		<div class="func-right">
			<button class="func-icon"><img src={refresh} alt="blank" /> </button>
			<div class="down--arrow"></div>
		</div>
		<div class="func-right">
			<button class="func-icon"><img src={stop} alt="blank" /> </button>
			<div class="down--arrow"></div>
		</div>
		<div class="func-right">
			<button class="func-icon"><img src={folder} alt="blank" /> </button>
			<div class="max--seperator"></div>
		</div>
		<div class="func-left">
			<select class="address--bar" bind:value={selectID} on:change={handleSelectChange}>
				{#each items as item}
					<option value={item.id} on:click={handleClick(item.value)}>{item.address}</option>
				{/each}</select
			>
			<div class="max--seperator"></div>
			<div class="search--bar">
				<img class="search--icon" src={search} alt="blank" />
				<div class="down--arrow--search"></div>
			</div>
		</div>
		<img src={link} alt=">>" title="Links" class="link" />
	</section>
	<section class="tabs-section">
		<ul class="tabs">
			{#each items as item}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class={activeTabValue === item.value ? 'active' : ''}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<span on:click={handleClick(item.value)}>
						<img src={item.icon} alt=" " class="icontab" />{item.label}</span
					>
				</li>
			{/each}
		</ul>
	</section>
	<section class="max-content">
		{#each items as item}
			{#if activeTabValue == item.value}
				<div class="box">
					<svelte:component this={item.component} />
				</div>
			{/if}
		{/each}
	</section>
	<footer>
		<div class="right">
			<img src={globe} alt="blank" />
		</div>
		<div class="bottom-seperator"></div>
		<div></div>
	</footer>
</div>

<style>
	.main-container {
		color: black;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.tabs-section {
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: start;
		font-size: 13px;
		border-bottom: 1px solid #baafa3;
	}
	.max-content {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #fff;
		height: calc(100% - 300px);
		width: 100%;
		flex-grow: 1;
		overflow-y: auto;
	}
	.max-toolbar {
		padding-left: 5px;
		margin: 0;
		padding-right: 10px;
		border-bottom: 1px solid #f1eeec;
		box-shadow: 0 1px 0 0 #baafa3;
	}
	.max-function__bar {
		padding-top: 5px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f1eeec;
		box-shadow: 0 1px 0 0 #baafa3;
		z-index: 1;
	}

	.forward,
	.back {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}

	.func-icon {
		background: none;
		border: none;
		padding-right: 25px;
	}
	.func-icon img {
		width: 36px;
		height: 36px;
	}
	.func-right {
		display: flex;
		align-items: center;
	}
	.func-left {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.down--arrow {
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid #555;
		position: absolute;
		margin-left: 43px;
	}
	.max--seperator {
		height: 100%;
		width: 1px;
		background-color: #a6a6a6;
		position: relative;
		margin-left: 5px;
		margin-right: 5px;
	}
	.address--bar {
		color: black;
		width: 80%;
		height: 50%;
		-webkit-appearance: none;
		-moz-appearance: none;
		border-radius: 2px;
		outline: 1px solid;
		outline-color: #4682b4;
		border: 1px solid #fff;
		appearance: none;
		background-color: white;
		background-image: url($lib/assets/windowsIcons/dropdown.png);
		background-repeat: no-repeat;
		background-position: right;
	}
	.search--bar {
		width: 20%;
		height: 50%;
		-webkit-appearance: none;
		-moz-appearance: none;
		border-radius: 2px;
		outline: 1px solid;
		outline-color: #4682b4;
		border: 1px solid #fff;
		appearance: none;
		background-color: white;
		background-image: url($lib/assets/windowsIcons/dropdown.png);
		background-repeat: no-repeat;
		background-position: right;
	}
	.search--icon {
		width: 17px;
		height: 17px;
		margin-right: 2px;
		margin-left: 2px;
	}
	.down--arrow--search {
		width: 0;
		height: 0;
		border-left: 3px solid transparent;
		border-right: 3px solid transparent;
		border-top: 3px solid #555;
		position: absolute;
		margin-left: 19px;
		margin-top: -18px;
	}
	.link {
		width: 8px;
		height: 6px;
	}
	.box {
		height: 100%;
	}

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 25px;
		border-top: 2px solid #baafa3;
		box-shadow: 0 1px 0 0 #baafa3;
	}

	footer .right {
		width: 95%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	footer .right img {
		width: 18px;
		height: 18px;
		margin-left: 5px;
	}

	.bottom-seperator {
		width: 2px;
		background-color: #a6a6a6;
		height: 80%;
	}

	ul.tabs {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding-left: 0;
		margin-bottom: 1;
		list-style: none;
		border-bottom: 1px solid #dee2e6;
	}
	li {
		display: flex;
		align-items: center;
		margin-bottom: -1px;
		flex-direction: row;
	}
	.icontab {
		width: auto;
		height: 12px;
		padding-right: 12px;
	}
	span {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.2rem 1.4rem;
		cursor: pointer;
	}

	span:hover {
		border-color: #baafa3;
	}

	li.active > span {
		color: #495057;
		background-color: #fff;
		border-top: 4px solid #fcc603;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		border-right: 1px solid #baafa3;
		border-left: 1px solid #baafa3;
	}
</style>
