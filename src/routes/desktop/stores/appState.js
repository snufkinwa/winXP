import { writable } from 'svelte/store';
import { reducer, initialState } from './reducer';
import recycleIcon from '$lib/assets/windowsIcons/Recycle Bin (empty).png';
import noteIcon from '$lib/assets/windowsIcons/Notepad.png';
import maxthonIcon from '$lib/assets/windowsIcons/Maxthon.png';
import paintIcon from '$lib/assets/windowsIcons/Paint.png';
import myCompIcon from '$lib/assets/windowsIcons/My Computer.png';
import wmPlayerIcon from '$lib/assets/windowsIcons/Windows Media Player 9.png';

import Maxthon from '../Apps/Maxthon/Maxthon.svelte';
import MyComputer from '../Apps/MyComputer/MyComputer.svelte';
import Notepad from '../Apps/Notepad/Notepad.svelte';
import Paint from '../Apps/Paint/Paint.svelte';
import WMPlayer from '../Apps/Window Media Player/WMPlayer.svelte';
import RecycleBin from '../Apps/Recycle/Recycle.svelte';

function createAppState() {
	const { subscribe, update } = writable(initialState);

	return {
		subscribe,
		dispatch: (action) => update((state) => reducer(state, action))
	};
}

export const appState = createAppState();

export const iconState = writable([
	{
		id: 0,
		icon: recycleIcon,
		title: 'Recycle Bin',
		component: RecycleBin,
		isFocus: false
	},
	{
		id: 1,
		icon: myCompIcon,
		title: 'My Computer',
		component: MyComputer,
		isFocus: false
	},
	{
		id: 2,
		icon: noteIcon,
		title: 'Notepad',
		component: Notepad,
		isFocus: false
	},
	{
		id: 3,
		icon: maxthonIcon,
		title: 'Maxthon',
		component: Maxthon,
		isFocus: false
	},
	{
		id: 4,
		icon: wmPlayerIcon,
		title: 'Window Media Player',
		component: WMPlayer,
		isFocus: false
	},
	{
		id: 5,
		icon: paintIcon,
		title: 'Paint',
		component: Paint,
		isFocus: false
	}
]);

export const recycleBinState = writable({
	items: []
});

export function addItemToRecycleBin(item) {
	recycleBinState.update((state) => ({
		...state,
		items: [...state.items, item]
	}));
}

export function addApp(appKey) {
	appState.dispatch({ type: 'ADD_APP', appKey });
}

export function removeApp(id) {
	appState.dispatch({ type: 'REMOVE_APP', id });
}

export function minimizeApp(id) {
	appState.dispatch({ type: 'MINIMIZE_APP', id });
}

export function restoreApp(id) {
	appState.dispatch({ type: 'RESTORE_APP', id });
}

export function focusApp(id) {
	appState.dispatch({ type: 'FOCUS_APP', id });
}

export function toggleMaximizeApp(id) {
	appState.dispatch({ type: 'TOGGLE_MAXIMIZE_APP', id });
}

export function updateAppState(id, width, height, x, y) {
	appState.dispatch({ type: 'UPDATE_APP_STATE', id, width, height, x, y });
}
