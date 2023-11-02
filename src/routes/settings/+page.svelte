<script lang="ts">
	import { getGameStore } from '$lib/game/store';
	import { t } from '$lib/i18n';
	import Settings from '$lib/settings/Settings.svelte';

	const game = getGameStore();
</script>

<div class="space-y-5 w-full">
	<h1 class="h1 mt-10 capitalize"><span>{$t('nav.settings')}</span></h1>
	<hr class="h-px" />
	<Settings />
</div>

<p>For testing: {$game.n.toFixed(0)}</p>
