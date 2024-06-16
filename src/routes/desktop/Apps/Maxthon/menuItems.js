export const File = [

	{
		type: 'item',
		text: 'Open...',
		hotkey: 'Ctrl+O'
	},
	{
		type: 'item',
		text: 'Edit',
		disable: true
	},
	{
		type: 'item',
		disable: true,
		text: 'Save',
		hotkey: 'Ctrl+S'
	},
	{
		type: 'item',
		text: 'Save As...'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Page Setup...'
	},
	{
		type: 'item',
		text: 'Print...',
		hotkey: 'Ctrl+P'
	},
	{
		type: 'item',
		text: 'Print Preview...'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Import and Export...'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Properties'
	},
	{
		type: 'item',
		text: 'Work Offline'
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
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Select All',
		hotkey: 'Ctrl+A'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Find (on This Page)...',
		hotkey: 'Ctrl+F'
	}
];

const View = [
	{
		type: 'item',
		symbol: 'check',
		text: 'Status Bar'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Stop',
		hotkey: 'Esc'
	},
	{
		type: 'item',
		text: 'Refresh',
		hotkey: 'F5'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Source'
	},
	{
		type: 'item',
		disable: true,
		text: 'Privacy Report...'
	},
	{
		type: 'item',
		text: 'Full Screen',
		hotkey: 'F11'
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
	},
	{
		type: 'separator'
	},

	{
		type: 'item',
		text: 'Fireship - Learn to Code Faster'
	},
	{
		type: 'item',
		text: 'MDN Web Docs'
	}
];
const Tools = [
	
	{
		type: 'item',
		text: 'Manage Add-ons...'
	},
	{
		type: 'item',
		text: 'Synchronize...'
	},
	{
		type: 'item',
		text: 'Maxthon Update'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Diagnose Connection Problems...'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Internet Options...'
	}
];
const Help = [
	{
		type: 'item',
		text: 'Contents and Index'
	},
	{
		type: 'item',
		text: 'Tip of the Day'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'Online Support'
	},
	{
		type: 'item',
		text: 'Send Feedback'
	},
	{
		type: 'separator'
	},
	{
		type: 'item',
		text: 'About Maxthon'
	}
];
export default { File, Edit, View, Favorites, Tools, Help };
