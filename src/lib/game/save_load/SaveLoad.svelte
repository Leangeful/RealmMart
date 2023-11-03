<script lang="ts">
	import { browser } from '$app/environment';
	import { t } from '$lib/i18n';
	import { getGameStore } from '../store';
	import { getSaveList } from './save_load';
	import type { SaveInfo } from './types';

	let game: ReturnType<typeof getGameStore>;

	//TODO move to Game to make reactive with autosave?
	let saveList: SaveInfo[] = [];

	/* TODO save settings separately*/

	if (browser) {
		game = getGameStore();
		saveList = getSaveList();
	}

	let selectedSaveKey: string = '';
</script>

<div class="save-load">
	<div>
		<!-- TODO implement manual save -->
		<button class="btn variant-filled-primary capitalize" on:click={() => {}}
			>{$t('save.save_game')}</button
		>
	</div>

	<select class="select w-fit" size={10} bind:value={selectedSaveKey} on:change={() => []}>
		{#each saveList as saveInfo}
			<option value={saveInfo.saveKey}
				>{saveInfo.saveKey} {new Date(saveInfo.date).toLocaleString()}</option
			>
		{/each}
	</select>

	{#if selectedSaveKey}
		<div>
			<button
				class="btn variant-filled-secondary capitalize"
				on:click={() => {
					game.load(selectedSaveKey);
				}}>{$t('save.load')}</button
			>

			<!-- TODO implement delete save -->
			<button class="btn variant-filled-error capitalize" on:click={() => {}}
				>{$t('save.delete')}</button
			>
		</div>
	{/if}
	<p>Selected save: {selectedSaveKey}</p>
</div>

<style lang="postcss">
	.save-load {
		@apply flex flex-col space-y-2;
	}
</style>
