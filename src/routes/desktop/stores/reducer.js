import recycleIcon from '$lib/assets/windowsIcons/Recycle Bin (empty).png';
import noteIcon from '$lib/assets/windowsIcons/Notepad.png';
import maxthonIcon from '$lib/assets/windowsIcons/Maxthon.png';
import paintIcon from '$lib/assets/windowsIcons/Paint.png';
import myCompIcon from '$lib/assets/windowsIcons/My Computer.png';
import wmPlayerIcon from '$lib/assets/windowsIcons/Windows Media Player 9.png';

import window from '../Window/Window.svelte';
import Maxthon from '../Apps/Maxthon/Maxthon.svelte';
import MyComputer from '../Apps/MyComputer/MyComputer.svelte';
import Notepad from '../Apps/Notepad/Notepad.svelte';
import Paint from '../Apps/Paint/Paint.svelte';
import WMPlayer from '../Apps/Window Media Player/WMPlayer.svelte';
import RecycleBin from '../Apps/Recycle/Recycle.svelte';
const gen = () => {
	let id = -1;
	return () => {
		id += 1;
		return id;
	};
};
const genId = gen();
const genIndex = gen();

const initialAppState = {
	'Recycle Bin': {
		component: RecycleBin,
		header: {
			title: 'Recycle Bin',
			icon: recycleIcon,
			invisible: false
		},
		defaultSize: {
			width: 660,
			height: 500
		},
		minSize: {
			width: 560,
			height: 400
		},
		maxSize: {
			width: 800,
			height: 600
		},
		defaultOffset: {
			x: 130,
			y: 20
		},
		resizable: true,
		minimized: false,
		maximized: false,
		id: genId(),
		zIndex: genIndex()
	},
	'My Computer': {
		component: MyComputer,
		header: {
			title: 'My Computer',
			icon: myCompIcon,
			invisible: false
		},
		defaultSize: {
			width: 660,
			height: 500
		},
		minSize: {
			width: 560,
			height: 400
		},
		maxSize: {
			width: 800,
			height: 600
		},
		defaultOffset: {
			x: 180,
			y: 170
		},
		resizable: true,
		minimized: false,
		maximized: false,
		id: genId(),
		zIndex: genIndex()
	},
	Notepad: {
		component: Notepad,
		header: {
			title: 'Untitled - Notepad',
			icon: noteIcon,
			invisible: false
		},
		defaultSize: {
			width: 660,
			height: 500
		},
		minSize: {
			width: 460,
			height: 300
		},
		maxSize: {
			width: 860,
			height: 700
		},
		defaultOffset: {
			x: 525,
			y: 200
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 800,
		id: genId(),
		zIndex: genIndex()
	},
	Maxthon: {
		component: Maxthon,
		header: {
			title: 'Maxthon',
			icon: maxthonIcon,
			invisible: false
		},
		defaultSize: {
			width: 1150,
			height: 800
		},
		minSize: {
			width: 1090,
			height: 700
		},
		maxSize: {
			width: 1330,
			height: 830
		},
		defaultOffset: {
			x: 120,
			y: 40
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 1400,
		id: genId(),
		zIndex: genIndex()
	},
	'Window Media Player': {
		component: WMPlayer,
		header: {
			title: 'Window Media Player',
			icon: wmPlayerIcon,
			invisible: true
		},
		defaultSize: {
			width: 600,
			height: 378
		},
		defaultOffset: {
			x: 190,
			y: 200
		},
		resizable: false,
		minimized: false,
		maximized: false,
		id: genId(),
		zIndex: genIndex()
	},
	Paint: {
		component: Paint,
		header: {
			title: 'Untitled - Paint',
			icon: paintIcon,
			invisible: false
		},
		defaultSize: {
			width: 800,
			height: 600
		},
		minSize: {
			width: 600,
			height: 400
		},
		maxSize: {
			width: 900,
			height: 670
		},
		defaultOffset: {
			x: 250,
			y: 100
		},
		resizable: true,
		minimized: false,
		maximized: false,
		id: genId(),
		zIndex: genIndex()
	}
};

const initialNotepadApp = {
	...initialAppState.Notepad,
	id: genId(),
	zIndex: genIndex()
};

export const initialState = {
	apps: [initialNotepadApp], // Include Notepad in the initially opened apps
	nextAppID: 1,
	zIndex: 2,
	focusedAppId: initialNotepadApp.id
};

export function reducer(state, action) {
	switch (action.type) {
		case 'ADD_APP': {
			const appConfig = initialAppState[action.appKey];
			if (!appConfig) return state;
			const newApp = {
				...appConfig,
				id: state.nextAppID,
				zIndex: state.zIndex
			};
			return {
				...state,
				apps: [...state.apps, newApp],
				nextAppID: state.nextAppID + 1,
				zIndex: state.zIndex + 1,
				focusedAppId: state.nextAppID
			};
		}
		case 'REMOVE_APP': {
			const updatedApps = state.apps.filter((app) => app.id !== action.id);

			// Find the next non-minimized app to focus
			let nextFocusedAppId = state.focusedAppId;
			if (state.focusedAppId === action.id) {
				const nonMinimizedApps = updatedApps.filter((app) => !app.minimized);
				if (nonMinimizedApps.length > 0) {
					// Find the app with the highest zIndex to focus
					const appToFocus = nonMinimizedApps.reduce((prev, current) =>
						prev.zIndex > current.zIndex ? prev : current
					);
					nextFocusedAppId = appToFocus.id;
				} else {
					// No non-minimized apps left
					nextFocusedAppId = null;
				}
			}

			return {
				...state,
				apps: updatedApps,
				focusedAppId: nextFocusedAppId
			};
		}
		case 'MINIMIZE_APP': {
			const minimizedApps = state.apps.map((app) =>
				app.id === action.id ? { ...app, minimized: true } : app
			);

			// Find the next non-minimized app to focus
			let nextFocusedAppId = state.focusedAppId;
			if (state.focusedAppId === action.id) {
				const nonMinimizedApps = minimizedApps.filter((app) => !app.minimized);
				if (nonMinimizedApps.length > 0) {
					// Find the app with the highest zIndex to focus
					const appToFocus = nonMinimizedApps.reduce((prev, current) =>
						prev.zIndex > current.zIndex ? prev : current
					);
					nextFocusedAppId = appToFocus.id;
				} else {
					// No non-minimized apps left
					nextFocusedAppId = null;
				}
			}

			return {
				...state,
				apps: minimizedApps,
				focusedAppId: nextFocusedAppId
			};
		}
		case 'RESTORE_APP': {
			return {
				...state,
				apps: state.apps.map((app) => (app.id === action.id ? { ...app, minimized: false } : app)),
				focusedAppId: action.id
			};
		}
		case 'FOCUS_APP': {
			const updatedApps = state.apps.map((app) => {
				if (app.id === action.id) {
					return { ...app, zIndex: state.zIndex };
				}
				return app;
			});

			return {
				...state,
				apps: updatedApps,
				focusedAppId: action.id,
				zIndex: state.zIndex + 1
			};
		}
		//TODO make maximize stay within bounds of intialState
		case 'TOGGLE_MAXIMIZE_APP': {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const newState = state.apps.map((app) => {
				if (app.id === action.id) {
					const maximized = !app.maximized;
					const width = maximized ? windowWidth + 6 : app.defaultSize.width;
					const height = maximized ? windowHeight - 24 : app.defaultSize.height;
					const x = maximized ? -3 : app.defaultOffset.x;
					const y = maximized ? -3 : app.defaultOffset.y;

					return { ...app, maximized, width, height, x, y };
				}
				return app;
			});
			return { ...state, apps: newState };
		}
		case 'UPDATE_APP_STATE': {
			const updatedApps = state.apps.map((app) => {
				if (app.id === action.id) {
					return {
						...app,
						defaultSize: { width: action.width, height: action.height }
					};
				}
				return app;
			});

			return {
				...state,
				apps: updatedApps
			};
		}
		default:
			return state;
	}
}
