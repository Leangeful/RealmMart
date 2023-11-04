import type { SettingsExport } from '$lib/settings/types.js';
import type { GoldExport } from './ressource/types.js';

export type { GameStore } from './store.js';

export type GameWorker = Worker | undefined;

export interface GameExport {
	settings: SettingsExport;

	n: number;
	gold: GoldExport;
}
