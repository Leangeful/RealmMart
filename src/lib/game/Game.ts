import { settings } from '$lib/settings/Settings';
import type { ISettings } from '$lib/settings/types';
import { loadGame, saveGame } from './save_load/save_load';
import type { GameState, GameWorker } from './types';

export class Game implements GameState {
	state = {
		n: 0,
		b: 0
	};

	lastProcess = Date.now();
	deltaT = Date.now();
	timeSinceSave = 0;

	settings: ISettings = settings;
	worker: GameWorker;

	constructor(saveGame?: GameState, saveSettings?: ISettings) {
		if (saveGame) this.state = saveGame.state;

		if (saveSettings) this.settings = saveSettings;
	}

	load(saveKey: string) {
		const saveGame = loadGame(saveKey);
		//console.log('Loading:', saveGame);
		if (saveGame) Object.assign(this, saveGame);
	}

	processTime() {
		const tCurrent = Date.now();
		this.deltaT = tCurrent - this.lastProcess;
		this.lastProcess = tCurrent;
		this.timeSinceSave += this.deltaT;
	}

	process() {
		//console.log('process');
		this.processTime();

		this.state.n += 1 / (1000 / this.deltaT);

		if (this.timeSinceSave >= settings.autoSaveTime) {
			saveGame({ state: this.state });
			this.timeSinceSave = 0;
		}
	}
}
