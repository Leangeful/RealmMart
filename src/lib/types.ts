import type { SettingsExport } from '$lib/settings/types.js';
import type { StoreExport } from './store/types.js';

export type { GameStore } from './gameStore.js';

export type GameWorker = Worker | undefined;

export interface GameExport {
	settings: SettingsExport;
	gold: number;
	gold_sec: number;
	store: StoreExport;
}

export interface Upgrade {
	cost: number;
	purchased: number;
}

export interface Upgrades {
	[index: string]: Upgrade;
}
