<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Weekly Blog 15" date="05/13/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Weekly Blog 15"
			src="https://drive.google.com/file/d/1v4ZrapT3NEP8-8zvyVlrLyGRBZRZZ9lC/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
