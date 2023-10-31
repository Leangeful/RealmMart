<script lang="ts">
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import BarLead from '../components/appbar/BarLead.svelte';
	import Icon from '@iconify/svelte';
	import BarTrail from '../components/appbar/BarTrail.svelte';
	import Navigation from '../components/navigation/Navigation.svelte';
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
		<div id="sidebar-left" class="hidden lg:block h-full bg-surface-900 border-primary-50/5">
			<Navigation />
		</div>
	</svelte:fragment>

	<div class="container h-full mx-auto flex justify-center">
		<div class="space-y-5">
			<h1 class="h1 mt-10">RealmMart</h1>
			<hr class="h-px" />

			<p>Start by exploring:</p>

			<div class="block card p-2">
				<div class="h3">Stores</div>
				<ul>
					<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
					<li><code class="code">/src/app.postcss</code> - app wide css</li>
					<li>
						<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
					</li>
				</ul>
			</div>
			<button type="button" class="btn variant-filled-primary">Primary</button>
			<button type="button" class="btn variant-filled-secondary">Secondary</button>
			<button type="button" class="btn variant-filled-tertiary">tertiary</button>
			<button type="button" class="btn variant-filled-success">success</button>
			<button type="button" class="btn variant-filled-warning">warning</button>
			<button type="button" class="btn variant-filled-error">Error</button>
			<button type="button" class="btn variant-filled-surface">Surface</button>
		</div>
	</div>
</AppShell>
