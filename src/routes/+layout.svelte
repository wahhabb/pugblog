<script>
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
</script>


<Header />
<main>
	{@render children()}
</main>
