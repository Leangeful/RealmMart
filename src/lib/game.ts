import { settings } from './settings/settings';
import { store } from './store/store';
import type { GameExport } from './types';

export const game: GameExport = {
	settings,
	gold: 500,
	gold_sec: 1,
	store
};
