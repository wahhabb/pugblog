<script>
	import Prism from '$lib/components/PrismJS.svelte';
	import { e1j, e1h, e2j } from './Embedcode.js';
</script>

<svelte:head>
	<title>Embedding a Svelte Component</title>
	<meta name="description" content="Embed our calculator component into your existing website." />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  Embed Our Svelte Calculator Component into Your Existing Website
img.flt_r.bdr_1(src="/demo.png"  alt="demo page of embedded components")
p.   
    If you have followed the instruction in my previous post, you now have five tabs
    in Svelte’s REPL labeled App.svelte, Calculator.svelte, 
    Calcbtn.svelte, Display.svelte, and stores.js. 
    (If you do not have these, you can pull them from 
    <a href="https://github.com/wahhabb/calc">my Github repository</a>
    in the svelte-app directory).
p. 
    Click on the Download icon on the gray bar near the top of the REPL page, and a Zip file 
    will be put in your downloads folder. Unzip this file, and open the src directory.
    That will contain your five source files plus a main.js file, which you can delete.
    You can also delete App.svelte.
    Move the four remaining files into a directory where you will do this embedding project
    and cd into that directory.
p. 
    You will need npm to install the software tools needed for this project. If you don’t 
    already have it, or are unsure, instructions for downloading and installing it are found 
    <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">here</a>.
p. 
    Now we’re ready to start building the .js file for our calculator component that 
    can be imported into conventional web pages. I offer appreciation to 
    #[a(href='https://codeandlife.com/2021/03/06/easy-to-embed-svelte-components/') Code and Life]
    for the technique used here, also described 
    <a href="https://typeofnan.dev/how-to-set-up-a-svelte-app-with-rollup/">here</a>. 
p. 
    Rollup is a module bundler used to compile chunks of JavaScript into a library or
    application. It is used by Svelte to do the build, so you need to install it (if you 
    haven’t already). Do that by entering the following line at your terminal: 
p   !{cd}npm install --save-dev rollup!{ecd}
p. 
    This installs it and marks it as a development dependency. Next, enter <br />!{cd}npm init!{ecd}
p. 
    This will ask you several questions, which you can answer or just hit return to 
    accept defaults. This step will generate a package.json file. 
    Next, we’ll install Svelte and two rollup plugins:
p.   
    !{cd}npm install --save-dev svelte!{ecd}<br>
    !{cd}npm install --save-dev rollup-plugin-svelte!{ecd}<br>
    !{cd}npm install --save-dev @rollup/plugin-node-resolve!{ecd}<br> 
p. 
    Now we are ready to create a small JavaScript file that will import our Calculator
    component and inject it into the webpage where we want it to be displayed. We’ll
    call it embed.js. Here’s the code:
<Prism language="javascript" code={e1j}  />

p. 
    In order to run rollup, we will give it a config file so it knows what we want it to 
    do. Create a file called rollup.config.js, and enter the following code into it:
<Prism language="javascript" code={e2j} />    
p. 
    The output file (calc.js) is what we will invoke in our HTML program to produce 
    our component. The output format of “iife” stands for immediately-invoked 
    function expression.
    You can learn more about Rollup configuration files (and other features) 
    <a href="https://rollupjs.org/guide/en/#configuration-files">here</a>.
p. 
    Now we’re ready to run rollup, passing it our configuration file:
p   !{cd}rollup -c rollup.config.js!{ecd}
p. 
    This should give you a message like !{cd}created calc.js in 465ms!{ecd}.
p. 
    Next, we’ll create a simple HTML page into which we will import two Calculator 
    instances of different sizes, as a stand-in for your own web page where you want 
    to import a Svelte component. It doesn’t need to be in the same directory as 
    our embed code, but we’ll put it there for convenience right now:

 <Prism language="html" code={e1h}  />
p. 
    As you see, we invoke our component with the line
p   !{cd}&lt;script src="calc.js">&lt;/script>!{ecd}
p. 
    and we can set the (global, in this case, for simplicity) variable 
    !{cd}calcFontSize!{ecd} to be passed through as a prop to the component.
p. 
    At this point, we’re ready to try it out! Double-click on the file demo.html 
    that you created, and check it out. It should look like the screenshot at 
    the top of this page. Congratulation! You have embedded a Svelte component 
    into a standard HTML page.
//- p. 
//-     If you run into difficulties, you are welcome to download the source files 
//-     for this post at 
    


</template>
