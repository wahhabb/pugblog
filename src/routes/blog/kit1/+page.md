<svelte:head>
	<title>Starting with SveltKit</title>
	<meta
		name="description"
		content="Introduction to SveltKit with code examples"
	/>
</svelte:head>

# SvelteKit 1—Getting Started with SvelteKit

<img class="flt_r" src="/svelte-kit-machine.jpg" style="width:25%" alt="SvelteKit Machine" />

This post will give you a basic introduction to SvelteKit and walk you through building a basic SvelteKit website. If you already know how to do this, you can probably skip this post and go to one of the subsequent ones. Alternately, you can go to kit.svelte.dev both to learn more about what SvelteKit does and how to use it.

## What Is SvelteKit?

According to their website, “SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

“Unlike single-page apps, SvelteKit doesn’t compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.”

## Let’s Learn by Doing!

In order to go forward, you will need at least a basic familiarity with using the command line. You will also need to have npm installed. To check, enter npm -v at the command line. If you have it, you will get a version number in response. If you don’t already have it, instructions for downloading and installing it are found here.

So create a directory where you will install it:
`mkdir my-app && cd my-app`

Then run the following command:
`npx sv create .`

This will ask you a series of questions. We’ll start off with these answers:
Okay to proceed? (y)
Which template would you like? — (SvelteKit minimal)
Add type checking with TypeScript? (choose no)

Then it will ask if you want to add any of a whole series of features to your project. For now, just hit enter so as not to add any of them.

Then it asks "Which package manager do you want to install dependencies with?" Hit enter to accept the default of npm.

Now wait for a moment while needed software is installed. Then you can enter

`npm run dev -- --open`

and your skeleton app will open in a new browser window, at localhost:5173. (A different port may be specified). It doesn’t do much yet—just says “Welcome to SvelteKit.”

<img class="flt_r" src="/VS_Code_1.35_icon.svg.png" alt="Visual Studio Code logo" />

Now, of course, you will want to explore and edit the files that have been created. There are many editors that have settings for Svelte available, and if you have a favorite, feel free to use it. But the most popular with Svelte users is [VS Code](https://code.visualstudio.com/).

You will want to install the extension “Svelte for VS Code” and perhaps “Svelte Intellisense.” It also helps to go to settings, Text Editor, Suggestions, and disable Accept Suggestion on Commit Character. Then take a little time to read or watch a tutorial on using it and become familiar with it. Most of the basic are easy, but it is amazingly full-featured.

Take a look at the directory structure that has been created for you. At the top level are a configuration file, a readme, and a couple of .json files. A helpful .gitignore file is in place for users of git. The node_modules directory contains a suprisingly large number of packages that can be used by your app. Ignoring the .svelte-kit directory, the two remaining directories are where you will do all your work: src and static.

The static directory holds static assets such as image files or global CSS files that can be included in your app. They can be referenced as if at the top level of your app—for example, an img.jpg file contained there can be referenced simply as `/img.jpg`.

The src directory is where you will do essentially all your coding. Initially, it contains an app.html file, which holds the basic html code for your app (but which you mostly won’t need to modify), and a routes directly.

Currently, the routes directory contains just one file, `+page.svelte`. This is the home page of our app. All pages are required to have this rather odd name. Open it in your editor and you will see the source code for the contents displayed in your browser. Try adding a third line of code, say,

`<h2>It’s going to be great!</h2>`

and, with the browser window showing, hit Save in your editor. Bingo! In a flash, your browser window updates to show your updated code. This hot updating is one of the features that makes coding in SvelteKit a pleasure.

Let’s add an About page. The route `about` is produced simply by creating an `about` subdirectory and adding a `+page.svelte` file there. Do that, and enter the following code in your new page file:

```html
<h1>About My App</h1>
<p>This is a work in progress.</p>
```

Save, and then navigate in your browser to `localhost:5173/about` and you will see your new page.

Web pages typically have a header, a footer, and some common CSS. These can be added to our pages by having a  file in our routes directory with the special name `+layout.svelte`. Navigate to that file, and replace its contents with the following code:

```javascript
<script>
    let { children } = $props();
</script>
```
``` html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main>
    {@render children()}
</main>
```
```css
<style >
:global(body) {
    margin: 1em 3em;
    background-color: antiquewhite;
}
nav {
    font-size: 1.5em;
    padding: 1em;
    background-color: tan;
}
nav a {
    padding-right: 3em;
}
</style>
```

When you save this, you will see a sudden transformation of your page. You now have a simple menu that lets you move between your two pages, and a background color.

Looking at the code we added, we see several items of interest. First, there is the `let { children } = $props();` statement. This looks for a parameter named `children` being passed. This value is then used in the `{@render children()}` statement. When the user navigates to a page, that page is paased to the layout file to be treated as a child of the `+layout.svelte` component.

Next, we see that the `<style>` section follows the HTML code. There are three basic sections in a .svelte file—a script section, an HTML section, and a style section (but no more than one of each). These can be placed in any order, but the tutorials use the order just listed.

Third, the first line in the style section is

`:global(body) {`

Styles in a .svelte file are scoped to that file. This eliminates the many problems found in CSS files that can run to thousands of lines, that can lead to hard-to-find bugs in styling. If you have a lot of global styles, they can be put in a stylesheet linked in the head of the HTML file (either in app.html or in your `+layout.svelte` file in a `<svelte:head>` section. However, a style can be made global by embedding it in `:global()`.

Another remarkable feature of styles in Svelte is that unused styles are pruned away, and a warning message is given. This is great when bringing in a huge stylesheet (like BootStrap) where you may be using just a few of the styles. In our case, putting in `body` without the `:global` wrapper gave me a warning message saying that body was unused, and so the style was not applied. That alerted me that I needed it to be global so that it would be applied.

SvelteKit can use your favorite preprocessors with no problem—TypeScript, CoffeScript, Markdown, Pug, Less, Sass, PostCSS, Stylus, and more. Details will be given in my upcoming post on how I built this blog.

Svelte is used to create reusable components. Let’s add a simple Footer component to our nascent app. Create a directory under `src` called `components`. There’s nothing special about that name; you could call it whatever you like. Create a file in that directory called `Footer.svelte`, and add the following code:

```js
<script>
  let { author } = $props();
</script>
```
```html
<footer>
<p>Copyright &copy; { new Date().getFullYear() } 
    {#if (author > '')}  
        by { author }
    {/if} 
</p>
</footer>
```

```css
<style>
    p {
        color: antiquewhite;
    }
    footer {
        background-color: darkgoldenrod;
        padding: 2em;
        text-align: center;
    }
< /style>
```


(Please delete the space in `< /style>`; some bug won't let me remove it).

The `$props()` statement lets us pass properties, or props, from the calling parent. The line with the word Copyright demonstrates that we can evaluate arbitrary Javascript between the curly braces and have the result injected into the HTML. If its value changes, the HTML will change as well. The `{if}` and `{/if}` statements allow the inclusion of HTML to be optional. (There is also an `:else` statement).

Note that in the style section, we have set the color for p elements in the Footer as antiquewhite. Because styles are scoped, this cannot bleed into other areas of our app but applies only to p elements in this component.

Now return to `+layout.svelte`, and we’ll import and use this component. Add the following line to the `<script>` section of the file:

`import Footer from '../components/Footer.svelte';`

Then, just below the `</main>` line, add the following line of code (replacing my name with yours):

`<Footer author="Wahhab Baldwin" />`

Voila! We now have a colorful footer on each of our pages. If you replace the Footer invocation with just a plain `<Footer />` statement, you will see that the word “by" goes away on the footer because of the `#if` block.

Congratulations! You’ve created a basic SvelteKit app. Of course, we’ve just scratched the surface of all there is to SvelteKit. The next post will pick up from here and go a bit deeper, learning about getting data from endpoints. See you there!

[Next→](kit2)