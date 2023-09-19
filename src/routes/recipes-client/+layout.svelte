<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	export let data: LayoutData;
</script>

<main>
	<p>{data.layoutPlan}</p>
	<p>{JSON.stringify($page.data)}</p>
	<slot />
</main>
