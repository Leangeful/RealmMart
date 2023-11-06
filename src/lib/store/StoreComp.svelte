<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/gameStore.js';
	import { t } from '$lib/i18n/index.js';
	import { storeUpgrades } from './upgrades';
	import Upgrades from '../components/Upgrades.svelte';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}

	let trans = 'upgrade.store.';
</script>

<div class="store">
	<h1 class="h1 mt-10">
		<!-- <span>{$t('nav.' + ($game?.store.hasOpened ? 'mainStore' : 'mainHome'))}</span> -->
	</h1>
	<hr class="h-px" />

	<!-- <p>Gold: {$game?.gold.amount.toFixed(0) ?? 0}</p> -->

	<Upgrades {trans} upgrades={storeUpgrades} />
</div>

<style lang="postcss">
	.store {
		@apply space-y-5 w-full;
	}
</style>
