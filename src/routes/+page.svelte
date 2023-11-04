<script lang="ts">
	import { browser } from '$app/environment';
	import { getGameStore } from '$lib/game/store.js';
	import { t } from '$lib/i18n/index.js';

	let game: ReturnType<typeof getGameStore>;

	if (browser) {
		game = getGameStore();
	}
</script>

<div class="space-y-5 w-full">
	<h1 class="h1 mt-10"><span>RealmMart {$game?.n.toFixed(0) ?? 0}</span></h1>
	<hr class="h-px" />

	<p>{$t('content.title')}:</p>

	<p>Gold: {$game?.gold.amount.toFixed(0) ?? 0}</p>

	<div class="block card p-2">
		<div class="h3">Stores</div>
		-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua Lorem ip
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code>
			</li>
		</ul>
	</div>

	{#if $game}
		<button type="button" class="btn variant-filled-primary" on:click={() => $game.n++}
			>Increment n</button
		>
	{/if}
</div>
