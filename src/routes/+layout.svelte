<script>
	import '../app.css';
	import NavBar from './NavBar.svelte';
</script>

<NavBar />

<main class="pt-20 h-screen w-full">
	<slot />
</main>
