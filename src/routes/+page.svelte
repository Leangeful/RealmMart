<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/gameStore.js';

	let game: ReturnType<typeof getGameStore>;
	if (browser) game = getGameStore();

	$: gold = $game?.gold ?? 0;
</script>

<p>Gold {gold.toFixed(0)}</p>

<button on:click={() => $game.gold++}>Increment Gold</button>
