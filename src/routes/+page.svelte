<script lang="ts">
	import { base } from '$app/paths';
	import Pointer from '$lib/icons/Pointer.svelte';
</script>

<section class="h-full flex flex-col sm:flex-row justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center h-full w-32">
		<div class="h-full border-l-4 border-black" />
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-6 bg-blue">
			<Pointer />
		</div>
	</div>
	<div class="flex flex-col justify-center gap-2">
		<h1 class="text-7xl md:text-8xl">
			Power<br class="sm:hidden" /><span class="italic">Chell</span>
		</h1>
		<h2 class="text-3xl md:text-5xl">CS191/192 Group Blog</h2>
	</div>
	<div class="w-full sm:grow flex justify-end items-center">
		<div class="w-full flex flex-row sm:flex-col sm:basis-64 min-w-48 gap-4 lg:mr-12 text-blue">
			<a
				href="{base}/blog"
				class="bg-black flex justify-center items-center text-center grow min-h-32 text-lg sm:text-2xl rounded-lg hover:scale-105 transition-all"
			>
				&gt;&gt;&gt; <br />
				Start Browsing
			</a>
			<a
				href="{base}/about"
				class="bg-black flex justify-center items-center text-center grow min-h-32 text-lg sm:text-2xl rounded-lg hover:scale-105 transition-all"
			>
				&gt;&gt;&gt; <br />
				View Project
			</a>
		</div>
	</div>
</section>
