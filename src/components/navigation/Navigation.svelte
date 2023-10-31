<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';
	import { navigation, type nav } from './navigation';

	const drawerStore = getDrawerStore();
	const dispatch = createEventDispatcher();

	function itemClicked(id: nav) {
		drawerStore.close();
		dispatch('nav', id);
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<ul class="">
		<li class="space-y-2">
			{#each navigation as n}
				<button
					class="btn variant-ghost-surface w-full"
					id="nav-{n.id}"
					on:click={() => itemClicked(n.id)}>{n.name}</button
				>
			{/each}
		</li>
	</ul>
</nav>

<style lang="postcss">
</style>
