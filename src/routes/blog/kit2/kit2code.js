export const k1h = `<svelte:head>
<title>My Great App</title>
<meta
    name="description"
    content="I'm still learning SvelteKit, but I've already built this website."
/>
</svelte:head>`;

export const k2j = `const url = "https://icanhazdadjoke.com/";
export async function load() {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Learning exercise, wahhabb@gmail.com", // Use your email
    },
  });
  const joke = await response.json();
  if (joke) {
    return {
      joke,
    };
  }
  return {
    status: 404,
  };
}
`;

export const k3j = `<script>
export let data;
</script>`;

export const k3h = `<h1>A Random Dad Joke</h1>
<p><i>This is <b>About</b> as bad as it gets.</i></p>
<p style="font-size:1.6em;">{data.joke.joke}</p>`;


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
            "User-Agent": "Learning exercise, myname@xxxxxx.com", // replace with your email
            },
        });
        jokes = await response.json();
    });
</script>`;

export const k5h=`<h1>Dad Jokes Containing the Word "About"</h1>
<p><i>This is <b>About</b> as bad as it gets.</i></p>
{#each jokes.results as joke}
    <p style="font-size:1.4em;">{joke.joke}</p>
{/each}`;

