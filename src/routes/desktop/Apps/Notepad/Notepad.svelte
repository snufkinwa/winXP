<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';
	import menuItems from './menuItems';

	let textarea;
	let docText = `Hello World!🌎✨\n
.*♡ꕤ⸜⸝⸝⸝⸝ꕤ♡*.ﾟ
\n
Credits:\n
- JSPaint: https://github.com/1j01/jspaint\n
- Windows Media Player Skins: Crafted by the talented Alfonso Roman\n
 and Jeff Schafer from The Skins Factory\n
☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆
\n
Reorganize the draggable icons on the desktop, then double-click to open the apps and explore.\n
This project is my way of taking a delightful trip down memory lane, back to the early 2000s—a time of AOL Instant Messenger, MySpace, and the early days of online creativity. It was an exciting era of innovation and discovery.\n
\n
You'll find the classic sections—About, Projects, and Contact—inside the Maxthon Browser on the desktop. Think of it as blending nostalgic charm with modern tech, all wrapped up in the iconic XP style.\n
\n
So go ahead, double-click those icons, and dive into a nostalgic adventure! Enjoy!`;

	let wordWrap = true;

	export let onClose;

	function handleClickItem(item) {
		switch (item) {
			case 'Exit':
				onClose();
				break;
			case 'Word Wrap':
				wordWrap = !wordWrap;
				break;
			case 'Time/Date':
				const date = new Date();
				docText += `${date.toLocaleTimeString()} ${date.toLocaleDateString()}\n`;
				break;
			default:
		}
	}

	onMount(() => {
		// Set the initial focus on the textarea
		textarea.focus();
		// Set the cursor (caret) position to the top
		textarea.setSelectionRange(0, 0);
	});
</script>

<div>
	<header><HeaderWindow items={menuItems} onClickItem={handleClickItem} /></header>
	<textarea bind:value={docText} bind:this={textarea} wrap={wordWrap ? 'soft' : 'off'}></textarea>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	header {
		color: black;
		padding-left: 5px;
		margin: 0;
		border-bottom: 1px solid #0831d9;
		border-top: 1px solid #0831d9;
	}

	textarea {
		background-color: white;
		width: calc(100% - 1px);
		height: calc(100% - 25px);
		resize: none;
		overflow: scroll;
		color: black;
		outline: none;
		border: none;
		padding: 0;
		margin: 0;
	}
</style>
