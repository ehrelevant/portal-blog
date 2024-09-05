<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.png';
</script>

<BlogTemplate src={sample} title="Blog Website Launch" date="09/05/2024">
	<p class="text-lg text-justify">
		Today marks the launch of this blog website! Here, we will discuss our progress on our project,
		the CS 195 Portal. More information on the project and our plans will be posted in the near
		future, so stay tuned! At the moment, this blog is still a work-in-progress and will need to be
		continuously improved over time, so don't mind the changes that may happen in this site.
		Anyways, hope you enjoy our journey to completing this project!
	</p>
</BlogTemplate>
