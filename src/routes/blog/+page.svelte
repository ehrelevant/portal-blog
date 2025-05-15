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
		<BlogCard href="/blog/28" src={sample} title="Documentation" date="05/15/2025" />
		<BlogCard href="/blog/27" src={sample} title="Weekly Blog 15" date="05/13/2025" />
		<BlogCard href="/blog/26" src={sample} title="Project Presentation Slides" date="05/08/2025" />
		<BlogCard href="/blog/25" src={sample} title="Weekly Blog 14" date="05/06/2025" />
		<BlogCard href="/blog/24" src={sample} title="Weekly Blog 13" date="04/29/2025" />
		<BlogCard href="/blog/23" src={sample} title="Weekly Blog 12" date="04/22/2025" />
		<BlogCard href="/blog/22" src={sample} title="Weekly Blog 11" date="04/15/2025" />
		<BlogCard href="/blog/21" src={sample} title="Weekly Blog 10" date="04/08/2025" />
		<BlogCard
			href="/blog/20"
			src={sample}
			title="Software Testing Report (NISMED)"
			date="04/03/2025"
		/>
		<BlogCard href="/blog/19" src={sample} title="Weekly Blog 09" date="04/01/2025" />
		<BlogCard href="/blog/18" src={sample} title="Weekly Blog 08" date="03/25/2025" />
		<BlogCard href="/blog/17" src={sample} title="Weekly Blog 07" date="03/18/2025" />
		<BlogCard href="/blog/16" src={sample} title="Weekly Blog 06" date="03/11/2025" />
		<BlogCard
			href="/blog/15"
			src={sample}
			title="Software Testing Report (GVEN)"
			date="03/06/2025"
		/>
		<BlogCard href="/blog/14" src={sample} title="Weekly Blog 05" date="03/04/2025" />
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
