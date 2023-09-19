<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<div>
	recipe page
	<p>{data.plan}</p>
	<p>{JSON.stringify($page.data)}</p>
</div>
