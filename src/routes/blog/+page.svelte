<svelte:head>
	<title>Blog</title>
	<meta
		name="description"
		content="The blog for DeepWebWorks.com. Svelte and SvelteKit are
            the primary focus of this blog, although there may be
            occasional entries of interest on other topics."
	/>
</svelte:head>

<template lang="pug">
	h1  Blog
	p. 
		This blog was first posted in May, 2022, and was updated in 2023 with the 
		new routing and other changes to SvelteKit that came with SvelteKit 1.0. Check back for new posts!
	a.grid(href="/blog/calc")
		div
			h2 	Build a Calculator Component in Svelte (that you can use in your current websites)
			p.
				There&rsquo;s no need to go all or nothing with Svelte. You can build a few components 
				in it and use them in your existing website. Here, we’ll build a calculator app 
				in Svelte 
	a.grid(href="/blog/embed")
		div
			h2 	Embed Our Svelte Calculator Component into Your Existing Website
			p. 
				Or start off with a simple example page...

	img.flt_r(src="/svelte-kit-machine.jpg"  alt="SvelteKit machine")

	a.grid(href="/blog/kit1")
		div
			h2 	SvelteKit 1—Getting Started with SvelteKit
			p. 
				This post will give you a basic introduction to SvelteKit and walk you through building a basic SvelteKit website. ...

	a.grid(href="/blog/kit2")
		div
			h2 	SvelteKit 2—Further Adventures with SvelteKit
			p. 
				This post continues from SvelteKit 1. We learn about getting data.

	h2  Learn how to...
	p  <a href="/blog/kit3"> build a SvelteKit site that uses a MySQL database</a>.
	h2  Learn some ways of...
	p  <a href="/blog/kit4">hosting SvelteKit apps on the web</a>—even free!
	h2  <span class="red"><b>New!</b></span> Learn how to... 
	p  <a href="/blog/blog/blog1">build a blog with SvelteKit</a> (Part 1—more to come).

</template>

<style>
	img.g2 {
		max-height: 12em;
		justify-self: end;
	}
	.grid {
		display: grid;
		grid-template-columns: 3fr 1fr;
	}
	a:hover {
		text-decoration:underline;
		color: var(--link);
	}
	a div p {
		margin-bottom: 0;
	}
</style>
