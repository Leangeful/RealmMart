import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

import { Game } from './Game';
import type { GameState } from './types';

const GAME_STORE_KEY = 'gameStore';

export function getGameStore(): GameStore {
	const gameStore = getContext<GameStore | undefined>(GAME_STORE_KEY);
	if (!gameStore) {
		throw new Error('gameStore not initialized');
	}

	return gameStore;
}

export function initializeGameStore(saveGame?: GameState): GameStore {
	console.log('Init gameStore:', saveGame);
	const gameStore = createGameStore(saveGame);
	return setContext(GAME_STORE_KEY, gameStore);
}

export type GameStore = ReturnType<typeof createGameStore>;
function createGameStore(saveGame?: GameState) {
	const { subscribe, set, update } = writable<Game>(new Game(saveGame));
	return {
		subscribe,
		set,
		update,
		load: (saveKey: string) =>
			update((game) => {
				game.load(saveKey);
				return game;
			}),
		process: () =>
			update((game) => {
				game.process();
				return game;
			})
	};
}
