<script lang="ts">
	import { browser } from '$app/environment';
	import Loading from '$lib/components/Loading.svelte';
	import SaveLoad from '$lib/game/save_load/SaveLoad.svelte';
	import { getGameStore } from '$lib/game/store';
	import { t, locales } from '$lib/i18n';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}

	function tsChanged() {
		if (browser && game && $game.worker) {
			$game.worker.postMessage({
				msg: 'changets',
				data: { value: $game.settings.tickspeed }
			});
		}
		saveSettings();
	}

	function saveSettings() {
		//TODO save settings to ls on change
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
	<select class="select w-fit" size={1} bind:value={$game.settings.locale} on:change={saveSettings}>
		{#each $locales as value}
			<option {value}>{$t(`lang.${value}`)}</option>
		{/each}
	</select>

	<SaveLoad />

	<p>For testing: {$game.n.toFixed(0)}</p>
{:else}
	<Loading />
{/if}
