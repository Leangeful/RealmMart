import { settings } from '$lib/settings/Settings';
import type { Settings } from '$lib/settings/types';
import { save } from './save_load';
import type { GameState, GameWorker } from './types';

export class Game {
	n = 0;
	b = 0;

	lastProcess = Date.now();
	deltaT = Date.now();
	timeSinceSave = 0;

	settings: Settings = settings;
	worker: GameWorker;

	constructor(saveGame?: GameState) {
		if (saveGame) {
			this.n = saveGame.n;
			this.settings = saveGame.settings;
		}
	}

	processTime() {
		const tCurrent = Date.now();
		this.deltaT = tCurrent - this.lastProcess;
		this.lastProcess = tCurrent;
		this.timeSinceSave += this.deltaT;
	}

	process() {
		console.log('process');
		this.processTime();

		this.n += 1 / (1000 / this.deltaT);

		if (this.timeSinceSave >= settings.autoSaveTime) {
			console.log('saving');
			save({ n: this.n, settings: this.settings });
			this.timeSinceSave = 0;
		}
	}
}
