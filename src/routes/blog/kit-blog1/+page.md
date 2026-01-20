<svelte:head>
	<title>Making a Blog in SvelteKit – 1</title>
	<meta name="description" content="Create a blog using SvelteKit--Introduction" />
</svelte:head>


# Making a Blog in SvelteKit – Part 1

<img class="flt_r" src="/blog_image.jpg"  
    alt="Blog (design by geralt)"  style="width:50%"  />

SvelteKit can be used for creating many kinds of websites. Most typically, they would be sites with various kinds of behaviors, access to real-time data, etc. rather than static sites. At first glance, blogs don’t seem like the best target for SvelteKit.

Indeed, there are several other tools for building blogs that might be better suited. WordPress is the obvious choice, and although it has its disadvantages, about 43.5% of the web is powered by WordPress.

Another great tool for blogs is Eleventy. It provides some of the same benefits as SvelteKit, and is more specifically oriented towards blogs and other sites with static text.

But we’re exploring SvelteKit, and it is no slouch at producing blogs. There are already a few sites online that go through producing a blog with SvelteKit, so my purpose here will be to make sure the code is current, and hopefully to go into more depth and show more possibilities. To keep that from becoming tedious, I will break it up into several posts. This post will focus on some basic choices, and get you to the point of having a blog. Subsequent posts will create useful Svelte components for our blog and automate some steps of adding posts.

## Let’s Get Started!
    
Enough introduction! Here we go. Our first step is to decide how blog posts will be generated.

Of course, posts could simply be written in HTML, but that is probably not the efficient way to produce a post, even though it does provide maximum control. A second option is to write the post in Microsoft Word (or other program that generates a .doc file) and convert it to HTML using a tool like [Zamzar](https://www.zamzar.com/convert/doc-to-html/) online word-to-html conversion. This is OK, but it doesn’t generate H1, H2, H3 tags, and has very limited ability to include anything other than text and image content.

There are [online HTML editors](https://htmlg.com/html-editor/) that can generate HTML using a TinyMCE-like toolbar. Another approach is to use a headless CMS, like Strapi or Ghost, to generate and hold the HTML. This has the benefit of making editing any given page easy, since the page is already available in WYWIWYG form, but the disadvantage that the content may need to be fetched when the page is loaded by a user, slowing down page retrieval. WordPress itself can be used as a headless CMS and offers APIs to retrieve page content.

However, there are two other approaches to generating content that provide some benefits, and those are the two we will explore here. The first is using Markdown, a simple markup language that can easily be learned by non-technical users to generate pages. The second is to use Pug, an easier and more readable way way to generate HTML with additional features. Both of these approaches make it easy to include Svelte components within a page, which is certainly something we want with SvelteKit.

## Step One

As usual, create a directory to hold your blog, navigate to it from the command line, and enter (selecting Skeleton project)

`npx sv create .`

However, this time, when you reach the step where it gives you the long list of options you might want, use the down-arrow key to get to `mdsvex` and hit the space key to select it. You will notice that this word includes a mashup of md (for Markdown) and sv (for Svelte).

Under `src/routes`, add another directory – to be creative, we’ll call it `blog`. Within `blog`, we’ll add a directory called `post1`.

Before we can write our first post using Markdown. we need to get our site ready to use it. `svelte-preprocess` provides support for many preprocessors, such as SCSS, Less, Stylus, PostCSS, Coffeescript, Pug, and Markdown! 

So we need to make an adjustment to the file `svelte.config.js` to tell it what to do. We'll use `'md'` as a suffix on Markdown files. After the import statements, add the lines

```js
const mdsvexOptions = {
    extensions: ['.md']
};
```
Change the `preprocess:` and `extionsions:` lines to read

```js
    preprocess: [mdsvex(mdsvexOptions)],
    extensions: ['.svelte', '.svx', '.md']
```

This allows us to include Markdown files in our project. Let's try it.
Go ahead and enter

`npm run dev -- --open`

and the minimal home page will come up.

Now let's give it a try. Within the `post1` directory created above, add a file named `+page.md`. Put some minimal content in it: say

```md
# A Markdown Page

This wasn't *that* hard!
```

Navigate from the open home page to `localhost:5153/blog/post1` and admire your first entry.

To make it easier to get to this page, edit the `+page.svelte` file for the home page. Replace the second line (that starts with a `p` tag) by

```html
h2>See my <a href="/blog/post1">First blog post</a></h2>
```

## Style Our Blogs

Before we start adding meaningful posts, let’s create at least a minimal amount of styling for them. We’ll do that in a way that won’t affect other pages in this website, by creating a file in `/src/routes/blog` called `+layout.svelte`. This special name means it will wrap every page in this or its child directories. Here’s an example layout page to use. It will include a sidebar which eventually will contain links to recent posts.

```js
<!-- This is adapted from a W3 Schools tutorial. -->
  <script>
    let { children } = $props();
  </script>
```
```html
<svelte:head>
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
    <a href="../../">Home</a>
    <a class="active" href="#top">Post 1</a>
    <a href="#top">Future Blog Entry</a>
    <a href="#top">Another Future Blog Entry</a>
  </div>
  
  <!-- Page content -->
  <div class="content">
     {@render children()}
  </div> 
```

We also need to place a css file, `blog.css`, in `/src/static`:

```css
/* Fonts */
  .content {
    font-family: "Alegreya", serif;
    font-size: 120%;
    line-height: 1.4;

    h1,
    h2,
    h3,
    h4 {
      font-family: "Roboto", sans-serif;
    }
  }
  /* The side navigation menu */
  .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
  }
  
  /* Sidebar links */
  .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }
  
  /* Active/current link */
  .sidebar a.active {
    background-color: #04aa6d;
    color: white;
  }
  
  /* Links on mouse-over */
  .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
  
  /* Page content. The value of the margin-left property should match the value of the sidebar's width property */
  div.content {
    margin-left: 200px;
    padding: 1px 3em;
    height: 1000px;
  }
  
  /* On screens that are less than 700px wide, make the sidebar into a topbar */
  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {
      float: left;
    }
    div.content {
      margin-left: 0;
    }
  }
  
  /* On screens that are less than 400px, display the bar vertically, instead of horizontally */
  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }
```

We'll load the fonts from Google Fonts. To do this, add the following three lines of code to `app.html` just before the line that reads `	%sveltekit.head%`

```html
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">	
```
Now that we have the support we need to display our blogs, we're ready to add one. There are several approaches to doing this, but we'll start with the approach we already know. In the directory `/src/routes/blog/post1`,  replace the contents of `+page.md` with some content that I based on the Wikipedia article on Svelte:

```markdown
# Svelte

  From Wikipedia, the free encyclopedia
  
  _For a definition of the term "svelte", see the Wiktionary entry svelte._
  
  **Svelte** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as [virtual DOM](https://en.wikipedia.org/wiki/Virtual_DOM), unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.
  
  The compiler itself is written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript). Its source code is licensed under MIT License and hosted on GitHub.
  
  ## History
  
  The predecessor of Svelte is Ractive.js, which Rich Harris had developed earlier.
  
  Version 1 of Svelte was written in JavaScript and was released on 29 November 2016. It was basically Ractive with a compiler. The name Svelte was chosen by Rich Harris and his coworkers at _[The Guardian](https://en.wikipedia.org/wiki/The_Guardian)_.
```

At this point, you can navigate your browser page showing your SvelteKit home page to /blog/post1, and you will see your blog page, complete with sidebar menu and (perhaps) selected fonts. We'll say more about use of fonts in SvelteKit in a later post.

Of course, we also want the ability to include Svelte components on our page. Normally, a copyright statement would be part of the layout file, but to demonstrate, we'll use the component in our Markdown file. In the same directory as our blog post, create a file called `copyright.svelte` with the following code:

```html
<p>This blog copyright &copy; {new Date().getFullYear()} by Wahhab.</p>
<style>
    p {
        text-align: center;
        font-style: italic;
    }
</style>
```
At the top of `+page.md` import this file:

```js
<script>
    import Copyright from "./copyright.svelte"
</script>
```

Now go to the bottom of `+page.md` and add the single line

`<Copyright />`

and you will see the italicized copyright message appear at the bottom of your blog page. In a real project, of course, the copyright component would be kept in a directory like `$lib/components`.

However, this page still has a number of problems. It does not have a useful title, and has no meta description for search engines to display. Also, there is no metadata for this post, such as date, author, publication status, or tags or categories. And we have no automated mechanism for creating the menu of posts. To fix all this, we’ll need to make some changes. We’ll go into that and more on my [next post](kit-blog2).


[Next→](kit-blog2)
