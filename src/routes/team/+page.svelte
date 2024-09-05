<script>
	import Edzo from '$lib/images/team/Edzo.webp';
	import Ehren from '$lib/images/team/Ehren.webp';
	import Yuwen from '$lib/images/team/Yuwen.webp';
	import Lawrence from '$lib/images/team/Lawrence.webp';
	import TeamCard from './TeamCard.svelte';
</script>

<section class="grow h-full flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-4 px-6">
	<div class="relative hidden lg:flex justify-center min-h-full w-16 shrink-0">
		<div class="min-h-full border-l-4 border-black" />
	</div>
	<div
		class="my-8 w-full min-h-full grow grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-6 gap-y-4"
	>
		<TeamCard src={Edzo} name="Edzo Acyatan" />
		<TeamCard src={Lawrence} name="Lawrence Bermudez" />
		<TeamCard src={Ehren} name="Ehren Castillo" />
		<TeamCard src={Yuwen} name="Yuwen Saavedra" />
	</div>
</section>
