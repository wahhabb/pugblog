<script>
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
	import '@fontsource-variable/merriweather/wght.css';
	</script>


<Header />
<main>
	{@render children()}
</main>
