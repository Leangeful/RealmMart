import { settings } from '$lib/settings/Settings';
import type { Settings } from '$lib/settings/types';
import type { GameState, GameWorker } from './types';

export class Game implements GameState {
	n = 0;
	b = 0;

	settings: Settings = settings;
	worker: GameWorker;
	process() {
		//TODO get/use delta t
		console.log('process');
		this.n += 1 / (1000 / settings.tickspeed);
	}
}
