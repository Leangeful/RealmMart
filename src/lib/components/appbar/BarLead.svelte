<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<div class="flex items-center">
	<button class="lg:hidden btn btn-sm p-0 mx-2" on:click={drawerOpen}>
		<Icon icon="ph:scroll-bold" width="26" class="m-0" />
	</button>

	<strong class="h4 pt-2">
		<a href="{base}/"><span class="text-primary-500">Realm</span>Mart</a>
	</strong>
</div>
