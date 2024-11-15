<script>
	import BlogCard from './BlogCard.svelte';
	import mockupSample from '$lib/images/blog/mockupSample.png';
	import sample from '$lib/images/sample.webp';
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div class="my-8 grid grid-flow-row auto-rows-min grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
		<BlogCard href="/blog/5" src={sample} title="Initial Software Video Demo" date="11/15/2024" />
		<BlogCard href="/blog/4" src={sample} title="System Requirements II" date="10/16/2024" />
		<BlogCard href="/blog/3" src={sample} title="System Requirements I" date="09/27/2024" />
		<BlogCard href="/blog/2" src={mockupSample} title="The Project Plan" date="09/18/2024" />
		<BlogCard href="/blog/1" src={sample} title="Blog Website Launch" date="09/05/2024" />
	</div>
</section>
