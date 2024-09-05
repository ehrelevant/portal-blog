<script lang="ts">
	import src from '$lib/images/sample.png';
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div class="relative bg-white w-full my-8 p-4 sm:p-8 rounded-xl shadow-solid flex flex-col gap-2">
		<img {src} alt="CS 195 portal" class="w-full aspect-[4/1]" />
		<div>
			<h1 class="text-4xl md:text-5xl">CS 195 Portal</h1>
		</div>
		<p class="text-lg text-justify">
			<strong>CS 195</strong> is a 3-unit Midyear course taken by students of the University of the Philippines
			Diliman's Department of Computer Science, often at their 3rd Year. In this subject, students apply
			the knowledge they have gained throughout their course as interns in various companies and institutions.
			The CS 195 Portal is a project that aims to assist in the management of this course for all of
			its stakeholders. Through this, we hope to improve the quality of the program and the success of
			the students.
		</p>
	</div>
</section>
