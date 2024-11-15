<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Initial Software Video Demo" date="11/15/2024">
	<p class="text-lg text-justify">
		Below is a short video demo showcasing our current progress on "Portalis," CS195 portal website.
		Note that what is covered in the video demo primarily pertains to work that is already visible
		on the website. Much work has been done on the backend and database of the application that was
		not fully shown in the video. This includes some actions whose effects are only visible on the
		database, but not on the frontend as of yet.
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
