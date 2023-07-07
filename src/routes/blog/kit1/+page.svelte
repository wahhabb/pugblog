<script>
	import Prism from '$lib/components/PrismJS.svelte';
	import { k1h, k2h, k2s, k3h, k3s, k4j, k4h } from './kit1code.js';
</script>

<svelte:head>
	<title>SvelteKit 1&mdash;Getting Started</title>
	<meta name="description" content="Embed our calculator component into your existing website." />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  SvelteKit 1&mdash;Getting Started with SvelteKit
img.flt_r(src="/svelte-kit-machine.jpg"  alt="SvelteKit Machine") 
p. 
    This post will give you a basic introduction to SvelteKit and walk you through building 
    a basic SvelteKit website. If you already know how to do this, you can probably skip this 
    post and go to one of the subsequent ones. Alternately, you can go to 
    <a href="https://kit.svelteHTML.dev">kit.svelte.dev</a> both to learn more about 
    what SvelteKit does and how to use it.
h2  What Is SvelteKit? 
p.  
    According to their website, “SvelteKit is a framework for building web applications of 
    all sizes, with a beautiful development experience and flexible filesystem-based routing.
p.
    “Unlike single-page apps, SvelteKit doesn’t compromise on SEO, progressive enhancement 
    or the initial load experience — but unlike traditional server-rendered apps, navigation 
    is instantaneous for that app-like feel.”

h2  Let’s Learn by Doing!
p. 
    In order to go forward, you will need at least a basic familiarity with using the command 
    line. You will also need to have npm installed. To check, enter !{cd}npm -v!{ecd} at the 
    command line. If you have it, you will get a version number in response. 
    If you don’t already have it, instructions for downloading and installing it are found 
    <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">here</a>.
p. 
    So create a directory where you will install it:<br>
    !{cd}mkdir my-app && cd my-app!{ecd}<br>
    <br>
    Then run the following command:<br>
    !{cd}npm create svelte@latest .!{ecd}<br>
    <br>
    This will ask you a series of questions. We’ll start off with these answers:<br>
    Where should we create your project? <i>(Return)</i>.<br>
    Which Svelte app template? &mdash; <i>(Skeleton project)</i><br>
    Then it will ask if you want to use TypeScript, ESlint, Prettier, and Playwright. 
    For now, we won’t use TypeScript (choose <i>None</i>), and you can reply No to the 
    other three questions as well.
p. 
    Next, enter !{cd}npm install!{ecd} and wait for a moment while needed software is installed.
    Then you can enter <br>
    !{cd}npm run dev -- --open!{ecd} <br>
    and your skeleton app will open in 
    a new browser window, at localhost:5173. (A different port may be specified).
    It doesn’t do much yet&mdash;just says “Welcome to SvelteKit.”
img.flt_r(src="/VS_Code_1.35_icon.svg.png" alt="Visual Studio Code logo")
p. 
    Now, of course, you will want to explore and edit the files that have been created. 
    There are many editors that have settings for Svelte available, and if you have a favorite,
    feel free to use it. But the most popular with Svelte users is
    <a href="https://code.visualstudio.com/">VS Code</a>. 
p.
    You will want to install the extension “Svelte for VS Code” and perhaps “Svelte Intellisense.”
    It also helps to go to settings, Text Editor, Suggestions, and disable Accept Suggestion on 
    Commit Character. 
p.
    So take a look at the directory structure that has been created for you. At the top level are 
    a configuration file, a readme, and a couple of .json files. A helpful .gitignore file is in place
    for users of git. The node_modules directory contains a suprisingly large number of packages
    that can be used by your app. Ignoring the .svelte-kit directory, the two remaining directories
    are where you will do all your work: src and static.
p.
    The static directory holds static assets such as image files or global CSS files that can be
    included in your app. They can be referenced as if at the top level of your app&mdash;for 
    example, an img.jpg file contained there can be referenced simply as
    “/img.jpg”.
p.
    The src directory is where you will do essentially all your coding. Initially, it contains 
    an app.html file, which holds the basic html code for your app (but which you mostly won’t 
    need to modify), and a routes directly.
p.
    Currently, the routes directory contains just one file, +page.svelte. This is the home page
    of our app. All pages are required to have this rather odd name.
    Open it in your editor and you will see the source code of the contents
    displayed in your browser. Try adding a third line of code, say <br>
    !{cd}&lt;h2>It’s going to be great!&lt;/h2>!{ecd}<br>
    and, with the browser window showing, hit Save in your editor. Bingo! In a flash, your
    browser window updates to show your updated code. This hot updating is one of the 
    features that makes coding in SvelteKit a pleasure.
p.
    Let’s add an About page. The route “about” is produced simply by creating an about subdirectory and 
    adding an +page.svelte file there. Do that, and enter the following code in your new page file:
<Prism language="html" code={k1h}  />
p.
    Save, and then navigate in your browser to localhost:5173/about and you will see your new
    page.
p.
    Web pages typically have a header, a footer, and some common CSS. We can add that to our
    pages by creating a new file in our routes directory with the special name
     +layout.svelte. Create that, and add the following code:
<Prism language="html" code={k2h}  />
<Prism language="css" code={k2s}  />
p.
    When you save this, you will see a sudden transformation of your page. You now have a 
    simple menu that lets you move between your two pages, and a background color.
p.
    Looking at the code we added, we see several items of interest. First, there is the 
    !{cd}&lt;slot /&gt;!{ecd} tag. In general, Svelte uses slots as a placeholder for children
    of a component. In this case, our pages are treated like children of the +layout.svelte component.
p.
    Next, we see that the !{cd}&lt;style>!{ecd} section follows the HTML code. There 
    are three basic sections in a .svelte file&mdash;a script section, an HTML section, and
    a style section. These can be placed in any order, but the tutorials use the
    order just listed.
p.
    Third, the first line in the style section is <br>
    !{cd}:global(body) &lbrace;!{ecd}<br>
    Styles in a .svelte file are <i>scoped</i> to that file. This eliminates the many problems
    found in CSS files that can run to thousands of lines, that can lead to hard-to-find bugs
    in styling. If you have a lot of global styles, they can be put in a stylesheet linked
    in the head of the HTML file (either in app.html or in your +layout.svelte file in a 
    !{cd}&lt;svelte:head&gt;!{ecd} section.
    However, a style can be made global by embedding it in :global(). 
p.
    Another remarkable feature of styles in Svelte is that unused styles are pruned away,
    and a warning message is given.
    This is great when bringing in a huge stylesheet (like BootStrap) where you may be using
    just a few of the styles. In this case, putting in !{cd}body!{ecd} without the 
    !{cd}:global!{ecd} wrapper
    gave me a warning message saying that body was unused, and so the style was not applied. That
    alerted me that I needed it to be global so that it would be applied. 
p.
    SvelteKit can use your favorite preprocessors with no problem&mdash;TypeScript, CoffeScript,
    Markdown, Pug, Less, Sass, PostCSS, Stylus, and more. Details will be given in my upcoming 
    post on how I built this blog.
p.
    Svelte is used to create reusable components. Let’s add a simple Footer component 
    to our nascent app. Create a directory under src called components. There’s nothing
    special about that name; you could call it whatever you like. Create a file in
    that directory called Footer.svelte, and add the following code:
<Prism language="html" code={k3h}  />
<Prism language="css" code={k3s}  />
p.
    The !{cd}export!{ecd} statement is Svelte’s way of identifying that a variable is a 
    property, or prop, that is to be passed to the component. On the line with 
    the word Copyright, we see that we can include arbitrary JavaScript in our
    HTML within curly braces, and it will be evaluated when the page is rendered. 
    The next lines 
    show that chunks of HTML can be included or excluded based on logic.
    (There is also an !{cd}#else!{ecd} statement).
p.
    Note that in the style section, we have set the color for !{cd}p!{ecd} elements 
    in the Footer as !{cd}antiquewhite!{ecd}. Because styles are scoped, this 
    cannot bleed into other areas
    of our app but applies only to !{cd}p!{ecd} elements in this component.
p.
    Now return to +layout.svelte, and we’ll import and use this component. Add the 
    following three lines to the beginning of the file:
<Prism language="js" code={k4j}  />
p.
    Then, just below the !{cd}&lt;/main&gt;!{ecd} line, add the following line of code
    (replacing my name with yours):
<Prism language="html" code={k4h}  />
p.
    Voila! We now have a colorful footer on each of our pages. If you replace the Footer
    invocation with just a plain !{cd}&lt;Footer /&gt;!{ecd} statement, you will see that
    the word “by" goes away on the footer because of the !{cd}#if!{ecd} block.
p.
    Congratulations! You’ve created a basic SvelteKit app. Of course, we’ve just scratched the surface
    of all there is to SvelteKit. The 
    <a href="">next post</a> will pick up from here and go a bit deeper,
    learning about getting data from endpoints. See you there!

</template>

<style>
</style>
