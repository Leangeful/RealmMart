import type { SettingsExport } from '$lib/settings/types.js';
import type { GoldExport } from './ressource/types.js';
import type { StoreExport } from './store/types.js';

export type { GameStore } from './gameStore.js';

export type GameWorker = Worker | undefined;

export interface GameExport {
	settings: SettingsExport;
	gold: GoldExport;
	store: StoreExport;
}
