<script>
	import { t, locale, locales } from '$lib/i18n';
</script>

<div class="bartrail flex space-x-2">
	<a
		class="btn btn-sm variant-ghost-surface"
		href="https://github.com/Leangeful/RealmMart"
		target="_blank"
		rel="noreferrer"
	>
		GitHub
	</a>

	<select class="select w-14" size={1} bind:value={$locale}>
		{#each $locales as value}
			<option {value}>{$t(`lang.${value}`)}</option>
		{/each}
	</select>
</div>
