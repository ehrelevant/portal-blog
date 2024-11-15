<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Initial Software Video Demo" date="11/15/2024">
	<p class="text-lg text-justify">
		Below is a short video demo showcasing our current progress on <em>Portalis</em>, the CS 195
		Portal. Do note that whatever is shown in the video demo mostly pertains to visible aspects of
		the portal. Much work has also been done on the backend of the application that was not shown to
		its fullest capacity in the demo. This includes actions whose effects are only visible on the
		database and not on the frontend as of yet.
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Initial Software Video Demo"
			src="https://drive.google.com/file/d/1pkUGx3eli_ugsCCCyFUvR2KFfcEriEAo/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
