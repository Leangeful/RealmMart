<script lang="ts">
	import { browser } from '$app/environment';
	import { t } from '$lib/i18n';
	import { getGameStore } from '../gameStore';
	import SaveSelectOption from './SaveSelectOption.svelte';
	import { deleteSave, loadGame, saveGame, saveListStore } from './saveLoad';

	let game: ReturnType<typeof getGameStore>;
	if (browser) game = getGameStore();

	let selectedSaveKey: string = '';
</script>

<p>Gold: {($game.gold ?? 0).toFixed(0)}</p>

<div class="save-load">
	<div>
		<button
			class="btn variant-filled-primary capitalize"
			on:click={() => {
				saveGame($game, false);
			}}
		>
			{$t('save.save_game')}
		</button>
	</div>

	<select class="select w-fit" size={10} bind:value={selectedSaveKey} on:change={() => []}>
		{#if $saveListStore.autoSaveInfo}
			<SaveSelectOption info={$saveListStore.autoSaveInfo} />
		{/if}
		{#if $saveListStore.manualSaveInfo}
			{#each $saveListStore.manualSaveInfo as info}
				<SaveSelectOption {info} />
			{/each}
		{/if}
	</select>

	<!-- TODO ask for confirmation -->
	{#if selectedSaveKey}
		<div>
			<button
				class="btn variant-filled-secondary capitalize"
				on:click={() => {
					const loadedGame = loadGame(selectedSaveKey);
					if (loadedGame) $game = loadedGame;
				}}>{$t('save.load')}</button
			>

			<button
				class="btn variant-filled-error capitalize"
				on:click={() => {
					deleteSave(selectedSaveKey);
					selectedSaveKey = '';
				}}>{$t('save.delete')}</button
			>
		</div>
	{/if}
</div>

<style lang="postcss">
	.save-load {
		@apply flex flex-col space-y-2;
	}
</style>
