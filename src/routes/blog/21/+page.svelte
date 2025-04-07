<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Weekly Blog 10" date="04/08/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Weekly Blog 10"
			src="https://drive.google.com/file/d/11MO655WjDmt2JJxo_-wRmd2nfPFvpqln/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
