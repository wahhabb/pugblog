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
  default: () => Embed
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../../chunks/index-5d44e6de.js");
var import_PrismJS_4900a548 = require("../../../chunks/PrismJS-4900a548.js");
var import_Embedcode = require("../../endpoints/blog/Embedcode.js");
const Embed = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Embedding a Svelte Component</title>`, ""}<meta name="${"description"}" content="${"Embed our calculator component into your existing website."}" data-svelte="svelte-glr07s">`, ""}

<h1>Embed Our Svelte Calculator Component into Your Existing Website</h1><img class="${"flt_r bdr_1"}" src="${"/demo.png"}" alt="${"demo page of embedded components"}"><p>If you have followed the instruction in my previous post, you now have five tabs
in Svelte&#39;s REPL labeled App.svelte, Calculator.svelte, 
Calcbtn.svelte, Display.svelte, and stores.js. 
(If you do not have these, you can pull them from 
<a href="${"https://github.com/wahhabb/calc"}">my Github repository</a>
in the svelte-app directory).</p><p>Click on the Download icon on the gray bar near the top of the REPL page, and a Zip file 
will be put in your downloads folder. Unzip this file, and open the src directory.
That will contain your five source files plus a main.js file, which you can delete.
You can also delete App.svelte.
Move the four remaining files into a directory where you will do this embedding project
and cd into that directory.</p><p>You will need npm to install the software tools needed for this project. If you don&#39;t 
already have it, or are unsure, instructions for downloading and installing it are found 
<a href="${"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"}">here</a>.</p><p>Now we&#39;re ready to start building the .js file for our calculator component that 
can be imported into conventional web pages. I offer appreciation to 
<a href="${"https://codeandlife.com/2021/03/06/easy-to-embed-svelte-components/"}">Code and Life</a>
for the technique used here, also described 
<a href="${"https://typeofnan.dev/how-to-set-up-a-svelte-app-with-rollup/"}">here</a>. </p><p>Rollup is a module bundler used to compile chunks of JavaScript into a library or
application. It is used by Svelte to do the build, so you need to install it (if you 
haven&#39;t already). Do that by entering the following line at your terminal: </p><p><span class="${"code"}">npm install --save-dev rollup</span></p><p>This installs it and marks it as a development dependency. Next, enter <br><span class="${"code"}">npm init</span></p><p>This will ask you several questions, which you can answer or just hit return to 
accept defaults. This step will generate a package.json file. 
Next, we&#39;ll install Svelte and two rollup plugins:</p><p><span class="${"code"}">npm install --save-dev svelte</span><br>
<span class="${"code"}">npm install --save-dev rollup-plugin-svelte</span><br>
<span class="${"code"}">npm install --save-dev @rollup/plugin-node-resolve</span><br> </p><p>Now we are ready to create a small JavaScript file that will import our Calculator
component and inject it into the webpage where we want it to be displayed. We&#39;ll
call it embed.js. Here&#39;s the code:</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Embedcode.e1j }, {}, {})}<p>In order to run rollup, we will give it a config file so it knows what we want it to 
do. Create a file called rollup.config.js, and enter the following code into it:</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Embedcode.e2j }, {}, {})}    <p>The output file (calc.js) is what we will invoke in our HTML program to produce 
our component. The output format of &quot;iife&quot; stands for immediately-invoked 
function expression.
You can learn more about Rollup configuration files (and other features) 
<a href="${"https://rollupjs.org/guide/en/#configuration-files"}">here</a>.</p><p>Now we&#39;re ready to run rollup, passing it our configuration file:</p><p><span class="${"code"}">rollup -c rollup.config.js</span></p><p>This should give you a message like <span class="${"code"}">created calc.js in 465ms</span>.</p><p>Next, we&#39;ll create a simple HTML page into which we will import two Calculator 
   instances of different sizes, as a stand-in for your own web page where you want 
   to import a Svelte component. It doesn&#39;t need to be in the same directory as 
   our embed code, but we&#39;ll put it there for convenience right now:

${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Embedcode.e1h }, {}, {})}</p><p>As you see, we invoke our component with the line</p><p><span class="${"code"}">&lt;script src=&quot;calc.js&quot;&gt;&lt;/script&gt;</span></p><p>and we can set the (global, in this case, for simplicity) variable 
<span class="${"code"}">calcFontSize</span> to be passed through as a prop to the component.</p><p>At this point, we&#39;re ready to try it out! Double-click on the file demo.html 
that you created, and check it out. It should look like the screenshot at 
the top of this page. Congratulation! You have embedded a Svelte component 
into a standard HTML page.</p><p>If you run into difficulties, you are welcome to download the source files 
for this post at </p>`;
});
