import type { ISettings } from '$lib/settings/types';
import type { GameState } from '../types';
import type { SaveGame, SaveInfo } from './types';

const settingsKey = 'realmMart-settings';

export function save(game: GameState, autoSave = true) {
	console.debug('Saving:', game);
	const saveJSON = JSON.stringify(game);
	const gameB64 = btoa(saveJSON);
	const saveGame: SaveGame = { date: Date.now(), gameData: gameB64 };

	let saveKey = 'realmMart-';

	if (autoSave) {
		saveKey += 'auto';
	}

	localStorage.setItem(saveKey, JSON.stringify(saveGame));
}

export function loadGame(loadKey = 'realmMart-auto'): GameState | undefined {
	//TODO load latest not auto
	const saveStr = localStorage.getItem(loadKey);

	if (saveStr) {
		const saveGame: SaveGame = JSON.parse(saveStr);
		return JSON.parse(atob(saveGame.gameData));
	}

	return undefined;
}

export function getSaveList(): SaveInfo[] {
	const results: SaveInfo[] = [];
	Object.entries(localStorage).forEach((storageItem) => {
		const storageKey = storageItem[0];
		if (storageKey.includes('realmMart') && storageKey != settingsKey) {
			const saveGame: SaveGame = JSON.parse(storageItem[1]);
			results.push({ saveKey: storageKey, date: saveGame.date });
		}
	});

	return results;
}

export function saveSettings(settings: ISettings) {
	console.debug('save settings:', settings);
	const settingsJSON = JSON.stringify(settings);
	const settingsB64 = btoa(settingsJSON);

	localStorage.setItem(settingsKey, settingsB64);
}
export function loadSettings(): ISettings | undefined {
	console.debug('load settings');
	const settingsStr = localStorage.getItem(settingsKey);

	if (settingsStr) {
		return JSON.parse(atob(settingsStr));
	}

	return undefined;
}
