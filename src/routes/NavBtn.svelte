<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	href="{base}{href}"
	class="flex justify-center items-center px-8 h-full text-xl hover:underline {base + href ==
	$page.url.pathname
		? 'underline'
		: ''}"><slot /></a
>
