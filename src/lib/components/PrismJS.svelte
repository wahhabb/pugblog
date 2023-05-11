<script>
	import { onMount } from 'svelte';

	export let language;
	export let code;

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/prism.js';
		document.head.append(script);

		script.onload = function () {
			Prism.highlightAll();
		};
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/prism-1.css" />
	<style>
		pre[class*='language-'] {
			margin-bottom: 0;

			border-radius: 0em;
		}
		pre[class*='language-'] + pre[class*='language-'] {
			margin: 0;
		}
		pre[class*='language-'] + p {
			padding-top: 1em;
		}
	</style>
</svelte:head>

<pre><code class="language-{language}">{code}</code></pre>
