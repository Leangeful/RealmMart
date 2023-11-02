<script lang="ts">
	import { getGameStore } from '$lib/game/store.js';
	import { t } from '$lib/i18n/index.js';

	const game = getGameStore();
</script>

<div class="space-y-5">
	<h1 class="h1 mt-10">RealmMart {$game.n}</h1>

	<hr class="h-px" />

	<p>{$t('content.title')}:</p>

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

	<button type="button" class="btn variant-filled-primary" on:click={() => $game.n++}
		>Increment n</button
	>
</div>
