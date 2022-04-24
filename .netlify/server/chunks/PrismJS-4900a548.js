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
  P: () => PrismJS
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("./index-5d44e6de.js");
const PrismJS = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  let { language } = $$props;
  let { code } = $$props;
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"/prism-1.css"}" data-svelte="svelte-1w44fc9"><style data-svelte="svelte-1w44fc9">pre[class*='language-'] {
			margin-bottom: 0;

			border-radius: 0em;
		}
		pre[class*='language-'] + pre[class*='language-'] {
			margin: 0;
		}
		pre[class*='language-'] + p {
			padding-top: 1em;
		}
	</style>`, ""}

<pre><code class="${"language-" + (0, import_index_5d44e6de.e)(language)}">${(0, import_index_5d44e6de.e)(code)}</code></pre>`;
});
