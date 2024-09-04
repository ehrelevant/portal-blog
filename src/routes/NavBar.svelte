<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Github from '$lib/icons/Github.svelte';
	import NavBtn from './NavBtn.svelte';
	import MobileNavBtn from './MobileNavBtn.svelte';
	import { quadInOut } from 'svelte/easing';
	import List from '$lib/icons/List.svelte';
	import XMark from '$lib/icons/XMark.svelte';

	let isMenuOpen = false;

	function openMenu() {
		isMenuOpen = true;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="fixed top-0 w-full h-20 hidden sm:flex flex-row justify-between bg-black text-blue">
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

<nav class="block sm:hidden">
	{#if isMenuOpen}
		<div class="z-50 fixed w-full h-screen bg-black/60" transition:fade={{ duration: 100 }}>
			<div
				class="w-full bg-black flex justify-center items-start"
				transition:fly={{ duration: 100, y: -500, easing: quadInOut }}
			>
				<button class="absolute top-4 right-4 hover:scale-105 transition-all" on:click={closeMenu}
					><XMark /></button
				>
				<ul class="flex flex-col w-full justify-center gap-2 m-4 mt-16">
					<li transition:fly={{ delay: 100, duration: 100, y: -500, easing: quadInOut }}>
						<MobileNavBtn href="/">Home</MobileNavBtn>
					</li>
					<li transition:fly={{ delay: 75, duration: 100, y: -500, easing: quadInOut }}>
						<MobileNavBtn href="/blog">Blog</MobileNavBtn>
					</li>
					<li transition:fly={{ delay: 50, duration: 100, y: -500, easing: quadInOut }}>
						<MobileNavBtn href="/about">About</MobileNavBtn>
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<button
			class="z-50 fixed top-4 right-4 hover:scale-105 transition-all"
			transition:fly={{ duration: 100, y: -500, easing: quadInOut }}
			on:click={openMenu}><List /></button
		>
	{/if}
</nav>
