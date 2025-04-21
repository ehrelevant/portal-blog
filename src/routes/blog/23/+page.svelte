<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Weekly Blog 12" date="04/22/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Weekly Blog 12"
			src="https://drive.google.com/file/d/10Ohouh1AXlgNI-SME4pfj7nEc_iOQ5uS/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
