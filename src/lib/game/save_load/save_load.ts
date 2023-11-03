import type { GameState } from '../types';
import type { SaveGame, SaveInfo } from './types';

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
	//console.log(getSaveList());
	const saveStr = localStorage.getItem(loadKey);

	if (saveStr) {
		const saveGame: SaveGame = JSON.parse(saveStr);
		return JSON.parse(atob(saveGame.gameData));
	}

	return undefined;
}

export function getSaveList(): SaveInfo[] {
	const results: SaveInfo[] = [];
	Object.entries(localStorage).forEach((e) => {
		if (e[0].includes('realmMart')) {
			const saveGame: SaveGame = JSON.parse(e[1]);
			results.push({ saveKey: e[0], date: saveGame.date });
		}
	});

	return results;
}
