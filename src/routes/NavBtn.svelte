<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	{href}
	class="block px-6 py-4 text-center text-lg hover:underline {href == $page.url.pathname
		? 'underline'
		: ''}"><slot /></a
>
