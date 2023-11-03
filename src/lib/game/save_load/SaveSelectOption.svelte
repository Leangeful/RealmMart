<script lang="ts">
	import type { SaveInfo } from './types';

	export let info: SaveInfo;
</script>

<option value={info.saveKey}
	>{info.id} {info.saveType} {new Date(info.date).toLocaleString()}</option
>
