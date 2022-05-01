<script>
	import Prism from '../PrismJS.svelte';

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
	<title>Deep Web Works--Svelte/Sveltekit Blog</title>
	<meta
		name="description"
		content="Wahhab Baldwin's blog shares his exploration of Svelte/Sveltekit."
	/>
</svelte:head>

<template lang="pug">
h1 Svelte/SvelteKit 
img.flt_r(src="/Wahhab-Baldwin.jpg" alt="Wahhab Baldwin")
p  
  |  Hi! I'm Wahhab Baldwin, founder of Deep Web Works. After working for decades as a 
  |  software developer and manager, including at Microsoft, 
  |  I mostly retired, but ran this small web development company. 
  |  Now that I've retired for good, I've decided to use my website to share my adventures with 
  |  Svelte and SvelteKit. I hope you'll find it useful, and I welcome your 
  a(href="/contact") feedback
  | .

h2  Who Is This Site For?
p 
  |  I'm writing for people somewhat like me&mdash;familiar with web development and JavaScript, who 
  |  are either interested in dipping their toes into Svelte/SvelteKit, or who have been 
  |  exploring it but would like to know more. You will need to be able to use a command line 
  |  and to have 
  a(href="https://nodejs.dev/download/") Node.js and npm 
  |  installed on your 
  |  computer to follow my code examples.

h2  So What Are Svelte and SvelteKit?
img.flt_l(src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" height=90
  alt="Svelte Logo")
p.
  As you likely know, <a href="https://svelte.dev/">Svelte</a> is a framework for building 
  user interfaces. JavaScript based,
  it is compared to React and Vue. Unlike these, however, it is a compiler, does not use a 
  shadow DOM, or link in a run-time library, making it small and fast. It is also much easier
  to learn. StackOverflow's recent survey showed Svelte as the most-loved web framework.

p. 
  <a href="https://kit.svelte.dev/">SvelteKit</a> is a framework for building web 
  applications that provides routing, server-side 
  rendering, code-splitting, and more. It is comparable to Next or Nuxt in React and Vue. It
  makes it quick and easy to develop sites (like this one!) with a great developer experience.
  It replaces Sapper, an earlier tool. 

p. 
  While these are wonderful tools, they are relatively new. Svelte's initial release was
  at the end of 2016. In the 2021 State of JS rankings for 
  Front-End Frameworks, Usage for React is 80%, for Angular 54%, for Vue 51%, but for Svelte 
  only 20%. However, the satisfaction level for Svelte is 90%, higher than any of the others.
  SvelteKit is in active use on websites including nytimes.com and svelte.dev itself, but 
  it has not yet issued a 1.0 release. Despite this shortcoming, however, I am convinced 
  that Svelte and SvelteKit will grow rapidly and become a major force in web development.
  In any event, I am having fun learning and using it!

h2 Let's Get Started!

p
|  Svelte has a <a href="https://svelte.dev/tutorial/basics">great tutorial</a>, but let me 
a(href="/blog/calc") walk you through building a calculator component
|  that you can put anywhere on your site.
p.
  <a href="/blog/embed">Learn to embed</a> the Calculator component in an HTML webpage.
p.
  Learn SvelteKit basics in <a href="/blog/kit1">Getting Started with SvelteKit</a>.
h2  Coming Soon!
p.
  Dive deeper into SvelteKit, learning how to get data from endpoints and how to get your 
  app hosted on the Web.
p
|  SvelteKit's tutorial is not yet ready for prime time. Learn how to 
//- a(href="/blog/sveltekit") build a SvelteKit site that uses a MySQL database
|  build a SvelteKit site that uses a MySQL database
|  .
p. 
  This site is built using SvelteKit on the Jamstack. It is hosted (free of charge!) by Netlify.
  Learn about how I built it. 

</template>
