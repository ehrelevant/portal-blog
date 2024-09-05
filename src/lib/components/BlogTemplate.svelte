<script lang="ts">
	import { base } from '$app/paths';
	import SmallXMark from '$lib/icons/SmallXMark.svelte';

	export let src: string;
	export let title: string;
	export let date: string;
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div class="relative bg-white w-full my-8 p-4 sm:p-8 rounded-xl shadow-solid flex flex-col gap-2">
		<a
			href="{base}/blog"
			class="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-black rounded-xl hover:scale-105 transition-transform"
			><SmallXMark /></a
		>
		<img {src} alt={title} class="w-full aspect-[4/1]" />
		<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-1">
			<h1 class="text-4xl md:text-5xl">{title}</h1>
			<h2 class="text-xl md:text-2xl">{date}</h2>
		</div>
		<slot />
	</div>
</section>
