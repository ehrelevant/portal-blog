<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	{href}
	class="flex justify-center items-center px-6 h-full text-lg hover:underline {href ==
	$page.url.pathname
		? 'underline'
		: ''}"><slot /></a
>
