<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let src: string;
	export let title: string;
	export let date: string;
</script>

<a
	href="{base}{href}"
	class="bg-white w-full h-fit rounded-xl p-2 md:p-4 flex flex-col gap-2 hover:scale-[1.025] transition-transform"
>
	<img {src} alt={title} class="w-full aspect-[4/1]" />
	<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-1">
		<h2 class="text-2xl lg:text-4xl">{title}</h2>
		<h2 class="text-base sm:text-lg lg:text-2xl">{date}</h2>
	</div>
</a>
