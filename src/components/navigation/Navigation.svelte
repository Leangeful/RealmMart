<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const drawerStore = getDrawerStore();
	const dispatch = createEventDispatcher();

	function itemClicked(e: MouseEvent) {
		drawerStore.close();
		dispatch('nav');
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<ul class="">
		<li>
			<button class="btn variant-outline-primary" id="nav-settings" on:click={itemClicked}
				>Settings</button
			>
		</li>
	</ul>
</nav>
