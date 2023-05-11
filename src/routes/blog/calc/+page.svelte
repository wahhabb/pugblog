<script>
	import Prism from '$lib/components/PrismJS.svelte';
	import Calculator from '$lib/components/Calculator.svelte';
	import {
		d1j,
		d1h,
		d1c,
		cb1j,
		cb1h,
		cb1c,
		c1j,
		c1h,
		c1c,
		s1j,
		d2j,
		d2h,
		cb2h,
		cb2m,
		cb2j,
		d3j,
		cb3j,
		c3j,
		cb3m,
		cb4j,
		c4j,
		a1j
	} from './Calccode.js';
	const codespan = "<span class='çode'";
	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<title>Svelte Calc Component</title>
	<meta
		name="description"
		content="Building a calculator component in Svelte
            that can be put in your existing website."
	/>
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  Build a Calculator Component in Svelte
h2  And use it in your current website
.flt_r <Calculator calcFontSize={ windowWidth > 600 ? "16px" : "11px" } />
p. 
	There's no need to go all or nothing with Svelte. You can build a few components
	in it and use them in your existing website. Here, we'll build a calculator app 
	in Svelte and deploy it in a basic HTML website. Here it is on the right: give
	it a try!

p. 
	This fairly full-featured calculator component is
	based on the iPhone calculator app, but with the rectangular buttons 
	of the Mac calculator app. 
	While this project is more complex than is needed just to learn Svelte, I find
	it of interest in itself, and it's more real-world than the trivial examples
	often used. I am assuming you are familiar with HTML, CSS, and JavaScript.
	This is not a total beginner's introduction to Svelte&mdash;for that, go 
	to the great #[a(href="https://svelte.dev/tutorial/basics") tutorial by Svelte].
	If you are more interested in embedding Svelte components into
	existing apps, you can skim over most of this calculator post, or just visit 
	#[a(href='./embed') Embed Our Calculator Component into Your Existing Website],
	and download the finished calculator code as explained there.

p. 
	Let's start with a little planning. We're building a Calculator component.
	The calculator has a bunch of buttons (19,
	to be precise) and a display. So let's create components for the buttons,
	which we'll call !{cd}Calcbtn!{ecd}, and for the display, which we'll call !{cd}Display!{ecd} 
	(in real life, we'd probably call it !{cd}CalcDisplay!{ecd}). Note that Svelte components
	are required to start with a capital letter. To start off with, we'll just 
	write enough code to create a static display, and then we'll add functionality to it.

p.
	There are four columns of buttons, so we'll use CSS grid to do our layout. Some 
	of the buttons have different colored backgrounds, so we'll create classes for them.
p. 
	Being lazy by nature, I'm going to build this in the 
	<a href="https://svelte.dev/repl/hello-world?version=3.46.4">Svelte REPL environment</a>
	rather than having us set up a Svelte development environment right now. We'll do that
	in my upcoming #[a(href="./prisma") post on using MySQL in SvelteKit].

p. 
	So open another browser window, go to #[a(href='https://svelte.dev/') https://svelte.dev/], and click on REPL from the 
	main menu. 
	This brings up a tab named App.svelte on the left, and a Result tab on the right. 
	In order to save your work, click on the right where it says "Log in to save" and 
	log in.
p. 
	Eventually, we will change App.svelte to display a !{cd}Calculator!{ecd} component, but 
	in order to avoid error messages, we'll leave it alone for now.
	Let's begin by creating our subcomponents. Click on the + near the upper left next 
	to App.Svelte, and rename the new tab to Calculator.svelte. We'll just leave it
	blank for the moment. Click the + again, and rename this new tab to	
	Display.svelte. Enter the following code:

<Prism language="javascript" code={d1j}  />
<Prism language="html" code={d1h}  />
<Prism language="css" code={d1c}  />

p. 
	Each Svelte component (like this one) can contain up to three sections: a script tag
	containing JavaScript code, HTML code, and a style tag with CSS code. (There can 
	also be a module-level script tag, which I will
	introduce below). Each instance of the component will get a copy of the HTML and have
	access to the JavaScript and the CSS. One of 
	the gifts of Svelte is that the CSS is <em>scoped</em>, so that it only applies to 
	the component within which it appears. This eliminates the need for complicated 
	methods of dealing with scoping CSS such as BEM or Tailwind.
p. 
	The script is basic JavaScript, with a few tweaks to add 
	Svelte functionality.
	The function !{cd}toDispString!{ecd} will eventually take the value computed by the 
	calculator and format it for the display, but for now, it always returns !{cd}"0"!{ecd}. 
	The HTML, as we see here, allows Javascript values
	to be embedded by surrounding them with curly braces. So the font-size will
	initially be set to !{cd}3.2em!{ecd}, and the div content will be !{cd}"0"!{ecd}. 
	The CSS here is straightforward, 
	making the display span the grid and setting text display qualities. 
p.
	Now click on the plus sign again to create our other subcomponent, and name this tab 
	Calcbtn.svelte. Enter the following code:

<Prism language="javascript" code={cb1j}  />
<Prism language="html" code={cb1h}  />
<Prism language="css" code={cb1c}  />

p.
	The !{cd}export!{ecd} statement in the !{cd}&lt;script> !{ecd} section signifies that 
	these are props (properties) that will be passed to the component when this component is 
	instantiated by a caller. The initial values are defaults. When we create a !{cd}Calcbtn!{ecd} component,
	we will invoke it like this: !{cd}&lt;Calcbtn use="fn">%&lt;/Calcbtn>!{ecd}. 
	The content between the opening and closing tags (in this case, the percent sign) will 
	replace the !{cd}&lt;slot>&lt/slot>!{ecd} portion of the HTML code. 

h2 So Let's See Some Results!
p. 
	Now that we've defined our subcomponents, we're ready to define our Calculator component.
	Click back on the App.svelte tab, and enter the following code:

<Prism language="javascript" code={c1j}  />
<Prism language="html" code={c1h}  />
<Prism language="css" code={c1c}  />

p  Almost done! Go back to the App.svelte tab, and replace all of its code with this:

<Prism language="html" code={a1j}  />

p. 
	Hooray! If you have followed so far, you should see the calculator in the result window 
	on the right. Clicking on the buttons doesn't yet do anything other than change their
	background color, but we'll take care of that soon enough.

p.	
	In the script section of the Calculator component, we import its two subcomponents. 
	Our HTML section has a !{cd}div!{ecd} holding
	the !{cd}Display!{ecd} and our !{cd}Calcbtn!{ecd}s. The statement 
	!{cd}bind:this=&lbrace;calc}!{ecd} sets the !{cd}calc!{ecd} variable to point to 
	this instance of the component&mdash;we will need that later, if we embed more than 
	one Calculator instance on a page. The style section imports 
	our font and creates the overall layout for the calculator.
p. 
	One item of note is the line early in the style section that reads 
	!{cd}font-size: var(--fontSize);!{ecd} If you look at the last line of App.svelte,
	you will see that we set the value of !{cd}--fontSize!{ecd} when we invoke the 
	Calculator component. This allows us to set the overall size of our calculator 
	independently each time it is invoked.

p. 
	Now that we can see our calculator, let's start getting it to work! Our first step is 
	to set up communication between the buttons and the display. Rather than requiring all 
	props to be sent up and down the chain to the top-level component, Svelte makes 
	inter-component communication easy 
	by using a #[i store]. A store is just an object with a !{cd}subscribe!{ecd} method that lets interested 
	components be notified whenever the store value changes. When we click buttons, the value 
	on the display should change. Let's set this up. Click the + at the right of the list of 
	tabs, and rename the new tab to stores.js. Add the following two lines of code to it:

<Prism language="javascript" code={s1j}  />
p. 
	This variable, !{cd}display!{ecd}, will hold a numeric value to be shown on the display. Now the 
	!{cd}Display!{ecd} component needs to update the display's contents whenever they change. We'll 
	start with a simple implementation of !{cd}toDispString!{ecd}. Replace the contents of the script 
	tags with the following:

<Prism language="javascript" code={d2j}  />

p   Next replace the div with the following:

<Prism language="html" code={d2h}  />

p. 
	The dollar sign in front of the variable !{cd}display!{ecd} is a Svelte 
	feature saying that whenever the store value prefixed with the $ changes 
	value, its containing statment will be rerun. Now, we 
	just have to update the store when we click on the calculator buttons. 

p. 
	Let's start by handling entering a number. A number will consist of a 
	series of digits, optionally followed by a decimal point and another series 
	of digits. If a second decimal point is entered during this process, we 
	will ignore it. We'll use a variable, !{cd}inDecimal!{ecd}, 
	to show whether we are entering digits beyond a decimal point and how 
	many digits past it we are. To support this count, we will create a couple 
	of module-level variables. Every time a button is pressed, any 
	variables in our script section will be reinitialized, but variables in a 
	module context hold their values throughout invocation, like static 
	variables in a C++ class. At the top of the file, enter the following:

<Prism language="javascript" code={cb2m}  />
p. 
	Change the first line 
	of the HTML to call a function when a button is clicked:

<Prism language="javascript" code={cb2h}  />

p  Then replace the contents of the script section with this code:

<Prism language="javascript" code={cb2j}  />

p. 
	We have imported !{cd}display!{ecd} from stores.js so we can set its 
	value, which will lead Display.svelte to change the content of the display. 
	We set it by calling !{cd}display.set!{ecd} and passing the numeric value 
	to be displayed. At this point, you can type numbers into the calculator, 
	like 123.45, and see them appear. Progress!

	However, we can also see a bug. Start typing in digits, and by the time 
	you get to ten digits, the number runs off the display! Let's add some 
	code to Display.svelte to deal with this. If numbers get long, we'll shrink 
	their size. We'll round off digits to the right of the decimal place that 
	won't fit, and we'll use scientific notation for numbers too large to fit. 
	Go to the 
	Display.svelte tab and replace the script section with the following:

<Prism language="javascript" code={d3j}  />

p. 
	By calling !{cd}toLocaleString!{ecd}, we not only limit 
	!{cd}maximumSignificantDigits!{ecd}, but also get commas in numbers four 
	or more digits to the left of the decimal point.

p. 
	Now let's try adding some operators, so we can add, subtract, multiply, 
	divide, and see the result of our calculation with the equal button. 
	Head back to Calcbtn.svelte, and let's think this through.
p. 
	Imagine someone enters 4 + 5 &times; 6 = into the calculator. What 
	should happen? Some calculators interpret this mathematically, and 
	give multiplication higher priority than addition, so they show 34. 
	But most calculators function sequentially. When the user enters the 
	&times; symbol, the display shows the evaluation of 4 + 5 (i.e. 9),
	then the 6 is multiplied by 9, giving 54. We will take this approach. 
	This means pressing a function key carries out any pending operation 
	and displays the result, as well as saving itself to apply to the next 
	operand.
p. 
	Begin by adding these two lines of code to Calcbtn.svelte after 
	!{cd}let lastBtn = ""!{ecd}:

<Prism language="javascript" code={cb3m}  />

p. 
	Now add the following code after the !{cd}break!{ecd} statement near the bottom of the 
	script section:

	<Prism language="javascript" code={cb3j}  />

p. 
	Now try out your calculator. It adds! It multiplies! It follows the rules we set out 
	above for chained calculations.

	However, we still have a few loose ends to tie up. The AC button should work as follows:
	It begins as an AC button, but should change to C when a number is entered. 
	If the C (Clear) button is pressed, it clears the currently entered number, but also 
	changes its symbol to AC (All Clear), and if pressed in that state, it clears all pending 
	data. To support this, we will dispatch a custom event 
	from Calcbtn.svelte that will trigger an event handler 
	in our top level component. To do this, add this line near the top of the script section of
	Calcbtn.svelte: 	!{cd}import &lbrace; createEventDispatcher } from 'svelte';!{ecd}
p.
	After the first !{cd}if!{ecd} statement in !{cd}calcClick!{ecd}, send the event:

<Prism language="javascript" code={cb4j}  />

p. 
	We modify each of the number buttons and the decimal point button in App.svelte to react 
	to this ac event, with an !{cd}on!{ecd} statement: 
	!{cd}&lt;Calcbtn on:ac=&lbrace;setClear}>9&lt;/Calcbtn>!{ecd}

	Then in the App.svelte tab, we add this code:

<Prism language="javascript" code={c3j}  />



p.
	Another loose end: when the user presses the + key in the previous example and then 
	goes on to enter the 5, we want the plus key to continue to appear pressed, as a 
	reminder of the operation being performed. In order to do this, Calcbtn will send 
	another custom event to the top-level component. Those three lines of code are 
	already present below the line !{cd}case "=":!{ecd} so just uncomment them. Next, 
	in the top-level component, modify each of the !{cd}Calcbtn!{ecd} 
	statements with !{cd}user="oper"!{ecd} like this: 
	!{cd}&lt;Calcbtn use="oper" on:func=&lbrace;setOperColor&rbrace;&gt;&plus;&lt;/Calcbtn&gt;!{ecd} 
	and add the function to the script section above:

	<Prism language="javascript" code={c4j}  />

p. 
	Well, that about wraps it up! There are certainly a few bugs left, and features that could 
	be added (like handling keystroke entry), but we've built a functional calculator. Now go 
	to the #[a(href='embed') Embed] post to learn how to embed this component in a 
	conventional web page.

a(href='embed') Next&RightArrow;

</template>
