<script>
	import BlogCard from './BlogCard.svelte';
	import mockupSample from '$lib/images/blog/mockupSample.png';
	import sample from '$lib/images/sample.webp';
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div class="my-8 grid grid-flow-row auto-rows-min grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
		<BlogCard href="/blog/13" src={sample} title="Weekly Blog 04" date="02/25/2025" />
		<BlogCard href="/blog/12" src={sample} title="Project Evaluation 1" date="02/24/2025" />
		<BlogCard href="/blog/11" src={sample} title="Weekly Blog 03" date="02/17/2025" />
		<BlogCard href="/blog/10" src={sample} title="Software Release v1" date="02/14/2025" />
		<BlogCard href="/blog/9" src={sample} title="Software Maintenance Plan" date="02/11/2025" />
		<BlogCard href="/blog/8" src={sample} title="Weekly Blog 02" date="02/11/2025" />
		<BlogCard href="/blog/7" src={sample} title="Weekly Blog 01" date="02/04/2025" />
		<BlogCard
			href="/blog/6"
			src={sample}
			title="Software Testing Report (TypeKindly)"
			date="11/27/2024"
		/>
		<BlogCard href="/blog/5" src={sample} title="Initial Software Video Demo" date="11/15/2024" />
		<BlogCard href="/blog/4" src={sample} title="System Requirements II" date="10/16/2024" />
		<BlogCard href="/blog/3" src={sample} title="System Requirements I" date="09/27/2024" />
		<BlogCard href="/blog/2" src={mockupSample} title="The Project Plan" date="09/18/2024" />
		<BlogCard href="/blog/1" src={sample} title="Blog Website Launch" date="09/05/2024" />
	</div>
</section>
