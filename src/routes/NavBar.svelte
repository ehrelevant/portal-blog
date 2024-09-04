<script>
	import NavBtn from './NavBtn.svelte';
</script>

<nav class="fixed top-0 w-full h-14 bg-black text-blue">
	<ul class="h-full flex flex-row ml-16">
		<li class="h-full"><NavBtn href="/">Home</NavBtn></li>
		<li class="h-full"><NavBtn href="/blog">Blog</NavBtn></li>
		<li class="h-full"><NavBtn href="/about">About</NavBtn></li>
	</ul>
</nav>
