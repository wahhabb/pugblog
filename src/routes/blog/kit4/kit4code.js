export const k1s = `:global(body) {
   background-color: blanchedalmond;
}`;

export const k2h = `<header>
<h1>
    State Data from MySQL
</h1>
</header>
<slot />

<style>
header {
    background-color: aqua;
    padding: 1.5em 0;
}
header h1 {
    text-align: center;
}

</style>`;

export const k3j = `<script>
export let data;
</script>`;

export const k3h = `<h1>Get State Information</h1>
<p>Click state name to see data at bottom.</p>
{#each data.data as state}
    <button>{state.state}</button>
{/each}`;

export const k3s = `<style>
button, p {
    padding: .5em .8em;
    margin: .5em;
    font-size: 110%;
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
      //     console.log("Got this far!!");
      //     console.log(rows);
      return rows;
    });

  return json(results);
}
`;

export const k5j = `let res;
let statedata = '';
async function xget(st) {
      const response = await fetch("/api/getstate", {
          method: 'POST',
          body: JSON.stringify({st}),
          headers: {
              'content-type': 'application/json'
          }
      
      });

      res =  await response.json();
      statedata = res[0];
}`;

export const k5h = `{#each data.data as state}
    <button on:click={() => xget(state.state)}>{state.state}</button>
{/each}
{#if statedata}
    <p>The capital of {statedata.state} is {statedata.capital}!</p>
    <p>Its abbreviation is {statedata.abbr}.</p>
    <p>It is in the {statedata.region} region.</p>
    <p>Its state bird is the {statedata.bird}.</p>
{/if}`;
