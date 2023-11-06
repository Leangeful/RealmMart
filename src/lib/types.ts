import type { SettingsExport } from '$lib/settings/types.js';

export type { GameStore } from './gameStore.js';

export type GameWorker = Worker | undefined;

export interface GameExport {
	settings: SettingsExport;
	gold: number;
	gold_sec: number;
}

export interface Upgrade {
	id: string;
	cost: number;
}
