export const k1h = `<h1>About My App</h1>
<p>This is a work in progress.</p>`;

export const k2h = `<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main>
    <slot />
</main>
`;

export const k2s = `<style >
:global(body) {
    margin: 1em 3em;
    background-color: antiquewhite;
}
nav {
    font-size: 1.5em;
    padding: 1em;
    background-color: tan;
}
nav a {
    padding-right: 3em;
}
</style>`;

export const k3h = `<script>
export let author;
</script>
<footer>
<p>Copyright &copy; { new Date().getFullYear() } 
    {#if (author > "")}  
        by { author }
    {/if} 
</p>
</footer>`;

export const k3s = `<style>
p {
    color: antiquewhite;
}
footer {
    background-color: darkblue;
    padding: 2em;
    text-align: center;
}
</style>`;

export const k4j = `<script>
    import Footer from '../components/Footer.svelte';
</script>
`;

export const k4h = `<Footer author="Wahhab Baldwin" />`;
