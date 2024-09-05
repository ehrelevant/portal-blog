<script>
	import sample from '$lib/images/sample.png';
	import BlogCard from './BlogCard.svelte';
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div class="my-8 grid grid-flow-row auto-rows-min grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
		<BlogCard href="/blog/1" src={sample} title="Blog Website Launch" date="09/05/2024" />
	</div>
</section>
