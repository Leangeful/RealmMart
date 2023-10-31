<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { navigation } from './navigation';
	import { base } from '$app/paths';

	const drawerStore = getDrawerStore();

	function itemClicked() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<ul class="">
		<li class="space-y-2">
			{#each navigation as n}
				<a href="{base}{n.r}" on:click={itemClicked}>{n.name}</a>
			{/each}
		</li>
	</ul>
</nav>

<style lang="postcss">
</style>
