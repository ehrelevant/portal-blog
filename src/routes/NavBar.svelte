<script>
	import Github from '$lib/icons/Github.svelte';
	import NavBtn from './NavBtn.svelte';
</script>

<nav class="fixed top-0 w-full h-14 flex flex-row justify-between bg-black text-blue">
	<ul class="h-full flex flex-row ml-16">
		<li class="h-full"><NavBtn href="/">Home</NavBtn></li>
		<li class="h-full"><NavBtn href="/blog">Blog</NavBtn></li>
		<li class="h-full"><NavBtn href="/about">About</NavBtn></li>
	</ul>
	<div class="h-full flex flex-row mr-8">
		<a
			href="https://github.com/ehrelevant/cs19x-blog"
			target="_blank"
			class="h-full aspect-square flex justify-center items-center hover:scale-105 transition-all"
			><Github /></a
		>
	</div>
</nav>
