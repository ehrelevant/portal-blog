<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Weekly Blog 02" date="02/11/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Weekly Blog 02"
			src="https://drive.google.com/file/d/1bYkjmqfVyqB1N01wfDg2xUiCRVu0gcVX/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
