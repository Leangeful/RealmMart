import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { game } from './game';

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
	const { subscribe, set, update } = writable(game);
	return {
		subscribe,
		set,
		update
		/* load: (saveKey?: string) =>
			update((game) => {
				game.load(saveKey);
				return game;
			}),
		process: () =>
			update((game) => {
				game.process();
				return game;
			}) */
	};
}
