<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Documentation" date="05/15/2025">
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Documentation"
			src="https://drive.google.com/file/d/1W1m8aoBdO7uAci6YYXGjbIUFiqo1yrew/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
