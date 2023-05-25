<script>
	import { HtmlTag } from  'svelte/internal';
    import Prism from '$lib/components/PrismJS.svelte';
	import { k1h, k2j, k3j, k3h, k5j, k5h  } from './kit2code.js';
</script>

<svelte:head>
	<title>SvelteKit 2&mdash;Going Deeper</title>
	<meta name="description" content="Step two of an Introduction to SvelteKit. We will learn about endpoints." />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  SvelteKit 2&mdash;Further Adventures with SvelteKit
img.flt_r(src="/svelte-kit-machine.jpg"  alt="SvelteKit Machine") 
p. 
    <i>This post continues from <a href="kit1">SvelteKit 1</a>. If you want to 
    code along, copy the code from that post.</i>
p. 
    At this point, we have a simple, two-page website. Let’s take it just a bit further.
p.
    First of all, we would like each of our pages to have an appropriate title and a description
    for SEO. If you look at the file app.html, you will see there is an entry, 
    !{cd}%svelte.head%!{ecd} in
    the head section. We can insert code there by adding these lines to the top of 
    +page.svelte, our home page:
<Prism language="html" code={k1h}  />
p.
    If we had a !{cd}&lt;script>!{ecd} Section on our page, we might place these lines after 
    the !{cd}&lt;/script>!{ecd}  tag.
p.
    Do the same thing on the About page, but make the title, "About My Great App", and the 
    description content something you like, such as "About Building SvelteKit Skills."
h2  Getting External Data 
p.
    So far, our simple two-page website is totally static&mdash;that is, every viewer who sees it, 
    and every time it is seen, exactly the same content displays, and all this content is
    contained within the site itself. But generally, 
    to create a useful web app,
    we need the ability either to bring in data from someplace, or to collect and save data 
    someplace, or both. 
p.
    There are many ways in which data might be acquired or saved. The data might be saved as a
    .json file as part of your site, in which case the endpoint would simply fetch that file. 
    You might access a database, either through direct database calls (my next blog post will
    demonstrate that) or by making RESTful calls. Or you might call a web api provided by 
    someone. We will use this last approach in this post.
p.
    The simplest case is if we need some external data when a page is first loaded, but don't 
    need to retrieve it over again during that session. This can be handled by using Svelte's
    onMount function, which is the commonest of Svelte's lifecycle functions. 
p.
    Let's add a few dad jokes to our About page. To do this, we will call on a simple web api. 
    As is common, this web api will 
    return data to us in JSON format, which we will then display on the page. To learn 
    about this simple api, visit <a href='https://icanhazdadjoke.com/api'>its 
    documentation</a>.
p.
    From that documentation, we see that we can search for dad jokes containing a string, and
    see the format of the results. So modify your about page to have the following code:
<Prism language="javascript" code={k5j}  />
<Prism language="html" code={k5h}  />
p.
    This will put a list of 20 dad jokes on our page, all of which contain the string "about".
    The onMount function is run when the page has been mounted in the DOM. This means that
    the data is not loaded during server-side rendering, but lazy loaded. We see that 
    it calls our api, and
    places the return data in the jokes variable. Within the HTML,
    the !{cd}&lbrace;#each}!{ecd} statement, terminated by !{cd}&lbrace;/each}!{ecd},
    loops through the array in !{cd}jokes.results!{ecd} and outputs the HTML between the 
    opening and closing !{cd}each!{ecd} statements for each item in that array.
p.
    But more commonly when we are retrieving data we do not want to get the same results every 
    time we visit the page. We need our data to be gotten dynamically. 
    In SvelteKit, these situations are handled by  <i>endpoints</i>. 
    An endpoint is just a JavaScript (or TypeScript) file with a conventional .js (or .ts) suffix.
    These files will be run from the server, while a .svelte file might be run either from the
    server or from the client.
p. 
    There are two ways of using endpoints in SvelteKit. In one case, the endpoint needs to be
    called each time the page is visited, and so it is directly associated with the page. This
    is done by naming it +page.js (or +page.ts).
p.
    The other approach is if the endpoint needs to be called from multiple places, or be 
    called on request from a page (say, when a button is clicked). 
p.
    Let's change the About page to show a random dad joke each time it is visited. 
    In your src/about directory, create a new file called +page.js, and put 
    the following code in it:
<Prism language="javascript" code={k2j}  />
p.
    This is our endpoint. 
    The load function we are exporting here can be run either on the server or in 
    the browser. To force it to run on the server only, the file should be named
    +page.server.js. The data we are exporting will be brought into the +page.svelte
    page. <i>Note:</i> As a courtesy to the api developer, please update the
    User-Agent with a website or email address per the documentation.
p.
    Now we need to modify the +page.svelte page to accept the return
    from this function. So replace the contents of our about.svelte with the
    following code:
<Prism language="javascript" code={k3j}  />
<Prism language="html" code={k3h}  />

p.
    At this point, navigating to your About page should display a random dad joke each time you navigate there.
p.
    There will be a slight lag when going to the About page as we wait for the api call
    to return. One thing we can do to speed this
    up is to prefetch the page whenever the user hovers over the menu item (or when it is 
    clicked, without waiting for the click event). This is easily done by changing the link
    in +layout.svelte to 
    !{cd}&lt;a&nbsp;sveltekit:prefetch&nbsp;href="/about">About&lt;/a>!{ecd}
    Voila! This likely saves a couple tenths of a second in load time, enough to give 
    the impression of a snappy response rather than a slow one.
p.
    You might notice that if you refresh the About page, the joke updates twice in rapid
    succession. That is an artifact of the development environment. If you want to see it
    working properly, you can run it in preview mode. First, install the Node adapter. 
    From your command line, enter  !{cd}npm i -D @sveltejs/adapter-node !{ecd}
p.
    Next, update the line in svelte.config.js that begins  !{cd}import adapter !{ecd} to 
    say  !{cd}import adapter from '@sveltejs/adapter-node';!{ecd}
p.
    Now on the command line, enter !{cd}npm run preview!{ecd} and you will see the issue
    has been resolved.
p.
    We haven't yet covered the scenario of an endpoint that can be called at any time. To
    learn that, check out my <a href="/blog/kit3">next post</a> on using MySQL with SvelteKit.

</template>