<script lang="ts">
	import { browser } from '$app/environment';
	import Store from '$lib/game/components/Store.svelte';
	import { getGameStore } from '$lib/game/gameStore.js';
	import { t } from '$lib/i18n/index.js';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}
</script>

{#if $game}
	<Store />
{/if}
