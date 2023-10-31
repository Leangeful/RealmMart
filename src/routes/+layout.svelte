<script lang="ts">
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import BarLead from '../components/appbar/BarLead.svelte';
	import BarTrail from '../components/appbar/BarTrail.svelte';
	import Navigation from '../components/navigation/Navigation.svelte';

	import { t, locales, locale } from '$lib/i18n';

	initializeStores();
</script>

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
	<div class="container h-full ml-10 flex justify-left">
		<slot />
	</div>
</AppShell>
