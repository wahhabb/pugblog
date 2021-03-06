export const e1j = `import Calculator from "./Calculator.svelte";

var div = document.createElement("div");
var script = document.currentScript;
script.parentNode.insertBefore(div, script);

const embed = new Calculator({
  target: div,
  props: { calcFontSize: calcFontSize },
});`;

export const e1h = `<!DOCTYPE html>
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
    </script>
    <script src="calc.js"></script>
    <p>Below this line is a Calculator with font size of 16px.</p>
    <script>
      calcFontSize = "16px";
      </script>
    <script src="calc.js"></script>

    <p>This text will come after the embedded content.</p>
</body>
</html>`;

export const e2j = `import svelte from "rollup-plugin-svelte";
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
