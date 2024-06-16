export const File = [
	{
		type: 'item',
		text: 'Create Shortcut',
		disable: true
	},
	{
		type: 'item',
		text: 'Delete',
		disable: true
	},
	{
		type: 'item',
		text: 'Rename',
		disable: true
	},
	{
		type: 'item',
		disable: true,
		text: 'Properties'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Close'
	}
];
const Edit = [
	{
		type: 'item',
		disable: true,
		text: 'Undo',
		hotkey: 'Ctrl+Z'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		disable: true,
		text: 'Cut',
		hotkey: 'Ctrl+X'
	},
	{
		type: 'item',
		disable: true,
		text: 'Copy',
		hotkey: 'Ctrl+C'
	},
	{
		type: 'item',
		disable: true,
		text: 'Paste',
		hotkey: 'Ctrl+V'
	},
	{
		type: 'item',
		disable: true,
		text: 'Paste Shortcut'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Copy To Folder...',
		disable: true
	},
	{
		type: 'item',
		text: 'Move To Folder...',
		disable: true
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Select All',
		hotkey: 'Ctrl+A'
	},
	{
		type: 'item',
		text: 'Invert Selection'
	}
];

const View = [
	{
		type: 'menu',
		position: {
			left: 'calc(100% - 4px)',
			top: '-3px'
		},
		text: 'Toolbars',
		items: [
			{
				type: 'item',
				symbol: 'check',
				text: 'Standard Buttons'
			},
			{
				type: 'item',
				symbol: 'check',
				text: 'Address Bar'
			},
			{
				type: 'item',
				symbol: 'check',
				text: 'Links'
			},
			{
				type: 'separator'
			},
			{
				type: 'item',
				symbol: 'check',
				text: 'Lock the Toolbars'
			},
			{
				type: 'item',
				text: 'Customize...'
			}
		]
	},
	{
		type: 'item',
		symbol: 'check',
		text: 'Status Bar'
	},
	{
		type: 'menu',
		position: {
			left: 'calc(100% - 4px)',
			top: '-3px'
		},
		text: 'Explorer Bar',
		items: [
			{
				type: 'item',
				text: 'Search',
				hotkey: 'Ctrl+E'
			},
			{
				type: 'item',
				text: 'Favorites',
				hotkey: 'Ctrl+I'
			},
			{
				type: 'item',
				text: 'History',
				hotkey: 'Ctrl+H'
			},
			{
				type: 'item',
				text: 'Folders'
			},
			{
				type: 'separator'
			},
			{
				type: 'item',
				text: 'Tip of the Day'
			}
		]
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Thumbnails'
	},
	{
		type: 'item',
		text: 'Tiles',
		symbol: 'circle'
	},
	{
		type: 'item',
		text: 'Icons'
	},
	{
		type: 'item',
		text: 'List'
	},
	{
		type: 'item',
		text: 'Details'
	},
	{
		type: 'item',
		text: 'Choose Details...'
	},
	{
		type: 'item',
		text: 'Refresh'
	}
];
const Favorites = [
	{
		type: 'item',
		text: 'Add to Favorites...'
	},
	{
		type: 'item',
		text: 'Organize Favorites...'
	}
];
const Tools = [
	{
		type: 'item',
		text: 'Map Network Drive...'
	},
	{
		type: 'item',
		text: 'Disconnect Network Drive...'
	},
	{
		type: 'item',
		text: 'Synchronize...'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Folder Options...'
	}
];
const Help = [
	{
		type: 'item',
		text: 'Help and Support Center'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Is this copy of Windows legal?'
	},
	{
		type: 'item',
		text: 'About Windows'
	}
];
export default { File, Edit, View, Favorites, Tools, Help };
