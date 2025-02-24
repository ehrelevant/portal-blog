<script lang="ts">
	import BlogTemplate from '$lib/components/BlogTemplate.svelte';
	import sample from '$lib/images/sample.webp';
</script>

<BlogTemplate src={sample} title="Software Release v1" date="02/14/2025">
	<p class="text-lg text-justify">
		Today, we are glad to announce the completion and deployment of the first prototype of <em
			>Portalis: the CS195 portal</em
		>!
		<br /><br />
		To access the website, simply click this link:
		<a href="http://128.199.68.87/" class="text-hover-blue underline">http://128.199.68.87/</a>
		(currently no domain name)
		<br /><br />
		Note that the website is currently in "testing" mode as it would be impossible to demo it otherwise.
		If you would like to access the website try using one of the following test emails: student@example.com,
		supervisor@example.com, faculty@example.com, and admin@example.com. For our sake, please don't mess
		around with the database too much even if it's public.
		<br /><br />
		While, there's still quite a number of issues and missing features on the website at the moment (mainly
		the csv import/export), we'll make sure that we're able to get these issues ironed out by the next
		release!
	</p>
</BlogTemplate>
