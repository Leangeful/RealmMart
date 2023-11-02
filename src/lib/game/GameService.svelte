<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { getGameStore } from './store';

	const game = getGameStore();

	function onMsg({ data: { msg } }: MessageEvent) {
		if (msg == 'tick') {
			game.process();
		}
	}

	const registerWorker = async () => {
		if (browser && 'serviceWorker' in navigator) {
			const SyncWorker = await import('$lib/game/game.worker?worker');

			$game.worker = new SyncWorker.default();
			$game.worker.onmessage = onMsg;

			$game.worker.postMessage({
				msg: 'start',
				data: { value: 1000 } //TODO change with settings
			});
		}
	};

	onMount(() => {
		if (!$game.worker) registerWorker();
	});
</script>
