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
			h2 	Build a Calculator Component in Svelte
			h3 	And use it in your current website
			p.
				There&rsquo;s no need to go all or nothing with Svelte. You can build a few components 
				in it and use them in your existing website. Here, we’ll build a calculator app 
				in Svelte and deploy it in a basic HTML website. ...
		img.g2(src="calc.jpg" alt="Calculator")
	a.grid(href="/blog/embed")
		div
			h2 	Embed Our Svelte Calculator Component into Your Existing Website
			p. 
				If you have followed the instruction in my previous post, you now have five tabs 
				in Svelte’s REPL labeled App.svelte, Calculator.svelte, Calcbtn.svelte, 
				Display.svelte, and stores.js. (If you do not have these, you can pull them 
				from my Github repository in the svelte-app directory). ...
		img.g2.bdr_1(src="/demo-thumb.jpg"  alt="demo page of embedded components")

	a.grid(href="/blog/kit1")
		div
			h2 	SvelteKit 1—Getting Started with SvelteKit
			p. 
				This post will give you a basic introduction to SvelteKit and walk you through building a basic SvelteKit website. ...
		img.g2(src="/svelte-kit-machine.jpg"  alt="SvelteKit machine")

	a.grid(href="/blog/kit2")
		div
			h2 	SvelteKit 2—Further Adventures with SvelteKit
			p. 
				This post continues from SvelteKit 1. If you want to code along, copy the code from that post.
				At this point, we have a simple, two-page website. Let’s take it just a bit further. ...
		img.g2(src="/svelte-kit-machine.jpg"  alt="SvelteKit machine")

	h2 	Coming Soon!
	h3 	Use SvelteKit with MySQL using Prisma 
	h3 	How This Blog Was Built

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
