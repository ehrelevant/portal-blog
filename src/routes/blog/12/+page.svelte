<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Project Evaluation 1" date="02/24/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Project Evaluation 1"
			src="https://drive.google.com/file/d/1ldqeGBF-ehk8JhREcoU277IuK0BQ2CWC/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
