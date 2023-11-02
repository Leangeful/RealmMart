import type { GameState } from './types';

export function save(game: GameState) {
	console.debug('Saving:', game);
	const saveJSON = JSON.stringify(game);
	const saveB64 = btoa(saveJSON);
	localStorage.setItem('save', saveB64);
}

export function load(): GameState | undefined {
	const saveB64 = localStorage.getItem('save');
	if (saveB64) {
		return JSON.parse(atob(saveB64));
	}

	return undefined;
}
