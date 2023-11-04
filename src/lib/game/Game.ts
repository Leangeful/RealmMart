import { settings } from '$lib/settings/Settings';
import type { SettingsExport } from '$lib/settings/types';
import { Gold } from './ressource/Gold';
import { loadGame, saveGame } from './save_load/save_load';
import { Store } from './store/Store';
import type { GameExport, GameWorker } from './types';

export class Game implements GameExport {
	gold = new Gold(2, 0);
	store = new Store();

	lastProcess = Date.now();
	deltaT = Date.now();
	timeSinceSave = 0;

	settings: SettingsExport = settings;
	worker: GameWorker;

	process() {
		this.processTime();
		this.gold.process(this.deltaT);
		this.timeSinceSave += this.deltaT;

		this.save();
	}

	processTime() {
		const tCurrent = Date.now();
		this.deltaT = tCurrent - this.lastProcess;
		this.lastProcess = tCurrent;
	}

	getExport(): GameExport {
		return {
			settings: this.settings,
			gold: this.gold.getExport(),
			store: this.store.getExport()
		};
	}

	save() {
		if (this.timeSinceSave >= settings.autoSaveTime) {
			saveGame(this.getExport());
			this.timeSinceSave = 0;
		}
	}

	load(saveKey?: string) {
		const loadedGame = loadGame(saveKey);
		if (loadedGame) {
			this.settings = loadedGame.settings;
			this.gold.setExport(loadedGame.gold);
		}
		console.log('Loaded:', loadedGame);
	}
}
