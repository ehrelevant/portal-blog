<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="System Requirements II" date="10/16/2024">
	<p class="text-lg text-justify">
		The second part of our system requirements document is now complete!
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="System Requirements Document (Part II)"
			src="https://drive.google.com/file/d/1_EGJLm8B2W7GDI9JgtL84tFFjbCGBcLv/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
	<p class="text-lg text-justify">Now, let's get this project started!</p>
</BlogTemplate>
