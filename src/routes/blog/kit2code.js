export const k1h = `<svelte:head>
<title>My Great App</title>
<meta
    name="description"
    content="I'm still learning SvelteKit, but I've already built this website."
/>
</svelte:head>`;

export const k2j = `const url = "https://icanhazdadjoke.com/";
export async function get({ params }) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      'User-Agent': "Learning exercise, myname@xxxxxx.com",
    },
  });
  const joke = await response.json();
  if (joke) {
    return {
      body: { joke },
    };
  }
  return {
    status: 404,
  };
}`;

export const k3j = `<script>
export let joke;
</script>`;

export const k3h = `<h1>A Random Dad Joke</h1>
<p><i>This is About as bad as it gets.</i></p>
<p style="font-size:2em;">{joke.joke}</p>`;


export const k5j = `<script>
    const url = "https://icanhazdadjoke.com/search?term=about";
    import { onMount } from "svelte";
    let jokes = {
        results: [],
    };

    onMount(async () => {
        const response = await fetch(url, {
            headers: {
            Accept: "application/json",
            "User-Agent": "Learning exercise, myname@xxxxxx.com",
            },
        });
        jokes = await response.json();
    });
</script>`;

export const k5h=`<h1>A Random Dad Joke</h1>
<p><i>This is About as bad as it gets.</i></p>
{#each jokes.results as joke}
    <p style="font-size:1.4em;">{joke.joke}</p>
{/each}`;

