<script lang="ts">
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import BarLead from '../components/appbar/BarLead.svelte';
	import Icon from '@iconify/svelte';
	import BarTrail from '../components/appbar/BarTrail.svelte';
	import Navigation from '../components/navigation/Navigation.svelte';
	import { nav } from '../components/navigation/navigation';
	import Settings from '../components/Settings.svelte';
	import Main from '../components/Main.svelte';

	let currentPage: nav = nav.Home;
	function onNav(e: CustomEvent) {
		currentPage = e.detail;
		console.log(nav[currentPage], currentPage);
	}
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
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block w-64 h-full bg-surface-900 border-primary-50/5">
			<Navigation on:nav={onNav} />
		</div>
	</svelte:fragment>

	<div class="container h-full ml-10 flex justify-left">
		{#if currentPage == nav.Home}
			<Main />
		{:else if currentPage == nav.Settings}
			<Settings />
		{/if}
	</div>
</AppShell>
