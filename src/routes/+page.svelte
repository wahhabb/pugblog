<script>
	import Prism from '../lib/components/PrismJS.svelte';

	//	let language = 'html';
	let code1 = `    
  import Calcbtn from './Calcbtn.svelte'
  import Display from './Display.svelte'
  const setOperColor = (event) => {
    let selected = event.detail.symbol;
    if (selected === "=")
      selected = "";
    let opers = document.getElementsByClassName("oper"); `;
	let code_css = `body {
		padding: 2em;
		background-color: antiquewhite;
	}`;
	let code_html = `<h1>Calculator</h1>
      <div class="calc">
      <Display />
          <Calcbtn use="fn" on:func = {setOperColor} >AC</Calcbtn>
          <Calcbtn use="plusminus"><sup>&plus;</sup>/<sub>&minus;</sub></Calcbtn>
          <Calcbtn use="fn">%</Calcbtn>`;
</script>

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
  shadow DOM, or link in a run-time library, making it small and fast. It is also much easier
  to learn. StackOverflow’s recent survey showed Svelte as the most-loved web framework.

p. 
  <a href="https://kit.svelte.dev/">SvelteKit</a> is a framework for building web 
  applications that provides routing, client-side and/or server-side rendering, code-splitting, and more. 
  It is comparable to Next in React or Nuxt in Vue. It makes it quick and easy to 
  develop sites (like this one!) with a great developer experience. Version 1.0 was released in August, 2022,
   and although it is new, it is used in production in sites 
  like nytimes.com. While Svelte was the fifth most-popular
  <a href="https://stackdiary.com/front-end-frameworks/"></a>front-end framework from 2020 through February, 2022, I am convinced that now that SvelteKit is in production, Svelte and SvelteKit will grow rapidly and become a major force in web development.
  In any event, it’s fun learning and using them!

h2 Let’s Dive In!

p. 
  To use these tutorials, you should be familiar with web development and JavaScript, and
  have <a href="https://nodejs.dev/download/">Node.js and npm</a> installed on your 
  computer to follow my code examples.

p
|  Svelte has a <a href="https://svelte.dev/tutorial/basics">great tutorial</a>, but let me 
a(href="/blog/calc") walk you through building a calculator component
|  that you can put anywhere on your site.
p.
  <a href="/blog/embed">Learn to embed</a> the Calculator component in an HTML webpage.
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
<span class="red"><b>New!</b></span> Learn how to  <a href="/blog/blog/blog1">build a blog with SvelteKit</a> (Part 1—more to come).

//- h2  Coming Soon
h2  Credits
p. 
  This site is built using SvelteKit on the Jamstack. It is hosted (free of charge!) by Netlify.

</template>
