<script lang="ts">
	import { base } from '$app/paths';
	import SpanGt from '$lib/components/SpanGt.svelte';
	import Pointer from '$lib/icons/Pointer.svelte';
	import HomeBtn from './HomeBtn.svelte';
</script>

<section class="grow h-full flex flex-col md:flex-row justify-center gap-12 md:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-6 bg-blue">
			<Pointer />
		</div>
	</div>
	<div class="flex flex-col justify-center gap-2">
		<h2 class="text-5xl sm:text-6xl md:text-7xl">CS 191/192 Blog</h2>
		<h1 class="text-xl sm:text-2xl md:text-3xl">
			Get updates on the <a
				href="{base}/about"
				class="italic underline hover:text-hover-blue transition-colors">CS 195 Portal</a
			>
		</h1>
	</div>
	<div class="md:grow flex justify-end items-center">
		<div class="w-full flex flex-row md:flex-col md:basis-64 min-w-48 gap-4 lg:mr-12 text-blue">
			<HomeBtn href="/blog">
				<div>
					<SpanGt delayClass="delay-0" /><SpanGt delayClass="delay-75" /><SpanGt
						delayClass="delay-150"
					/>
				</div>
				Start Browsing
			</HomeBtn>
			<HomeBtn href="/about">
				<div>
					<SpanGt delayClass="delay-0" /><SpanGt delayClass="delay-75" /><SpanGt
						delayClass="delay-150"
					/>
				</div>
				View Project
			</HomeBtn>
		</div>
	</div>
</section>
