<script lang="ts">
	import { t } from '$lib/i18n';
	import Settings from '$lib/settings/Settings.svelte';
</script>

<div class="space-y-5 w-full">
	<h1 class="h1 mt-10 capitalize"><span>{$t('nav.settings')}</span></h1>
	<hr class="h-px" />
	<Settings />
</div>
