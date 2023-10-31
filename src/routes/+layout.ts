import { Game } from '$lib/game/Game';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async () => {
	const game = new Game();
	return { game };
};
