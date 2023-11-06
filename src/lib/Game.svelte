<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { getGameStore } from './gameStore';
	import { page } from '$app/stores';
	import { saveGame } from './saveLoad/saveLoad';
	import type { GameWorker } from './types';
	import { settings } from './settings/settings';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}

	let worker: GameWorker;

	const registerWorker = async () => {
		if (browser && 'serviceWorker' in navigator) {
			const SyncWorker = await import('$lib/game.worker?worker');
			worker = new SyncWorker.default();
			worker.onmessage = process;

			worker.postMessage({
				msg: 'start',
				data: { value: settings.tickspeed }
			});
			$page.data.serviceWorkers.push(worker);
		}
	};

	onMount(() => {
		if (!$page.data.serviceWorkers.length) registerWorker();
		else {
			worker = $page.data.serviceWorkers[0];
			if (worker) worker.onmessage = process;
		}
	});

	let lastProcess = Date.now();
	let deltaT = Date.now();
	let timeSinceSave = 0;

	function process() {
		console.log('process');
		processTime();
		timeSinceSave += deltaT;
		$game.gold += $game.gold_sec / (1000 / deltaT);

		save();
	}

	function processTime() {
		const tCurrent = Date.now();
		deltaT = tCurrent - lastProcess;
		lastProcess = tCurrent;
	}

	function save() {
		if (timeSinceSave >= settings.autoSaveTime) {
			saveGame($game);
			timeSinceSave = 0;
		}
	}
</script>
