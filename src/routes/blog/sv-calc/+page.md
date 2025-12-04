<!-- <svelte:window bind:innerWidth={windowWidth} /> -->

<svelte:head>
	<title>Svelte Calc Component</title>
	<meta
		name="description"
		content="Building a calculator component in Svelte
            that can be put in your existing website."
	/>
</svelte:head>
<script>
	import Calculator from './Calculator.svelte';
</script>

# Build a Calculator Component in Svelte

## And use it in your current website
<div class="flt_r">
<Calculator calcFontSize="16px" />
</div>

There’s no need to go all or nothing with Svelte. You can build a few components in it and use them in your existing website. Here, we’ll build a calculator app in Svelte and in the next post deploy it in an ordinary HTML website. Here it is on the right: it’s live! Give it a try!

This fairly full-featured calculator component is based on the iPhone calculator app, but with the rectangular buttons of the Mac calculator app. While this project is more complex than is needed just to learn Svelte, I find it of interest in itself, and it’s more real-world than the trivial examples often used. I am assuming you are familiar with HTML, CSS, and JavaScript. This is not a total beginner’s introduction to Svelte—for that, go to the great [tutorial by Svelte](https://svelte.dev/tutorial/basics). If you are more interested in embedding Svelte components into existing apps, you can skim over most of this calculator post, or just visit [Embed Our Calculator Component into Your Existing Website](./embed), and download the finished calculator code as explained there.

Let’s start with a little planning. We’re building a Calculator component. The calculator has a bunch of buttons (19, to be precise) and a display. So let’s create a component for the buttons and the display, which we’ll call CalcUI, and another for the logic module, which we'll call Calculator. (This could all be one component, but it's instructive to see how the two components communicate). Note that Svelte components are required to start with a capital letter. I'm using a bit of Typescript here, to keep straight what is a number and what is a string, but it should be easy to follow if you know Javascript.

We'll start with CalcUI. There are four columns of buttons on our calculator, so we’ll use CSS grid to do our layout. Some of the buttons have different colored backgrounds, so we’ll create classes for them.

For simplicity, let's build this in the [Svelte Playground](https://svelte.dev/playground/) rather than having to set up a Svelte development environment right now. We’ll do that in my upcoming [post on SvelteKit](./kit1).

So open another browser window, go to [https://svelte.dev/](https://svelte.dev/), and click on Playground from the main menu. This brings up a tab named App.svelte on the left, and a Result tab on the right. In order to save your work, click on the right where it says “Log in to save and log in.

Eventually, we will change App.svelte to display a Calculator component, but in order to avoid error messages, we’ll leave it alone for now. Let’s begin by creating our subcomponents. Click on the + near the upper left next to App.Svelte, and rename the new tab to Calculator.svelte. We’ll just leave it blank for the moment. Click the + again, and rename this new tab to CalcUI.svelte. I'll give you the code for it now, and discuss it afterwards.

```javascript
// CalcUI.svelte

<script lang='ts'>
	let dispFontsize = '240%'
	let { onMessage, dispString } = $props();		
	let held = $state({
		plus: false,
		minus: false,
		times: false,
		div: false,
	})
	let clrButton: any = null;

	function setText(face: string, type: string) {
		if (face == "C") {
			clrButton.innerHTML = "AC";
		}
		if (face == "AC")
			type = "clr"
		if (type == "num")
			clrButton.innerHTML = "C";
		onMessage({ face: face, type: type });
	}
	
	function hold(operButton: string) {
		held.plus = operButton == '+';
		held.minus = operButton == '-';
		held.times = operButton == 'x';
		held.div = operButton == '/';		
	//	alert(operButton)
	}
</script>
```

```html
<div class="calc">
	<div class="display" style="font-size: {(dispString.split("").filter(digit => digit >= "0" && digit <= "9").length ) > 10 ? '200%' : '240%'}">
		{dispString}
	</div>

<button onclick={() => setText('0', "clr")} class="fn" bind:this={clrButton}> AC </button>
<button onclick={() => setText('', 'pm')} class="fn"><sup>&plus;</sup>/<sub>&minus;</sub></button>
<button onclick={() => setText('%', "%")} class="fn"> % </button>
<button onclick={() => {setText('/', "oper");  hold('/')}} class:held={held.div} class="oper"> &div; </button>
<button onclick={() => setText('7', "num")}> 7 </button>
<button onclick={() => setText('8', "num")}> 8 </button>
<button onclick={() => setText('9', "num")}> 9 </button>
<button onclick={() => {setText('x', "oper");  hold('x')}} class:held={held.times} class="oper"> &times; </button>
<button onclick={() => setText('4', "num")}>4 </button>
<button onclick={() => setText('5', "num")}> 5 </button>
<button onclick={() => setText('6', "num")}> 6 </button>
<button onclick={() => {setText('-', "oper");  hold('-')}} class:held={held.minus} class="oper"> &minus; </button>
<button onclick={() => setText('1', "num")}> 1 </button>
<button onclick={() => setText('2', "num")}> 2 </button>
<button onclick={() => setText('3', "num")}> 3 </button>
<button onclick={() => {setText('+', "oper");  hold('+')}} class:held={held.plus} class="oper"> &plus; </button>
<button onclick={() => setText('0', "num")} class="twowide"> 0 </button>
<button onclick={() => setText('.', '.')}> . </button>
<button onclick={() => {setText('=', "oper");  hold('=')}} class="oper"> = </button>
</div>
```

```css
<style>
	.display {
		grid-column-start: 1;
		grid-column-end: 5;
		background-color: #444;
		color: white;
		font-weight: 100;
		font-size: 250%;
		text-align: right;
		align-self: end;
		padding: 15px 16px 0 0;
	}
	.calc {
		display: inline-grid;
		justify-content: center;
		grid-template-columns: repeat(3, 3.875em) 4.06em;
		grid-template-rows: 4.875em repeat(5, 3.125em);
		margin: 0 auto;
		gap: 1px;
		background: #444;
		font-family: 'Work Sans', sans-serif;
		}
	button {
		background: #777;
		height: 100%;
		color: white;
		font-size: 140%;
		font-weight: 200;
		border: none;
	}
	button:active {
		background:#aaa;
	}
	.twowide {
		grid-column-end: span 2;
		text-align: left;
		padding-left: 1.3em;
	}
	.oper {
		background: #f94;
		font-size: 180%;
		padding-top: .31em;
	}
	.held { background: #e73; }
	.fn {
		background: #555;
	}
	button.oper:active {
		background: #c72;
	}
	button.fn:active{
		background: #777;
	}
</style>
```

Each Svelte component (like this one) can contain up to three sections (but only one of each): a script tag containing JavaScript code, HTML code, and a style tag with CSS code. Each instance of the component will get a copy of the HTML and have access to the JavaScript and the CSS. One of the gifts of Svelte is that the CSS is _scoped_, so that it only applies to the component within which it appears. This solves much of the problem of unmaintainable CSS and eliminates the need for complicated methods of dealing with scoping CSS such as BEM or Tailwind.

The script is basic JavaScript, with a few tweaks to add Svelte functionality. The $props() represents the object passed to us by the parent. Our parent app will send us a function to process the button clicks, called `onMessage`, and the string to be displayed on the display. 

When an operator is selected, its background color changes while the next operand is entered to remind what operation is to be performed. 

The display is just a div. Its contents will be set by the variable `dispString` passed by the parent. Arbitrary Javascript can be placed in braces, and will be dynamically evaluated and placed in the HTML, and here the display string is shown on the third line of the HTML portion of this component. We will see that whenever the value of `dispString` changes in the parent, it changes here as well, updating the display. This is the gift of reactive code. The complicated expression in the line starting `<div class="display"`evaluates how much horizontial space the display string will need, and makes its font size smaller if necessary to fit it in the display.

The expression `bind:this={clrButton}` on the first button gives us a variable by which to modify the AC button to C and vice versa. We avoid using `document.getElementByID` because apps may run on the server rather than the browser, so `document` is not accessible. 

When one of the buttons is clicked, it calls a function with two values: one character for the button face, and a class representing what kind of button it is (number, operator, clear, or decimal point). That function deals with the C/AC button and bundles the values into the callback function to notify the Calculator what button was pressed. 

The CSS is conventional. We can safely apply it to `button` because it will not affect buttons in any other components of our app.

Now enter the following code into the Calculator.svelte component:

```javascript
// Calculator.svelte

<script lang="js">
	import CalcUI from '/src/lib/CalcUI.svelte';
	let { fontSize = '16px' } = $props();		
	let calcValue: number = $state(0);    
	let dispString: string = $state("0") 
	let lastOper: string = $state('')
	let lastButton: any = $state('')
	let inDecimal = 0
	let operand: number = 0;  
	let rounded: number
	const maxDigits = 12;	// how many digits can display show

	// Calculate the value to be displayed
	function handleMessage(button: {type: string, face: string}) {
			switch (button.type) {
			case "pm":
				calcValue = - calcValue	
		 	break;
		case "cla":
			lastOper = '' 
			operand = 0  // Fall through
		case "clr":
				calcValue = 0;
				inDecimal = 0
				break;
		case "num":
			if (lastButton.type == "oper") {
				operand = calcValue
				calcValue = 0
				inDecimal = 0
			}
				if (inDecimal) {
					if (calcValue >= 0)
						calcValue += Number(button.face) * 10 ** -inDecimal;
					else
						calcValue -= Number(button.face) * 10 ** -inDecimal;
					++inDecimal
			} else
				calcValue = 10 * calcValue + (calcValue >= 0 ? Number(button.face) : - Number(button.face))
			break;
		case ".":
			if (inDecimal) // extraneous decimal point
				return;
			inDecimal = 1				
				break;
		case "%":
				calcValue /= 100;
				break;
		case 'oper':
			if (lastButton.type == "oper") {
				lastButton = button
				lastOper = button.face
				return
			}
			inDecimal = 0
			if (lastOper == '+') 
				calcValue += operand
			if (lastOper == '-') 
				calcValue = operand - calcValue
			if (lastOper == 'x') {
				calcValue *= operand
			}
			if (lastOper == '/') 
				calcValue = operand	/ calcValue
		  if (lastOper == '=')
				operand = 0
			if (button.face == '=') {
				operand = 0
			}
			lastOper = button.face;
			break;
		default:
			Error('Bad Button Type') 
		}
		lastButton = button;
	};

const toDispString = (val : number) : string => { 
	let leftDigits = Math.max(Math.floor(Math.log10(val)), 0) + 1;
	if (leftDigits > 10) {
		return val.toExponential(8);
	}
	if (maxDigits > leftDigits) {
		rounded = Number(val.toFixed(maxDigits - leftDigits))
	} else {
		rounded = val
	}
	return Number(rounded).toLocaleString("en-US", { maximumSignificantDigits: 12 });
};
</script>

<!-- For debugging -->
<!-- <p>->{lastButton.type} {lastOper} op {operand} cv {calcValue} ds {toDispString(calcValue)}&lt;-</p> -->
```
```html
<div id="calculator" style="font-size:{fontSize}" >
  <CalcUI onMessage={ handleMessage } dispString={ toDispString(calcValue) } />
</div>
```
I have seen a number of example coded calculators, but they usually don't handle unexpected or error conditions well. What happens if the user enters two decimal points in a number? What if they click plus and then click divided by? What happens if they enter too many digits? What happens if the calculated result overflows the display area? I'm sure I have some bugs here, but I've attempted to adress each of these issues and more.

The line `let { fontSize = '16px' } = $props();	` means that we will get the variable `fontSize` passed to us, but if it isn't, `fontSize` takes the default value of `'16px'`. The term `$state()` in the next three lines means that these variables are responsive: whenever they change, things that depend on them change. Most of the code is the function that handles a button click from the child component. The function `toDispString()` converts the number that should be displayed to a string, including commas, or exponential notation for numbers too large to fit, and rounds to a number of decimal places that will fit on the display.

## So Let’s See Some Results!

Now that we’ve defined our subcomponents, we’re ready to add our Calculator component in App.svelte. Click back on the App.svelte tab, and enter the following code:

```js
<script>
	import Calculator from "./Calculator.svelte"
</script>
```

```html
<h1>Calculator</h1>
<Calculator fontSize="16px" />
```

Hooray! If you have followed so far, you should see the calculator in the result window on the right. 

Now try out your calculator. It adds! It multiplies! It follows the standard rules  for chained calculations. However, we still have a few loose ends to tie up. The AC button works as follows: It begins as an AC button, but should change to C when a number is entered. If the C (Clear) button is pressed, it clears the currently entered number, but also changes its symbol to AC (All Clear), and if pressed in that state, it clears all pending data. If you change the `fontSize` parameter in App.svelte, you will see the entire calculator gets larger or smaller, allowing you to adjust its size on the page.

Well, that about wraps it up! There are certainly a few bugs left, and features that could be added (like handling keystroke entry), but we’ve built a functional calculator. Now go to the [Embed](sv-embed) post to learn how to embed this component in a conventional web page.

[Next→](sv-embed)
