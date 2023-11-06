<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { navigation } from './navigation';
	import { base } from '$app/paths';
	import { t } from '$lib/i18n';
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/gameStore';
	const drawerStore = getDrawerStore();

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}

	function itemClicked() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<ul class="">
		<li class="space-y-2">
			<a href="{base}{navigation[0].path}" on:click={itemClicked}
				>{$t('nav.' + /*($game?.store.hasOpened ? 'mainStore' : */ 'mainHome')}</a
			>
			<a href="{base}{navigation[1].path}" on:click={itemClicked}
				>{$t('nav.' + navigation[1].name)}</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
</style>
