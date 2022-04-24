var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../chunks/index-5d44e6de.js");
const Routes = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Deep Web Works--Svelte/Sveltekit Blog</title>`, ""}<meta name="${"description"}" content="${"Wahhab Baldwin's blog shares his exploration of Svelte/Sveltekit."}" data-svelte="svelte-h9erng">`, ""}

<h1>Svelte/SvelteKit </h1><img class="${"flt_r"}" src="${"/Wahhab-Baldwin.jpg"}" alt="${"Wahhab Baldwin"}"><p>Hi! I&#39;m Wahhab Baldwin, founder of Deep Web Works. After working for decades as a 
 software developer and manager, including at Microsoft, 
 I mostly retired, but ran this small web development company. 
 Now that I&#39;ve retired for good, I&#39;ve decided to use my website to share my adventures with 
 Svelte and SvelteKit. I hope you&#39;ll find it useful, and I welcome your <a href="${"/contact"}">feedback</a>.</p><h2>Who Is This Site For?</h2><p>I&#39;m writing for people somewhat like me\u2014familiar with web development and JavaScript, who 
 are either interested in dipping their toes into Svelte/SvelteKit, or who have been 
 exploring it but would like to know more. You will need to be able to use a command line 
 and to have <a href="${"https://nodejs.dev/download/"}">Node.js and npm </a> installed on your 
 computer to follow my code examples.</p><h2>So What Are Svelte and SvelteKit?</h2><img class="${"flt_l"}" src="${"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"}" height="${"90"}" alt="${"Svelte Logo"}"><p>As you likely know, <a href="${"https://svelte.dev/"}">Svelte</a> is a framework for building 
user interfaces. JavaScript based,
it is compared to React and Vue. Unlike these, however, it is a compiler, does not use a 
shadow DOM, or link in a run-time library, making it small and fast. It is also much easier
to learn. StackOverflow&#39;s recent survey showed Svelte as the most-loved web framework.
</p><p><a href="${"https://kit.svelte.dev/"}">SvelteKit</a> is a framework for building web 
applications that provides routing, server-side 
rendering, code-splitting, and more. It is comparable to Next or Nuxt in React and Vue. It
makes it quick and easy to develop sites (like this one!) with a great developer experience.
It replaces Sapper, an earlier tool. 
</p><p>While these are wonderful tools, they are relatively new. Svelte&#39;s initial release was
at the end of 2016. In the 2021 State of JS rankings for 
Front-End Frameworks, Usage for React is 80%, for Angular 54%, for Vue 51%, but for Svelte 
only 20%. However, the satisfaction level for Svelte is 90%, higher than any of the others.
SvelteKit is in active use on websites including nytimes.com and svelte.dev itself, but 
it has not yet issued a 1.0 release. Despite this shortcoming, however, I am convinced 
that Svelte and SvelteKit will grow rapidly and become a major force in web development.
In any event, I am having fun learning and using it!
</p><h2>Let&#39;s Get Started!</h2><p></p> Svelte has a <a href="${"https://svelte.dev/tutorial/basics"}">great tutorial</a>, but let me <a href="${"/blog/calc"}">walk you through building a calculator component</a> that you can put anywhere on your site.<p></p> SvelteKit&#39;s tutorial is not yet ready for prime time. Learn how to <a href="${"/blog/sveltekit"}">build a SvelteKit site that uses a MySQL database</a>.<p>This site is built using SvelteKit on the Jamstack. It is hosted (free of charge!) by Netlify.
Learn about <a href="${"/blog/mysite"}">how I built it</a>. </p>`;
});
