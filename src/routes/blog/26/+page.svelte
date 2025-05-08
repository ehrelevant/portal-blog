<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Project Presentation Slides" date="05/08/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Project Presentation Slides"
			src="https://drive.google.com/file/d/1gmjydVZOePj0AVKoPZ7NlmhGh7jxej1C/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
