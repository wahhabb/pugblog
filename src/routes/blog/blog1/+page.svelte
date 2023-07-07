<script>
	import Prism from '$lib/components/PrismJS.svelte';
	import { b1j, b2j, b3h, b3c, b4m, b5h } from './blog1code.js';
</script>

<svelte:head>
	<title>Making a Blog in SvelteKit – 1</title>
	<meta name="description" content="Create a blog using SvelteKit--Introduction" />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  Making a Blog in SvelteKit &ndash; Part 1
img.flt_r(src="/images/blog_image.jpg"  alt="Blog (design by geralt)") 
p. 
    SvelteKit can be used for creating many kinds of websites. Most typically, they would be sites with various kinds of behaviors, access to real-time data, etc. rather than static sites. At first glance, blogs don’t seem like the best target for SvelteKit.
p.
    Indeed, there are several other tools for building blogs that might be better suited. WordPress is the obvious choice, and although it has its disadvantages, in 2023, 43.2% of the web is powered by WordPress.
p.
    Another great tool for blogs is Eleventy. It provides some of the same benefits as SvelteKit, and is more specifically oriented towards blogs and other sites with static text.
p.
    But we’re exploring SvelteKit, and it is no slouch at producing blogs. There are already a few sites online that go through producing a blog with SvelteKit, so my purpose here will be to go into more depth and show more possibilities. To keep that from becoming tedious, I will break it up into several posts. This post will focus on some basic choices, and get you to the point of having a blog. Subsequent posts will create useful Svelte components for our blog and automate some steps of adding posts.
h2  Let’s Get Started!
p.
    Enough introduction! Here we go. Our first step is to decide how blog posts will be generated. 
p.
    Of course, posts could simply be written in HTML, but that is probably not the efficient way to produce a post, even though it does provide maximum control. A second option is to write the post in Microsoft Word (or other program that generates a .doc file) and convert it to HTML using a tool like <a href="https://www.zamzar.com/convert/doc-to-html/">Zamzar</a> online word-to-html conversion. This is OK, but it doesn’t generate H1, H2, H3 tags, and has very limited ability to include anything other than texxt and image content.
p.
    There are <a href="https://htmlg.com/html-editor/">online HTML editors</a> that can generate HTML using a TinyMCE-like toolbar. Another approach is to use a headless CMS, like Strapi or Ghost, to generate and hold the HTML. This has the benefit of making editing any given page easy, since the page is already available in WYWIWYG form, but the disadvantage that the content may need to be fetched when the page is loaded by a user.
p.
    However, there are two other approaches to generating content that provide some benefits, and those are the two we will explore here. The first is using Markdown, a simple markup language that can easily be learned by non-technical users to generate pages. The second is to use Pug, an easier and more readable way way to generate HTML that does everything that HTML doesn’t. Both of these approaches make it easy to include Svelte components within a page, which is certainly something we want with SvelteKit. 
h2  Step One
p.
    As usual, create a directory to hold your blog, navigate to it from the command line, and enter (selecting Skeleton project)
pre.
    npm create svelte@latest .
p.
    (You can also use the recommended git steps if you choose).
p.
    Under src/routes, add another directory &ndash; to be creative, we’ll call it blog. Within blog, we’ll add a directory called post1. 
p.
    Let’s write our first post! We’ll do it using Markdown. However, we need to get our site ready to use that. svelte-preprocess provides support for many preprocessors, such as SCSS, Less, Stylus, PostCSS, Coffeescript, Pug, and Markdown! To use it, we will import it to svelte.config.js, and add a !{cd}preprocess:!{ecd} entry to config. To preprocess Markdown, we’ll use mdsvex, a markdown preprocessor for Svelte. Let’s install svelte-preprocess first:
pre.
    npm install -save-dev svelte-preprocess
p.
    Now we need to let SvelteKit know to use mdxvex. In your root folder, add a file called mdsvex.config.js, with the following code:
<Prism language="js" code={b1j}  />
p.
    Next, we’ll update our svelte.config.js file:
<Prism language="js" code={b2j}  />
p.
    We’ve referenced mdsvex here, but we haven’t installed it yet. We’ll take care of that now:
pre.
    npx svelte-add@latest mdsvex
p.
    At this point, you can go ahead and enter
pre npm run dev -- --open
p.
    and the minimal home page will come up.
h2  Style Our Blogs
p.
    Before we start adding posts, let’s create at least a minimal amount of styling for them. We’ll do that in a way that won’t affect other pages in this website, by creating a file in /src/routes/blog called +layout.svelte. This special name means it will wrap every page in this or child directories. Here’s an example layout page to use. It will include a sidebar which eventually will contain links to recent posts. 
<Prism language="html" code={b3h}  />
p   We also need to place a css file, blog.css, in /src/static:
<Prism language="css" code={b3c}  />
p.
    Now that we have the support we need to display our blogs, it’s time to add one. There are several approaches to doing this. Let’s start with the approach we already know. Create the directory /src/routes/blog/post1, and add a file +page.md. The entry we made above in mdsvex.config.js tells the compiler that .md is a markdown suffix. Here’s some content for this page you can insert that I based on the Wikipedia article on Svelte:
<Prism language="markdown" code={b4m} />
p.
    At this point, you can navigate your browser page showing your SvelteKit home page to /blog/post1, and you will see your blog page, complete with sidebar menu and selected fonts.
p.
    Of course, we also want the ability to include Svelte components on our page. In the same directory as our blog post, create a file called copyright.svelte with the following code:
<Prism language="html" code={b5h} />
p.
    Now go to the bottom of +page.md and add the single line
pre &lt;Copyright />
p.
    and you will see the italicized copyright message appear at the bottom of your blog page.
p.
    However, this page has a number of problems. It does not have a useful title, and has no meta description for search engines to display. Also, there is no metadata for this post, such as date, author, publication status, or tags or categories. And we have no automated mechanism for creating the menu of posts. To fix all this, we’ll need to make some changes. We’ll go into that and more on my next post.

</template>