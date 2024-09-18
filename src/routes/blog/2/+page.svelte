<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import mockupSample from '$lib/images/blog/mockupSample.png';
</script>

<BlogTemplate src={mockupSample} title="The Project Plan" date="09/18/2024">
	<p class="text-lg text-justify">
		Hey, everyone! Things are going well underway with the project as our project plan has reached
		its completion. Anyhow, here's the plan.
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Project Plan"
			src="https://drive.google.com/file/d/1n7IgTxVlJf0APgBHFOJpssbV_UjhtrBp/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
	<br />
	<p class="text-lg text-justify">Well then, until next time!</p>
</BlogTemplate>
