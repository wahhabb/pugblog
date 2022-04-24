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
  default: () => Mysite
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../../chunks/index-5d44e6de.js");
const Mysite = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>How This Site Was Built</title>`, ""}<meta name="${"description"}" content="${"Using SvelteKit with Pug and Netlify\n        to build a blog."}" data-svelte="svelte-17n516x">`, ""}

<h1>How This Site Was Built</h1><h2>Building a blog with SvelteKit, Pug, and Netlify</h2><p>TODO...</p>`;
});
