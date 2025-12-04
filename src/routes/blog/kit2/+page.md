<svelte:head>
	<title>SvelteKit 2&mdash;Going Deeper</title>
	<meta name="description" content="Step two of an Introduction to SvelteKit. We will learn about endpoints." />
</svelte:head>

# SvelteKit 2—Further Adventures with SvelteKit

<img class="flt_r" src="/svelte-kit-machine.jpg" style="width:25%" alt="SvelteKit Machine" />

*This post continues from [SvelteKit 1](kit1). If you want to code along, copy the code from that post.*

At this point, we have a simple, two-page website. Let’s take it just a bit further.

First of all, we would like each of our pages to have an appropriate title and a description for SEO. If you look at the file `app.html`, you will see there is an entry, `%svelte.head%` in the `<head>` section. We can insert code there by adding these lines to the top of `+page.svelte` on our home page:

```html
<svelte:head>
<title>My Great App</title>
<meta
    name="description"
    content="I'm still learning SvelteKit, but I've already built this website."
/>
</svelte:head>
```

If we had a `<script>` Section on our page, we might place these lines after the `</script>` tag.

Do the same thing on the About page, but make the title, “About My Great App”, and the description content something you like, such as “About Building SvelteKit Skills.”

## Getting External Data

So far, our simple two-page website is totally static—that is, every viewer who sees it, and every time it is seen, exactly the same content displays, and all this content is contained within the site itself. But generally, to create a useful web app, we need the ability either to bring in data from someplace, or to collect and save data someplace, or both.

There are many ways in which data might be acquired or saved. The data might be saved as a .json file as part of your site, in which case the endpoint would simply fetch that file. You might access a database, either through direct database calls (my next blog post will demonstrate that) or by making RESTful calls. Or you might call a web api provided by someone. We will use this last approach in this post.

The simplest case is if we need some external data when a page is first loaded, but don’t need to retrieve it over again during that session. This can be handled by using Svelte’s `onMount` function, which is the commonest of Svelte’s lifecycle functions.

Let’s add a few dad jokes to our About page. To do this, we will call on a simple web api. As is common, this web api will return data to us in JSON format, which we will then display on the page. To learn about this simple api, visit its documentation.

From that documentation, we see that we can search for dad jokes containing a string, and see the format of the results. So replace the code on your about page with the following:

```js
<script>
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
</script>
```

```html
<h1>Dad Jokes Containing the Word "About"</h1>
<p><i>This is <b>About</b> as bad as it gets.</i></p>
{#each jokes.results as joke}
    <p style="font-size:1.4em;">{joke.joke}</p>
{/each}
```

This will put a list of 20 dad jokes on our page, all of which contain the string "about". The `onMount` function is run when the page has been mounted in the DOM. This means that the data is not loaded during server-side rendering, but lazy loaded. We see that it calls our api, and places the return data in the `jokes` variable. Within the HTML, the `{#each}` statement, terminated by `{/each}`, loops through the array in `jokes.results` and outputs the HTML between the opening and closing `each` statements for each item in that array.

But more commonly, when we are retrieving data we do not want to get the same results every time we visit the page. We need our data to be gotten dynamically. In SvelteKit, these situations are handled by *endpoints*. An endpoint is just a JavaScript (or TypeScript) file with a conventional .js (or .ts) suffix. These files will be run from the server, while a .svelte file might be run either from the server or from the client.

There are two ways of using endpoints in SvelteKit. In one case, the endpoint needs to be called each time the page is visited, and so it is directly associated with the page. This is done by naming it `+page.js` (or `+page.ts`).

The other approach is if the endpoint needs to be called from multiple places, or be called on request from a page (say, when a button is clicked).

Let’s change the About page to show a random dad joke each time it is visited. In your `src/about` directory, create a new file called `+page.js`, and put the following code in it:

```js
const url = "https://icanhazdadjoke.com/";
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
        post: {
            joke,
        }
    };
  }
  return {
    status: 404,
  };
}
```

This is our endpoint. The load function we are exporting here can be run either on the server or in the browser. To force it to run on the server only, the file should be named `+page.server.js`. The data we are exporting will be brought into the `+page.svelte` page. Note: As a courtesy to the api developer, please update the User-Agent with a website or email address per the documentation.

Now we need to modify the `+page.svelte` page to accept the return from this function. So replace the contents of our `about.svelte` with the following code:

```js
<script>
    let { data } = $props();
</script>
```
```html
<h1>A Random Dad Joke</h1>
<p><i>This is <b>About</b> as bad as it gets.</i></p>
<p style="font-size:1.6em;">{data.post.joke.joke}</p>
```

At this point, navigating to your About page should display a random dad joke each time you navigate there.

There will be a slight lag when going to the About page as we wait for the api call to return. One thing we can do to speed this up is to prefetch the page whenever the user hovers over the menu item (or when it is clicked, without waiting for the click event). This is easily done by changing the link in `+layout.svelte` to 

`<a sveltekit:prefetch href="/about">About</a>` 

Voila! With a live site, this likely saves a couple tenths of a second in load time, enough to give the impression of a snappy response rather than a slow one.

You might notice that if you refresh the About page, the joke updates twice in rapid succession. That is an artifact of the development environment. If you want to see it working properly, you can run it in preview mode. First, install the Node adapter. From your command line, enter `npm i -D @sveltejs/adapter-node`

Next, update the line in `svelte.config.js` that begins `import adapter` to say `import adapter from '@sveltejs/adapter-node';`

Now on the command line, enter `npm run preview` and you will see the issue has been resolved.

We haven’t yet covered the scenario of an endpoint that can be called at any time. To learn that, check out the [next post](kit3) on using MySQL with SvelteKit.

[Next ->](kit3)