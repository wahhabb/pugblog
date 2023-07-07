export const b1j = `<script>
export const config = {
    extensions: ['.svx', '.md'],
    smartypants: {
        dashes: 'oldschool',
    },
};
</script>
`;

export const b2j = `import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  preprocess: 
    mdsvex(mdsvexConfig)
};

export default config;
`;
export const b3h = `<!-- This is adapted from a W3 Schools tutorial. -->

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,700;1,700&display=swap" 
    rel="stylesheet"> 
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
    <a href="../../">Home</a>
    <a class="active" href="#top">Svelte</a>
    <a href="#top">Future Blog Entry</a>
    <a href="#top">Another Future Blog Entry</a>
  </div>
  
  <!-- Page content -->
  <div class="content">
   <slot></slot>
  </div> `;

export const b3c = `/* Fonts */
  .content {
    font-family: "Alegreya", serif;
    font-size: 120%;
    line-height: 1.4;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Roboto", sans-serif;
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
  }`;

export const b4m = `# Svelte

  From Wikipedia, the free encyclopedia
  
  _For a definition of the term "svelte", see the Wiktionary entry svelte._
  
  **Svelte** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as [virtual DOM](https://en.wikipedia.org/wiki/Virtual_DOM), unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.
  
  The compiler itself is written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript). Its source code is licensed under MIT License and hosted on GitHub.
  
  ## History
  
  The predecessor of Svelte is Ractive.js, which Rich Harris had developed earlier.
  
  Version 1 of Svelte was written in JavaScript and was released on 29 November 2016. It was basically Ractive with a compiler. The name Svelte was chosen by Rich Harris and his coworkers at _[The Guardian](https://en.wikipedia.org/wiki/The_Guardian)_.`;

export const b5h = `<p>This blog copyright &copy; {new Date().getFullYear()} by Wahhab.</p>
<style>
    p {
        text-align: center;
        font-style: italic;
    }
</style>`;
