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
  default: () => Sveltekit
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../../chunks/index-5d44e6de.js");
const Sveltekit = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>SvelteKit with MySQL</title>`, ""}<meta name="${"description"}" content="${"Use MySQL in SvelteKit using Prisma."}" data-svelte="svelte-1xoo5bd">`, ""}

<h1>Using Prisma to use MySQL in SvelteKit</h1><p>TODO...</p>`;
});
