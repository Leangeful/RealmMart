<script lang="ts">
	import { t } from '$lib/i18n';
	import { createEventDispatcher } from 'svelte';
	import type { Upgrades } from '../types';

	export let upgrades: Upgrades;
	export let trans: string;
	const dispatch = createEventDispatcher();
</script>

<div class="upgrades card p-2 m-2">
	<div class="h4 m-2">Upgrades</div>
	<div class="flex">
		{#each Object.entries(upgrades) as [idx, upgrade]}
			<button class="btn variant-ghost-primary p-1" on:click={() => dispatch('purchase', idx)}>
				<!-- TODO ugrade button component -->
				<div class="flex flex-col items-start">
					<p>{$t(trans + idx + '.name')}</p>
					<p>{$t(trans + idx + '.desc')}</p>
					<p>Cost: {upgrade.cost}</p>
				</div>
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
