<script>
	import { fly } from 'svelte/transition';
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = $state(colors[0]);
	let visible = $state(false);
</script>

<h1 style="color: {selected}">Pick a color</h1>

<div>
	{#each colors as color}
	<button
		style="background: {color}"
		aria-label="{color}"
		aria-current={selected === color}
		onclick={() => selected = color}
	></button>
	{/each}
</div>
{#if selected === 'yellow'}
	<h2 transition:fly={{y:200, duration: 1000}}>You picked Yellow!</h2>
{/if}

<style>
	h1 {
		font-size: 2rem;
		font-weight: 700;
		transition: color 1.8s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.4));
		transition: all 0.1s;
		color: black;
		font-weight: 700;
		font-size: 2rem;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>