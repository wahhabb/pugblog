<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/app.css" />
</svelte:head>
<Header />
<main>
	<slot />
</main>
