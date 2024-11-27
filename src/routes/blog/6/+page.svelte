<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Software Testing Report (TypeKindly)" date="11/27/2024">
	<p class="text-lg text-justify">
		Today, we performed software tests on the project of our colleagues over at TypeKindly. The
		results of these tests are reported below.
	</p>
	<div class="w-full max-w-full flex justify-center">
		<iframe
			title="Software Testing Report (TypeKindly)"
			src="https://drive.google.com/file/d/1mwUf1g_K9TflwA9UErELsSd3HER2FfxJ/preview"
			width="1800"
			height="640"
			allow="autoplay"
			class="max-w-full"
		></iframe>
	</div>
</BlogTemplate>
