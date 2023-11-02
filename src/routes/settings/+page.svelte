<script lang="ts">
	import { getGameStore } from '$lib/game/store';

	const game = getGameStore();
</script>

<div class="space-y-5">
	<h1 class="h1 mt-10">Settings {$game.n}</h1>
	<hr class="h-px" />
</div>
