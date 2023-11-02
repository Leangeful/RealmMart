<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import BarLead from '$lib/components/appbar/BarLead.svelte';
	import BarTrail from '$lib/components/appbar/BarTrail.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import GameService from '$lib/game/GameService.svelte';
	import { getGameStore, initializeGameStore } from '$lib/game/store';
	import { locale } from '$lib/i18n';

	initializeGameStore();
	initializeStores();

	const gameStore = getGameStore();

	$: $locale = $gameStore.settings.locale;
</script>

<GameService />

<Drawer>
	<Navigation />
</Drawer>

<AppShell>
	<!--Header-->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<BarLead />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<BarTrail />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!--SideBar-->
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block w-64 h-full bg-surface-900 border-primary-50/5">
			<Navigation />
		</div>
	</svelte:fragment>

	<!--Content-->
	<div class="container h-full px-1 lg:px-10 flex mx-auto justify-center">
		<slot />
	</div>
</AppShell>
