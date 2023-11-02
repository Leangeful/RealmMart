import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

import { Game } from './Game';

const GAME_STORE_KEY = 'gameStore';

export function getGameStore(): GameStore {
	const gameStore = getContext<GameStore | undefined>(GAME_STORE_KEY);
	if (!gameStore) {
		throw new Error('gameStore not initialized');
	}

	return gameStore;
}

export function initializeGameStore(): GameStore {
	const gameStore = createGameStore();

	return setContext(GAME_STORE_KEY, gameStore);
}

export type GameStore = ReturnType<typeof createGameStore>;
function createGameStore() {
	const { subscribe, set, update } = writable<Game>(new Game());
	return {
		subscribe,
		set,
		update,
		process: () =>
			update((game) => {
				game.process();
				return game;
			})
	};
}
