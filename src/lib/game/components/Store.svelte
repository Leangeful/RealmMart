<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/game/gameStore.js';
	import { t } from '$lib/i18n/index.js';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}
</script>

<div class="store">
	<h1 class="h1 mt-10">
		<span>{$t('nav.' + ($game.store.hasOpened ? 'mainStore' : 'mainHome'))}</span>
	</h1>
	<hr class="h-px" />

	<p>Gold: {$game.gold.amount.toFixed(0) ?? 0}</p>
</div>

<style lang="postcss">
	.store {
		@apply space-y-5 w-full;
	}
</style>
