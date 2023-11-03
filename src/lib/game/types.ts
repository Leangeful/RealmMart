//import type { Settings } from '$lib/settings/types.js';

export type { GameStore } from './store.js';

export interface GameState {
	state: {
		n: number;
		b: number;
	};

	//settings: Settings;
}

export type GameWorker = Worker | undefined;
