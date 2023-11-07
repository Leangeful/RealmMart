<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/gameStore.js';
	import { t } from '$lib/i18n/index.js';
	import { upgrades } from './upgrades';
	import Upgrades from '../components/Upgrades.svelte';

	let game: ReturnType<typeof getGameStore>;
	if (browser) game = getGameStore();

	let trans = 'upgrade.store.';

	function onPurchase(upgIdx: string) {
		const upgrade = $game?.store.upgrades[upgIdx];
		if (!upgrade) console.error('Upgrade not found');

		console.log(upgIdx);
		if (upgrade.cost <= $game.gold) {
			console.log('purchase');
		} else {
			console.log('Cant afford');
		}
	}
</script>

<div class="store">
	<h1 class="h1 mt-10">
		<span>{$t('nav.' + ($game?.store.upgrades.open.purchased ? 'mainHome' : 'mainStore'))}</span>
	</h1>
	<hr class="h-px" />

	<Upgrades {trans} {upgrades} on:purchase={(e) => onPurchase(e.detail)} />
</div>

<style lang="postcss">
	.store {
		@apply space-y-5 w-full;
	}
</style>
