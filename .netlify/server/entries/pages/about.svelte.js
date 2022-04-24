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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../chunks/index-5d44e6de.js");
var import_PrismJS_4900a548 = require("../../chunks/PrismJS-4900a548.js");
const About = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  let code_sample = `
# Create a function to print squares of numbers in sequence.
new.function <- function(a) {
   for(i in 1:a) {
      b <- i^2
      print(b)
   }
}

# Call the function new.function supplying 6 as an argument.
new.function(6)
`;
  let cb1 = `<script>
	export let width = "";
	export let use = "number";
<\/script>`;
  return `${$$result.head += `${$$result.title = `<title>Prism Syntax Highlighter Example</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-12eciti">`, ""}

<h3>Eddie Florea - viper6277@gmail.com</h3>

<p>Generate stylish code blocks with <a href="${"https://prismjs.com//"}">PrismJS</a></p>

${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, {
    language: "javascript",
    code: code_sample,
    header: "Sample JS Code"
  }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, {
    language: "javascript",
    code: cb1,
    header: "Sample JS Code"
  }, {}, {})}`;
});
