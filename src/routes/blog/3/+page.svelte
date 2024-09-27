<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="System Requirements I" date="09/27/2024">
	<p class="text-lg text-justify">
		The first part of our system requirements document is now complete! You can check it out below.
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="System Requirements Document (Part 1)"
			src="https://drive.google.com/file/d/1HoQNgDN_JHw_GY5PcY-iYo0KQwhQ52On/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
	<p class="text-lg text-justify">Next up, part 2!</p>
</BlogTemplate>
