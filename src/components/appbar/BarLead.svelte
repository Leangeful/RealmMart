<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		console.debug('open drawer');
		drawerStore.open();
	}
</script>

<div class="flex items-center">
	<button class="lg:hidden btn btn-sm p-0 mx-2" on:click={drawerOpen}>
		<Icon icon="ph:scroll-bold" width="26" class="m-0" />
	</button>
	<strong class="h4 pt-2"><span class="text-primary-500">Realm</span>Mart</strong>
</div>
