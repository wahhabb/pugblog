<svelte:head>
	<title>Get to Know Svelte</title>
	<meta
		name="description"
		content="Samples showing Svelte basics"
	/>
</svelte:head>

<script>
    import ColorButtons from '$lib/components/ColorButtons.svelte';
</script>

# Get to Know Svelte

<img class="flt_r" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" style="width:25%" alt="SvelteKit Logo" />

Modern, full-stack web applications can be hard to build and maintain. Those tasks are made easier by using a framework that handles many of the tasks involved. Some frameworks are based on different languages, such as Ruby on Rails or Python with Django. In recent years, however, building frameworks on JavaScript has taken the lead.

The most popular and widely-used JavaScript web framework is React. To build full sites with navigation, the extension Next is used. Later, a simpler framework called Vue was neveloped, with its extension Nuxt. Then Svelte and Sveltekit were developed. Each later framework has attempted to overcome some of the shortcomings of its predecessors. Sveltekit is still very much in a growth stage.

One concept these frameworks share is the ability to create *components* that can be written into HTML as if they were native elements. Components might be replacements for, or extensions of, conventional web components like buttons, dropdowns, lists, etc. They could represent components that are often a part of a web page, such as header, footer, menu, accordion, and so forth. Or they might represent a component that has a special use just for a single website. 

A Svelte file, with the suffix `.svelte`, represents a component. A web page in Svelte is also a component, represented by a `.svelte` file. Components can contain other components, which can have components of their own. Components in Svelte always start with a capital letter, so an upgraded button component might be written in HTML as `<Button>`. As in HTML, components can either be self-closing or not (like `<Button />` or `<Button>xxx</Button>`) and can contain parameters (like `<Button type='warning'>Be Careful!</Button>`)

A `.svelte` file can contain any or all of three sections: script, HTML, and style. The style section contains standard CSS (although scss, etc. can also be used). CSS in a component applies only to that component. This eliminates much of the complexity of maintaining CSS for a large site. The HTML section has a number of enhancements over standard HTML. The script section can is mostly conventional JavaScript/ECMAScrip or TypeScript, although there are a few available enhancements.

The [Svelte tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte) is wonderful, so there is no point in my reproducing it here. Go through it if you really want to learn Svelte. But here is a brief overview of the basics, with some sample code.

## Runes

One of the challenges in conventional web pages is dealing with cascading changes caused when one element chanages value. The JaveScript required to keep all the pieces in sync can become complex, unwieldy, and bug-prone.

Svelte handles much of this for you. If a variable is marked by wrapping its initial value with `$state(...)`, that tells the Svelte compiler that this is a reactive variable, and to update its value in other places in the code where it is used whenever it changes. `$state()` is a *rune*. While it looks like a function, it is built into Svelte. A related rune is `$derived(...)`. This is like `$state`, in that references to it are updated when it changes, but different, in that it depends on one or more variables previously defined with `$state`. Let's try an example. For now, rather than building our Svelte apps, we'll try them in the Svelte [playground](https://svelte.dev/playground).

Open the link above, and enter the following code:

```javascript
<script>
	let count = $state(0);

	function bumpCount() {
		++count
	}
	let totalCost = $derived('$' + count*3 + '.00')
</script>
```

```html
<p>How many boxes at $3 each?</p>
<button onclick={bumpCount}>
	{count}
	{count === 1 ? 'box' : 'boxes'}
</button>
<p>Total cost: {totalCost}</p>
```

```css
<style>
	p {
		font-size: 130%;
	}
	button {
		font-size: 140%;
		padding: 0.5em;
		background-color:lightskyblue;
	}
</style>
```

You can see that the HTML allows us to include JavaScript variables or expressions by wrapping them in braces. (This is not true for the CSS).

As you click on the button in the app you have just created in the playground, you will see that both the button face and the total figure are updated. If you now remove the `$derived()` wrapper from the declaration of `totalCost`, you will see that its value is not updated even when the button is clicked. In conventional HTML, the `onclick` would need to directly update both locations in the HTML that should change. 

By the way, we didn't really need to use the `$derived()` rune in this case. We simply could have used the line

`<p>Total cost: {'$' + count*3 + '.00'}</p>
`

in our HTML. But if this derived values is to be used in many places, it makes much more sense to create the derived variable.

## HTML Logic and Transitions

Not only can we include JavaScript evaluations within our HTML, but we can control the flow of HTML itself with logic statements. `{#if}` lets HTML be optional, while `{#each}` statements allow loops of HTML. Here's some code, modified from the Svelte tutorial. It is followed by the component it generates.

```javascript
<script>
	import { fly } from 'svelte/transition';
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = $state(colors[0]);
	let visible = $state(false);
</script>
```

```html

<h1 style="color: {selected}">Pick a color</h1>

<div>
	{#each colors as color}
	<button
		style="background: {color}"
		aria-label="{color}"
		aria-current={selected === color}
		onclick={() => selected = color}
	></button>
	{/each}
</div>

{#if selected === 'yellow'}
	<h2 transition:fly={{y:200, duration: 1000}}>You picked Yellow!</h2>
{/if}
```

```css

<style>
	h1 {
		font-size: 2rem;
		font-weight: 700;
		transition: color 1.8s;
	}
	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}
	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.4));
		transition: all 0.1s;
		color: black;
		font-weight: 700;
		font-size: 2rem;
	}
	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>
```

<ColorButtons />

What we see here is an array of colors. The HTML loops through them, creating a button of each color. (The playground doesn't show the nice drop shadows that you can see in the working example above). When you click on a button, it places its color name in the variable `selected`. That in turn changes the color of the `H1` title.

The `{#if}` statement adds a subhead saying "You picked Yellow!" if that was the color picked. If a different color button is clicked, the `H2` is not just hidden, but removed from the DOM. There is a transition to have the `H2` fly up into place. In general, you would use CSS transitions to do this kind of thing, but in this case, the `H2` would be removed before the CSS transition could be played. Svelte offers a variety of transitions that are primarily useful when adding or removing DOM elements.

## Communicating between Components

It is important for components to be able to share information with one another. There are three key situations: sharing from parent to child, sharing from child to parent, and sharing between siblings or unrelated components.

Parent components share with child components primarily by use of properties, or props. For example, a page component might invoke some Card components, with one looking like this:

`<Card size='medium', title="Visit Scenic Peru!", image="/images/peru.jpg" />`

The Card component could retrieve these values by destructuring the `$props()` rune as follows:
```javascript
<script lang="ts">
	let { size, title, image } = $props();
</script>
```

```html

<div class={size}>
    <h2>{title}</h2>
    <img src={image}>
</div>
```
There are several ways that a child component can send information back to its parent. A recommended approach is for the parent to send a function as a prop to the child. The child can then invoke that function with appropriate argument(s) to make a desired value visible to the parent. Here's an example. Create the following app:

```javascript
<script>
	import AddButton from "./AddButton.svelte"
	
	let total = $state(0);
	function addBtnVal(val) {
		total += Number(val);
	} 
</script>
````

````html

<h1>Add them up!</h1>
<AddButton col=100 addFn={addBtnVal} />
<AddButton col=10  addFn={addBtnVal} />
<AddButton col=1 addFn={addBtnVal} />
<h2>Total is {total}</h2>
````

Now create the child component, AddButton.svelte:

```javascript
<script>
	let {col, addFn } = $props();
	function addCol (val) {
		addFn(val)
	}
</script>
```

```html

<button onclick={ () => addCol(col) }>Add {col}</button>
```
```css
<style>
	button {
		font-size: 1.3em;
		border: 1px solid darkblue;
		background: lightblue;
	}
</style>

```
We see here that the child component is passed an amount that clicking on it should add to the total with each click. It is also passed a function in the parent that can do that adding so the total is displayed. The child, meanwhile, invokes the parent's function when clicked. We will used this technique in the next post.

If data needs to be shared between components not directly related as parent/child, Svelte offers the Store as one way of handling that. The store is can be subscribed to by various components, either as read-only or as writable. But look at the Svelte documentation for Stores for details on this and other ways of sharing data between components.

Let's go on to building something closer to a real app. In the next post, we'll build a calculator component.

[Next→](sv-calc)