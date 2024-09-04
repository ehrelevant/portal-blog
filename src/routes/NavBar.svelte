<script>
	import NavBtn from './NavBtn.svelte';
</script>

<nav class="sticky top-0 w-full bg-black text-blue">
	<ul class="flex flex-row ml-16">
		<li><NavBtn href="/">Home</NavBtn></li>
		<li><NavBtn href="/blog">Blog</NavBtn></li>
		<li><NavBtn href="/about">About</NavBtn></li>
	</ul>
</nav>
