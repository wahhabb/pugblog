<svelte:head>
	<title>Deep Web Works--Svelte/SvelteKit Blog</title>
	<meta
		name="description"
		content="Wahhab Baldwin's blog walks programmers through learning features of Svelte/SvelteKit."
	/>
</svelte:head>


<template lang="pug">
h1 Svelte/SvelteKit 
img.flt_r(src="/Wahhab-Baldwin.jpg" alt="Wahhab Baldwin")
p  
  |  Hi! Want to learn more about Svelte and SvelteKit? So do I! 
  |  I’m Wahhab Baldwin, retired founder of Deep Web Works. 
  |  I’ve decided to repurpose my website to share tutorials based on my adventures with 
  |  Svelte and SvelteKit. I hope you’ll find it useful, and I welcome your 
  a(href="/contact") feedback
  | . 


h2  So What Are Svelte and SvelteKit?

img.flt_l(src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" height=90 alt="Svelte Logo")

p.
  As you likely know, <a href="https://svelte.dev/">Svelte</a> is a framework for building 
  user interfaces. JavaScript based,
  it is compared to React and Vue. Unlike these, however, it is a compiler, does not use a 
  shadow DOM or link in a run-time library, making it small and fast. It is also much easier
  to learn. It lets you write clear and compact components that are highly efficient.

p. 
  <a href="https://kit.svelte.dev/">SvelteKit</a> is a framework for building web 
  applications that provides routing, client-side and/or server-side rendering, code-splitting, 
  and more, using Svelte. 
  It is comparable to Next in React or Nuxt in Vue. It makes it quick and easy to 
  develop sites (like this one!) with a great developer experience. Version 2.0 was released
  in December, 2022, and Svelte 5.0 was released in October, 2023.
  It is used in production in sites 
  like nytimes.com. In 2024, 
  <a href="https://survey.stackoverflow.co/2024/">Stack Overflow</a> found that 73% of developers
  that used it want to keep working with Svelte and SvelteKit.
  In fact, they used it themselves for building their 2024 Developer Survey results site!
  I am convinced that now that SvelteKit is maturing, Svelte and SvelteKit will continue to grow and 
  become a major force in web development.
  In any event, it’s fun learning and using them!

h2 Let’s Dive In!

p. 
  To use these tutorials, you should be familiar with web development and JavaScript, and
  have <a href="https://nodejs.dev/download/">Node.js and npm</a> installed on your 
  computer to follow my code examples.

p.
  Svelte has a <a href="https://svelte.dev/tutorial/svelte/welcome-to-svelte">great tutorial</a>, 
  but let me give you a <a href="/blog/sv-1">quick walkthrough</a> of some of its key features.

p.
  See a <a href="/blog/sv-calc">real-world example</a> by walking you through building a calculator component
  that you can put anywhere on your site.
p.
  <a href="/blog/embed">Learn to embed</a> the Calculator component in an ordinary HTML webpage.
p.
  Learn SvelteKit basics in <a href="/blog/kit1">Getting Started with SvelteKit</a>.
p.
  <a href="/blog/kit2">Dive deeper</a> into SvelteKit, learning how to get data from 
  endpoints.
p.
  Learn how to  <a href="/blog/kit3"> build a SvelteKit site that uses a MySQL database</a>.
p.
  Learn some ways of <a href="/blog/kit4">hosting SvelteKit apps on the web</a>—even free!
p.
  Learn how to  <a href="/blog/kit-blog1">build a blog with SvelteKit</a> (Part 1—more to come).

//- h2  Coming Soon
h2  Credits
p. 
  This site is built using SvelteKit on the Jamstack. It is hosted (free of charge!) by Netlify. 
  The sample apps source code is on my Github and are hosted (also free of charge) by Vercel.

</template>
