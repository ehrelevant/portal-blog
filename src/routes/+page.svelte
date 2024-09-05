<script lang="ts">
	import SpanGt from '$lib/components/SpanGt.svelte';
	import Pointer from '$lib/icons/Pointer.svelte';
	import HomeBtn from './HomeBtn.svelte';
</script>

<section class="grow h-full flex flex-col sm:flex-row justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
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
