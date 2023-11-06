<script lang="ts">
	import { browser } from '$app/environment';
	import SaveLoad from '$lib/saveLoad/SaveLoad.svelte';
	import { saveGame } from '$lib/saveLoad/saveLoad';
	import { getGameStore } from '$lib/gameStore';
	import { t, locales } from '$lib/i18n';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let game: ReturnType<typeof getGameStore>;
	if (browser) game = getGameStore();

	function tsChanged() {
		let worker = $page.data.serviceWorkers[0];
		if (browser && game && worker) {
			worker.postMessage({
				msg: 'changets',
				data: { value: $game.settings.tickspeed }
			});
		}
		settingsChanged();
	}

	function settingsChanged() {
		saveGame($game);
	}
</script>

{#if game}
	<RangeSlider
		name="ts-slider"
		bind:value={$game.settings.tickspeed}
		min={$game.settings.minTickSpeed}
		max={$game.settings.maxTickspeed}
		step={$game.settings.minTickSpeed}
		ticked
		on:change={tsChanged}
	>
		<div class="flex justify-between items-center">
			<div class="font-bold capitalize">{$t('settings.tickspeed')}</div>
			<div class="text-xs">{$game.settings.tickspeed} / {$game.settings.maxTickspeed}</div>
		</div>
	</RangeSlider>

	<div class="font-bold capitalize">{$t('settings.language')}</div>
	<select
		class="select w-fit"
		size={1}
		bind:value={$game.settings.locale}
		on:change={settingsChanged}
	>
		{#each $locales as value}
			<option {value}>{$t(`lang.${value}`)}</option>
		{/each}
	</select>

	<SaveLoad />
{/if}
