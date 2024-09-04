<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	href="{base}{href}"
	class="block w-full py-4 text-center text-white text-2xl hover:underline {href ==
	$page.url.pathname
		? 'underline'
		: ''}"><slot /></a
>
