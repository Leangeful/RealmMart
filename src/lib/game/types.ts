export type { GameStore } from './store.js';

export interface GameState {
	n: number;
}

export type GameWorker = Worker | undefined;
