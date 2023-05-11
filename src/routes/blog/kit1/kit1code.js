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

export const k4j = `import { json } from "@sveltejs/kit";
import { mysqlconnFn } from "$lib/db/mysql";

export async function POST({ request }) {
  const { st } = await request.json();
  let mysqlconn = await mysqlconnFn();
  let results = await mysqlconn
    .query("SELECT * FROM states where state = '" + st + "'")
    .then(function ([rows, fields]) {
      //     console.log(rows);
      return rows;
    });

  return json(results);
}
`;

export const k4h = `<Footer author="Wahhab Baldwin" />`;
