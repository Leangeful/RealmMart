<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Upgrade } from '../types';

	export let upgrades: Upgrade[] = [];
	export let trans: string;
</script>

<div class="upgrades flex">
	{#each upgrades as upgrade, i}
		<div class="upgrade card card-hover border-solid border-2 border-primary-500">
			<p>{$t(trans + upgrade.id + '.name')}</p>
			<p>{$t(trans + upgrade.id + '.desc')}</p>
			<p>Cost:{upgrade.cost}</p>
		</div>
	{/each}
</div>
