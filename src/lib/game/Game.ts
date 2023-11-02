import type { GameState, GameWorker } from './types';

export class Game implements GameState {
	n = 0;
	b = 0;

	worker: GameWorker;

	settings = {
		tickspeed: 1000,
		minTS: 10,
		maxTS: 1000
	};

	process() {
		this.n++;
		console.log('process');
	}
}
