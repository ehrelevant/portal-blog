<script lang="ts">
	import { base } from '$app/paths';

	export let src: string;
	export let name: string;
</script>

<div
	class="bg-white sm:h-80 lg:h-72 w-full rounded-xl p-2 md:p-4 flex flex-col sm:flex-row gap-2 hover:scale-[1.025] transition-transform"
>
	<img {src} alt={name} class="w-full sm:w-auto min-h-full aspect-square" />
	<div class="flex flex-col md:flex-row gap-1">
		<h2 class="text-4xl sm:text-5xl lg:text-4xl">{name}</h2>
	</div>
</div>
