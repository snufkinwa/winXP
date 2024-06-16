import empty from '$lib/assets/empty.png';
import backup from '$lib/assets/windowsIcons/23(16x16).png';
import keyboard from '$lib/assets/windowsIcons/58(16x16).png';
import cmd from '$lib/assets/windowsIcons/56(16x16).png';
import calculator from '$lib/assets/windowsIcons/74(16x16).png';
import utility from '$lib/assets/windowsIcons/119(16x16).png';
import volume from '$lib/assets/windowsIcons/120(16x16).png';
import characterMap from '$lib/assets/windowsIcons/127(16x16).png';
import cleanDisk from '$lib/assets/windowsIcons/128(16x16).png';
import wordPad from '$lib/assets/windowsIcons/153(16x16).png';
import winExplorer from '$lib/assets/windowsIcons/156(16x16).png';
import MSN from '$lib/assets/windowsIcons/159(16x16).png';
import sync from '$lib/assets/windowsIcons/182(16x16).png';
import security from '$lib/assets/windowsIcons/214(16x16).png';
import access from '$lib/assets/windowsIcons/227(16x16).png';
import wireless from '$lib/assets/windowsIcons/234(16x16).png';
import accessibility from '$lib/assets/windowsIcons/238(16x16).png';
import connection from '$lib/assets/windowsIcons/309(16x16).png';
import update from '$lib/assets/windowsIcons/322(16x16).png';
import notepad from '$lib/assets/windowsIcons/327(16x16).png';
import networkAssistance from '$lib/assets/windowsIcons/357(16x16).png';
import menu from '$lib/assets/windowsIcons/358(16x16).png';
import transfer from '$lib/assets/windowsIcons/367(16x16).png';
import defragmenter from '$lib/assets/windowsIcons/374(16x16).png';
import catalog from '$lib/assets/windowsIcons/392(16x16).png';
import networkConnection from '$lib/assets/windowsIcons/404(16x16).png';
import info from '$lib/assets/windowsIcons/505(16x16).png';
import address from '$lib/assets/windowsIcons/554(16x16).png';
import connectionWizard from '$lib/assets/windowsIcons/663(16x16).png';
import networkSetup from '$lib/assets/windowsIcons/664(16x16).png';
import hyperCmd from '$lib/assets/windowsIcons/669(16x16).png';
import painter from '$lib/assets/windowsIcons/680(16x16).png';
import sound from '$lib/assets/windowsIcons/690(16x16).png';
import recent from '$lib/assets/windowsIcons/716(16x16).png';
import compatibility from '$lib/assets/windowsIcons/747(16x16).png';
import magnifier from '$lib/assets/windowsIcons/817(16x16).png';
import mediaPlayer from '$lib/assets/windowsIcons/846(16x16).png';
import tour from '$lib/assets/windowsIcons/853(32x32).png';
import outlook from '$lib/assets/windowsIcons/887(16x16).png';
import spade from '$lib/assets/windowsIcons/888(16x16).png';
import reversi from '$lib/assets/windowsIcons/889(16x16).png';
import onlineHeart from '$lib/assets/windowsIcons/890(16x16).png';
import checker from '$lib/assets/windowsIcons/891(16x16).png';
import backgammon from '$lib/assets/windowsIcons/892(16x16).png';
import movieMaker from '$lib/assets/windowsIcons/894(16x16).png';
import ie from '$lib/assets/windowsIcons/896(16x16).png';
import messenger from '$lib/assets/windowsIcons/msn.png';
import spider from '$lib/assets/windowsIcons/spider.png';
import freecell from '$lib/assets/windowsIcons/freecell.png';
import heart from '$lib/assets/windowsIcons/heart.png';
import rdp from '$lib/assets/windowsIcons/rdp.png';
import solitaire from '$lib/assets/windowsIcons/solitaire.png';
import narrator from '$lib/assets/windowsIcons/narrator.ico';
import pinball from '$lib/assets/windowsIcons/pinball.png';
import restore from '$lib/assets/windowsIcons/restore.ico';

export const MyRecentDocuments = [
	{
		type: 'item',
		icon: empty,
		text: '(Empty)'
	}
];
export const ConnectTo = [
	{
		type: 'item',
		icon: MSN,
		text: 'MSN'
	},
	{
		type: 'item',
		icon: connection,
		text: 'Show all connections'
	}
];
export const AllPrograms = [
	{
		type: 'item',
		icon: access,
		text: 'Set Program Access and Defaults'
	},
	{
		type: 'item',
		icon: catalog,
		text: 'Windows Catalog'
	},
	{
		type: 'item',
		icon: update,
		text: 'Windows Update'
	},
	{
		type: 'separator'
	},
	{
		type: 'menu',
		icon: menu,
		text: 'Accessories',
		items: [
			{
				type: 'menu',
				icon: menu,
				text: 'Accessibility',
				bottom: 'initial',
				items: [
					{
						type: 'item',
						icon: accessibility,
						text: 'Accessibility Wizard'
					},
					{
						type: 'item',
						icon: magnifier,
						text: 'Magnifier'
					},
					{
						type: 'item',
						icon: narrator,
						text: 'Narrator'
					},
					{
						type: 'item',
						icon: keyboard,
						text: 'On-Screen Keyboard'
					},
					{
						type: 'item',
						icon: utility,
						text: 'Utility Manager'
					}
				]
			},
			{
				type: 'menu',
				icon: menu,
				text: 'Communications',
				bottom: 'initial',
				items: [
					{
						type: 'item',
						icon: hyperCmd,
						text: 'HyperTerminal'
					},
					{
						type: 'item',
						icon: networkConnection,
						text: 'Network Connections'
					},
					{
						type: 'item',
						icon: networkSetup,
						text: 'Network Setup Wizard'
					},
					{
						type: 'item',
						icon: connectionWizard,
						text: 'New Connection Wizard'
					},
					{
						type: 'item',
						icon: wireless,
						text: 'Wireless Network Setup Wizard'
					}
				]
			},
			{
				type: 'menu',
				icon: menu,
				text: 'Entertainment',
				bottom: 'initial',
				items: [
					{
						type: 'item',
						icon: sound,
						text: 'Sound Recorder'
					},
					{
						type: 'item',
						icon: volume,
						text: 'Volume Control'
					},
					{
						type: 'item',
						icon: mediaPlayer,
						text: 'Windows Media Player'
					}
				]
			},
			{
				type: 'menu',
				icon: menu,
				text: 'System Tools',
				bottom: 'initial',
				items: [
					{
						type: 'item',
						icon: backup,
						text: 'Backup'
					},
					{
						type: 'item',
						icon: characterMap,
						text: 'Character Map'
					},
					{
						type: 'item',
						icon: cleanDisk,
						text: 'Disk Cleanup'
					},
					{
						type: 'item',
						icon: defragmenter,
						text: 'Disk Defragmenter'
					},
					{
						type: 'item',
						icon: transfer,
						text: 'Files and Settings Transfer Wizard'
					},
					{
						type: 'item',
						icon: recent,
						text: 'Scheduled Tasks'
					},
					{
						type: 'item',
						icon: security,
						text: 'Security Center'
					},
					{
						type: 'item',
						icon: info,
						text: 'System Information'
					},
					{
						type: 'item',
						icon: restore,
						text: 'System Restore'
					}
				]
			},
			{
				type: 'item',
				icon: address,
				text: 'Address Book'
			},
			{
				type: 'item',
				icon: cmd,
				text: 'Command Prompt'
			},
			{
				type: 'item',
				icon: notepad,
				text: 'Notepad'
			},
			{
				type: 'item',
				icon: painter,
				text: 'Paint'
			},
			{
				type: 'item',
				icon: calculator,
				text: 'Calculator'
			},
			{
				type: 'item',
				icon: compatibility,
				text: 'Program Compatibility Wizard'
			},
			{
				type: 'item',
				icon: rdp,
				text: 'Remote Desktop Connection'
			},
			{
				type: 'item',
				icon: sync,
				text: 'Synchronize'
			},
			{
				type: 'item',
				icon: tour,
				text: 'Tour Windows XP'
			},
			{
				type: 'item',
				icon: winExplorer,
				text: 'Windows Explorer'
			},
			{
				type: 'item',
				icon: wordPad,
				text: 'WordPad'
			}
		]
	},
	{
		type: 'menu',
		icon: menu,
		text: 'Games',
		items: [
			{
				type: 'item',
				icon: freecell,
				text: 'FreeCell'
			},
			{
				type: 'item',
				icon: heart,
				text: 'Hearts'
			},
			{
				type: 'item',
				icon: backgammon,
				text: 'Internet Backgammon'
			},
			{
				type: 'item',
				icon: checker,
				text: 'Internet Checkers'
			},
			{
				type: 'item',
				icon: onlineHeart,
				text: 'Internet Hearts'
			},
			{
				type: 'item',
				icon: reversi,
				text: 'Internet Reversi'
			},
			{
				type: 'item',
				icon: spade,
				text: 'Internet Spades'
			},
			{
				type: 'item',
				icon: pinball,
				text: 'Pinball'
			},
			{
				type: 'item',
				icon: solitaire,
				text: 'Solitaire'
			},
			{
				type: 'item',
				icon: spider,
				text: 'Spider Solitaire'
			}
		]
	},
	{
		type: 'menu',
		icon: menu,
		text: 'Startup',
		items: [
			{
				type: 'item',
				icon: empty,
				text: '(Empty)'
			}
		]
	},
	{
		type: 'item',
		icon: ie,
		text: 'Internet Explorer'
	},
	{
		type: 'item',
		icon: outlook,
		text: 'Outlook Express'
	},
	{
		type: 'item',
		icon: networkAssistance,
		text: 'Remote Assistance'
	},
	{
		type: 'item',
		icon: mediaPlayer,
		text: 'Windows Media Player'
	},
	{
		type: 'item',
		icon: messenger,
		text: 'Windows Messenger'
	},
	{
		type: 'item',
		icon: movieMaker,
		text: 'Windows Movie Maker'
	}
];
