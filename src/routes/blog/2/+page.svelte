<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="The (Project) Plan" date="09/18/2024">
	<p class="text-lg text-justify">
		Hey, everyone! Things are going well underway with the project as our project plan has reached
		its completion. Anyhow, here's the plan.
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Project Plan"
			src="https://drive.google.com/file/d/1-xTR8TypNFpTt9QxbWCi9Dlek4UR--kI/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
	<br />
	<p class="text-lg text-justify">
		Additionally, here's a picture of our agreement with our clients:
	</p>
	<img src={sample} alt="course agreement" class="max-w-full" />
	<br />
	<p class="text-lg text-justify">Well then, until next time!</p>
</BlogTemplate>
