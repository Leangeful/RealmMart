<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/gameStore.js';
	import Store from '$lib/store/Store.svelte';

	let game: ReturnType<typeof getGameStore>;
	if (browser) game = getGameStore();
</script>

<Store />
