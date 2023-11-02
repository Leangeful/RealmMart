<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { getGameStore } from './store';
	import { page } from '$app/stores';

	const game = getGameStore();

	function onMsg({ data: { msg } }: MessageEvent) {
		if (msg == 'tick') {
			game.process();
		}
	}

	const registerWorker = async () => {
		if (browser && 'serviceWorker' in navigator) {
			const SyncWorker = await import('$lib/game/game.worker?worker');
			console.log('register worker');
			$game.worker = new SyncWorker.default();
			$game.worker.onmessage = onMsg;

			$game.worker.postMessage({
				msg: 'start',
				data: { value: $game.settings.tickspeed }
			});
			$page.data.serviceWorkers.push($game.worker);
		}
	};

	onMount(() => {
		console.log('serviceWorkers:', $page.data.serviceWorkers);
		if (!$page.data.serviceWorkers.length) registerWorker();
		else {
			$game.worker = $page.data.serviceWorkers[0];
			if ($game.worker) $game.worker.onmessage = onMsg;
		}
	});
</script>
