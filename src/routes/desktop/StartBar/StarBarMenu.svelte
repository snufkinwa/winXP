<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import Item from './Item.svelte';
	import Items from './Items.svelte';
	import Modal from './Modal.svelte';

	import { AllPrograms, MyRecentDocuments, ConnectTo } from './StartBarMenuData';

	import lock from '$lib/assets/windowsIcons/Logout.png';
	import user from '$lib/assets/icon.png';
	import shut from '$lib/assets/windowsIcons/Power.png';
	import arrow from '$lib/assets/windowsIcons/all-programs.ico';
	import ie from '$lib/assets/windowsIcons/ie.png';
	import outlook from '$lib/assets/windowsIcons/Outlook Express.png';
	import notepad from '$lib/assets/windowsIcons/Notepad.png';
	import paint from '$lib/assets/windowsIcons/Paint.png';
	import mediaPlayer from '$lib/assets/windowsIcons/Windows Media Player 9.png';
	import messenger from '$lib/assets/windowsIcons/Windows Messenger.png';
	import spiderSolitaire from '$lib/assets/windowsIcons/Spider Solitaire.png';
	import myDoc from '$lib/assets/windowsIcons/My Documents.png';
	import recDoc from '$lib/assets/windowsIcons/Recent Documents.png';
	import picDoc from '$lib/assets/windowsIcons/My Pictures.png';
	import controlPanel from '$lib/assets/windowsIcons/Control Panel.png';
	import setAccess from '$lib/assets/windowsIcons/Default Programs.png';
	import musicDoc from '$lib/assets/windowsIcons/My Music.png';
	import myComp from '$lib/assets/windowsIcons/My Computer.png';
	import connect from '$lib/assets/windowsIcons/Network Connections.png';
	import help from '$lib/assets/windowsIcons/Help and Support.png';
	import search from '$lib/assets/windowsIcons/Search.png';
	import run from '$lib/assets/windowsIcons/Run.png';

	import switchUser from '$lib/assets/windowsIcons/Switch User.png';
	import standbyButton from '$lib/assets/windowsIcons/Standby.png';
	import restartButton from '$lib/assets/windowsIcons/Restart.png';

	const dispatch = createEventDispatcher();
	let showModal = false;
	let modalType = '';

	function handleClick(event) {
		console.log('event');
	}

	function logoff() {
		modalType = 'logOff';
		showModal = true;
	}

	function turnoff() {
		modalType = 'turnOff';
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	let items = [
		{ icon: notepad, text: 'Notepad' },
		{ icon: spiderSolitaire, text: 'Spider Solitaire' },
		{ icon: paint, text: 'Paint' },
		{ icon: mediaPlayer, text: 'Windows Media Player' },
		{ icon: messenger, text: 'Windows Messenger' }
	];
</script>

<div class="start-bar-menu">
	<header>
		<img class="header__img" src={user} alt="avatar" />
		<span class="header__text">Guest</span>
	</header>
	<hr class="orange-hr" />
	<div class="menu">
		<div class="menu__left">
			<ul>
				<!-- Internet Explorer -->
				<li class="bold">
					<Item text="Internet" icon={ie}>
						<div class="menu__item__subtext">Internet Explorer</div>
					</Item>
				</li>
				<!-- E-mail -->
				<li class="bold">
					<Item text="E-mail" icon={outlook}>
						<div class="menu__item__subtext">Outlook Express</div>
					</Item>
				</li>
				<div class="menu__separator" />

				<Items {items} on:click={handleClick} />
			</ul>

			<ul class="menu-bottom">
				<div class="menu__separator" />
				<!-- All Programs -->
				<li class="all-programs">
					<a href="#/">
						<span class="bold">All Programs</span>
						<img src={arrow} alt=">" class="all-programs-icon" />
					</a>
					<ul class="submenu">
						{#each AllPrograms as item}
							{#if item.type === 'separator'}
								<div class="menu__separator" />
							{:else if item.type === 'menu'}
								<li>
									<a href="#/">
										<img src={item.icon} alt={item.text} />
										{item.text}
									</a>
									<ul class="submenu">
										{#each item.items as subItem}
											{#if subItem.type === 'item'}
												<li>
													<a href="#/">
														<img src={subItem.icon} alt={subItem.text} />
														{subItem.text}
													</a>
												</li>
											{:else if subItem.type === 'menu'}
												<li>
													<a href="#/">
														<img src={subItem.icon} alt={subItem.text} />
														{subItem.text}
													</a>
													<ul class="submenu" style="bottom: {subItem.bottom || 'initial'};">
														{#each subItem.items as subSubItem}
															<li>
																<a href="#/">
																	<img src={subSubItem.icon} alt={subSubItem.text} />
																	{subSubItem.text}
																</a>
															</li>
														{/each}
													</ul>
												</li>
											{/if}
										{/each}
									</ul>
								</li>
							{:else if item.type === 'item'}
								<li>
									<a href="#/">
										<img src={item.icon} alt={item.text} />
										{item.text}
									</a>
								</li>
							{/if}
						{/each}
					</ul>
				</li>
			</ul>
		</div>

		<div class="menu__right">
			<ul>
				<!-- My Documents -->
				<li class="bold">
					<Item text="My Documents" icon={myDoc} />
				</li>

				<!-- My Recent Documents -->
				<li class="bold">
					<Item text="My Recent Documents" icon={recDoc} />
					<div class="menu__arrow" />
					<ul class="submenu">
						{#each MyRecentDocuments as item}
							<li>
								<a href="#/">
									<img src={item.icon} alt={item.text} />
									{item.text}
								</a>
							</li>
						{/each}
					</ul>
				</li>

				<Items
					on:click={handleClick}
					items={[
						{ icon: picDoc, text: 'My Pictures' },
						{ icon: musicDoc, text: 'My Music' },
						{ icon: myComp, text: 'My Computer' }
					]}
					bold={true}
				/>

				<div class="menu__separator" />

				<Items
					on:click={handleClick}
					items={[
						{ icon: controlPanel, text: 'Control Panel' },
						{ icon: setAccess, text: 'Set Program Access and Defaults' }
					]}
				/>

				<li>
					<Item class="menu__item" text="Connect To" icon={connect}>
						<div class="menu__arrow" />
					</Item>
					<ul class="submenu">
						{#each ConnectTo as item}
							<li>
								<a
									href="#/"
									on:click|preventDefault={() => handleClick({ detail: { text: item.text } })}
								>
									<img src={item.icon} alt={item.text} />
									{item.text}
								</a>
							</li>
						{/each}
					</ul>
				</li>

				<div class="menu__separator"></div>

				<Items
					onClick={handleClick}
					items={[
						{ icon: help, text: 'Help and Support' },
						{ icon: search, text: 'Search' },
						{ icon: run, text: 'Run...' }
					]}
				/>
			</ul>
		</div>
	</div>
	<footer>
		<button type="button" class="footer__item" on:click={logoff}>
			<img class="footer__item__img" src={lock} alt="" />
			<span>Log Off</span>
		</button>
		<button type="button" class="footer__item" on:click={turnoff}>
			<img class="footer__item__img" src={shut} alt="" />
			<span>Turn Off Computer</span>
		</button>

		{#if showModal && modalType === 'logOff'}
			<Modal title="Log Off" onClose={closeModal} class="modal">
				<div class="modal-content-logoff">
					<button
						><img src={switchUser} alt="Swith User Button" />
						<p>Switch User</p></button
					>
					<button
						><img src={lock} alt="Standby Button" />
						<p>Log Off</p></button
					>
				</div>
			</Modal>
		{/if}

		{#if showModal && modalType === 'turnOff'}
			{#if showModal && modalType === 'turnOff'}
				<div class="modal-overlay" class:active={showModal}></div>
				<Modal title="Turn Off Computer" onClose={closeModal}>
					<div class="modal-content">
						<button
							><img src={standbyButton} alt="Stand By Button" />
							<p>Stand By</p></button
						>
						<button
							><img src={shut} alt="Turn Off Button" />
							<p>Turn Off</p></button
						>
						<button
							><img src={restartButton} alt="Restart Button" />
							<p>Restart</p></button
						>
					</div>
				</Modal>
			{/if}
		{/if}
	</footer>
</div>

<style>
	.all-programs {
		align-items: center;
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
		padding: 5px 6px;
	}

	.bold {
		font-weight: bold;
	}

	.all-programs-icon {
		margin-left: 5px;
		height: 18px;
	}
	.start-bar-menu {
		font-size: 11px;
		line-height: 14px;
		display: flex;
		flex-direction: column;
		border-inline: 2px solid #1854c2;
		writing-mode: horizontal-tb;
		align-items: center;
		background-color: #4282d6;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	header {
		align-self: flex-start;
		display: flex;
		align-items: center;
		font-size: 16px;
		color: #fff;
		height: 54px;
		padding: 6px 5px 5px;
		width: 97%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
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
		overflow: hidden;
	}
	header:before {
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
			transparent 100%
		);
	}
	header:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #032c8a;
	}
	.header__img {
		width: 42px;
		height: 42px;
		border: 1px solid #fff;
		border-radius: 3px;
	}
	.header__text {
		display: block;
		margin-left: 10px;
		font-weight: bold;
		color: #fff;
	}
	.menu {
		display: flex;
		color: #00136b;
		padding: 0px 0;
		width: 100%;
		height: 450px;
	}
	.orange-hr {
		position: absolute;
		left: 0;
		right: 0;
		top: 59px;
		display: block;
		height: 2px;
		background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #da884a 50%, rgba(0, 0, 0, 0) 100%);
		border: 0;
	}
	.menu__left,
	.menu__right {
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.menu__left {
		background-color: #fff;
		justify-content: space-between;
	}

	.menu__right {
		background-color: #d3e5fa;
		border-left: 2px solid #95bdee;
	}

	.menu__separator {
		height: 7.5px;
		background: linear-gradient(to right, #d3d3c8 0%, rgba(0, 0, 0, 0.6) 50%, #d3d3c8 100%);
		border-top: 3px solid transparent;
		border-bottom: 3px solid transparent;
		background-clip: content-box;
	}
	.menu__right .menu__separator {
		background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0) 0%,
			#87b3e2b5 50%,
			rgba(0, 0, 0, 0) 100%
		);
		background-clip: content-box;
	}
	.menu ul {
		list-style: none;
		margin: 0;
		padding: 6px 6px 0px;
	}

	.menu li {
		position: relative;
	}

	.menu a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #000;
	}

	.menu a img {
		width: 16px;
		height: 16px;
		margin-right: 8px;
	}

	.menu li:hover {
		background-color: #316ac5;
		color: #fff;
	}

	.menu li:hover > a {
		color: #fff;
	}

	.menu .submenu {
		display: none;
		position: absolute;
		left: 100%;
		bottom: 0px;
		min-width: 250px;
		background-color: #fff;
		padding: 4px;
		font-weight: normal;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}

	.menu .submenu li {
		padding: 5px 6px;
	}

	.menu li:hover > .submenu {
		display: block;
		z-index: 1000;
	}

	.menu__separator {
		width: 100%;
		height: 1px;
		background-color: #00136b;
		opacity: 0.2;
		margin: 3px 0;
	}
	.menu__arrow {
		display: block;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 4px;
		border: 4px solid transparent;
		border-left: 4px solid #00136b;
	}

	.menu__item__subtext {
		color: rgba(0, 0, 0, 0.4);
		line-height: 12px;
		margin-bottom: 1px;
		font-weight: normal;
		padding-left: 0px;
	}
	footer {
		display: flex;
		align-self: flex-end;
		align-items: center;
		justify-content: flex-end;
		padding: 6px 5px 5px;
		color: #fff;

		height: 36px;
		width: 100%;
		background: linear-gradient(
			to bottom,
			#4282d6 0%,
			#3b85e0 3%,
			#418ae3 5%,
			#418ae3 17%,
			#3c87e2 21%,
			#3786e4 26%,
			#3482e3 29%,
			#2e7ee1 39%,
			#2374df 49%,
			#2072db 57%,
			#196edb 62%,
			#176bd8 72%,
			#1468d5 75%,
			#1165d2 83%,
			#0f61cb 88%
		);
	}
	footer button {
		all: unset;
	}

	footer button:focus {
		outline: revert;
	}
	.footer__item {
		padding: 3px;
		display: flex;
		margin-right: 10px;
		align-items: center;
		&:hover {
			background-color: rgba(60, 80, 210, 0.5);
		}
		&:hover:active > * {
			transform: translate(1px, 1px);
		}
	}
	.footer__item__img {
		border-radius: 3px;
		margin-right: 2px;
		width: 22px;
		height: 22px;
	}

	@keyframes invertToGray {
		0% {
			filter: brightness(1) grayscale(0);
		}
		30% {
			filter: brightness(1) grayscale(0);
		}
		100% {
			filter: brightness(0.6) grayscale(100%);
		}
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		z-index: 800;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.modal-overlay.active {
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 1;
		animation: invertToGray 0.7s ease-in-out forwards;
	}

	.modal-content {
		margin-right: 25px;
		margin-left: 25px;
		max-width: 400px;
	}

	.modal-content button {
		padding: 15px;
		text-align: center;
	}

	.modal-content img {
		width: 48px;
	}

	.modal-content-logoff {
		margin-right: 50px;
		margin-left: 50px;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	.modal-content-logoff button {
		padding: 10px;
	}

	.modal-content-logoff img {
		width: 48px;
	}
</style>
