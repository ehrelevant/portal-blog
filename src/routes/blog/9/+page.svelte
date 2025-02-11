<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Software Maintenance Plan" date="02/11/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Software Maintenance Plan"
			src="https://drive.google.com/file/d/1znoiMsKHUGbiSM9ZIiBTFQsDCChOWeXW/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
