<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Weekly Blog 01" date="02/04/2024">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Weekly Blog 01"
			src="https://drive.google.com/file/d/11F5YuWigJYxN5sMwfstlHYxNk-wWnT3R/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
