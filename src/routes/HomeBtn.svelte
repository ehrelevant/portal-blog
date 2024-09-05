<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
</script>

<a
	href="{base}{href}"
	class="group bg-black flex flex-col justify-center items-center text-center grow min-h-32 p-1 text-lg sm:text-2xl rounded-lg hover:scale-105 transition-transform"
>
	<slot />
</a>
