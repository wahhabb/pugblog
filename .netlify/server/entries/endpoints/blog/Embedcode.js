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
  e1h: () => e1h,
  e1j: () => e1j,
  e2j: () => e2j
});
module.exports = __toCommonJS(stdin_exports);
const e1j = `import Calculator from "./Calculator.svelte";

var div = document.createElement("div");
var script = document.currentScript;
script.parentNode.insertBefore(div, script);

const embed = new Calculator({
  target: div,
  props: { calcFontSize: calcFontSize },
});`;
const e1h = `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Demo page</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      body {
        margin: 3em;
      }
      p {
        color: green;
      }
    </style>
    </head>
  <body>
    <h1>Svelte Embedding Demo</h1>
    <p>
      Below, we have inserted a <code>script</code> tag that should render a
      Svelte Calculator component upon loading this page. Its font size is set
      to 10px.
    </p>

    <script>
      calcFontSize = "10px";
    <\/script>
    <script src="calc.js"><\/script>
    <p>Below this line is a Calculator with font size of 16px.</p>
    <script>
      calcFontSize = "16px";
      <\/script>
    <script src="calc.js"><\/script>

    <p>This text will come after the embedded content.</p>
</body>
</html>`;
const e2j = `import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "embed.js",
  output: {
    format: "iife",
    file: "calc.js",
    sourcemap: false,
  },
  plugins: [
    svelte({ emitCss: false }),
    resolve({ browser: true, dedupe: ["svelte"] }),
  ],
};`;
