<script>
	import '../app.css';
	import NavBar from './NavBar.svelte';
</script>

<NavBar />

<main class="pt-12 sm:pt-20 min-h-screen flex flex-col w-full">
	<slot />
</main>
