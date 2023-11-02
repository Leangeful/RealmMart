import type { LayoutLoad } from './$types';

export const prerender = true;

const serviceWorkers: Worker[] = [];

export const load: LayoutLoad = async () => {
	return { serviceWorkers };
};
