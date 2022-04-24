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
  default: () => Calc
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5d44e6de = require("../../../chunks/index-5d44e6de.js");
var import_PrismJS_4900a548 = require("../../../chunks/PrismJS-4900a548.js");
var import_Calccode = require("../../endpoints/blog/Calccode.js");
const subscriber_queue = [];
function writable(value, start = import_index_5d44e6de.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_5d44e6de.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_5d44e6de.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_5d44e6de.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const display = writable(0);
var Calcbtn_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1nqh6iy{background:#777;height:100%;color:white;font-size:140%;font-weight:200;border:none}button.svelte-1nqh6iy:active{background:#aaa}.twowide.svelte-1nqh6iy{grid-column-end:span 2;text-align:left;padding-left:1.3em}.oper.svelte-1nqh6iy{background:#f94;font-size:180%;padding-top:.31em}.oper.held.svelte-1nqh6iy{background:#c72}.fn.svelte-1nqh6iy,.plusminus.svelte-1nqh6iy{background:#555}button.oper.svelte-1nqh6iy:active{background:#c72}button.fn.svelte-1nqh6iy:active,button.plusminus.svelte-1nqh6iy:active{background:#777}",
  map: null
};
const Calcbtn = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_display;
  $$unsubscribe_display = (0, import_index_5d44e6de.b)(display, (value) => value);
  let { width = "" } = $$props;
  let { use = "number" } = $$props;
  (0, import_index_5d44e6de.d)();
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  $$result.css.add(css$2);
  $$unsubscribe_display();
  return `<button class="${(0, import_index_5d44e6de.e)(width) + " " + (0, import_index_5d44e6de.e)(use) + " svelte-1nqh6iy"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
var Display_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-13we4wh{grid-column-start:1;grid-column-end:5;background-color:#444;color:white;font-weight:100;text-align:right;align-self:end;padding:15px 16px 0 0}",
  map: null
};
let maxDigits = 13;
const Display = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  let $display, $$unsubscribe_display;
  $$unsubscribe_display = (0, import_index_5d44e6de.b)(display, (value) => $display = value);
  let rounded;
  let fontSize = "3.2em";
  const toDispString = (val) => {
    if (val == 0)
      return "0";
    let leftDigits = Math.max(Math.floor(Math.log10(val)), 0) + 1;
    if (leftDigits > 10) {
      return val.toExponential(8);
    }
    if (maxDigits > leftDigits) {
      rounded = val.toFixed(maxDigits - leftDigits);
    } else {
      rounded = val;
    }
    let dispString = Number(rounded).toLocaleString("en-US", { maximumSignificantDigits: 12 });
    let digits = dispString.split("").filter((digit) => digit >= "0" && digit <= "9");
    fontSize = digits.length > 8 ? "2.1em" : "3.2em";
    return dispString;
  };
  $$result.css.add(css$1);
  $$unsubscribe_display();
  return `<div style="${"font-size: " + (0, import_index_5d44e6de.e)(fontSize)}" class="${"svelte-13we4wh"}">${(0, import_index_5d44e6de.e)(toDispString($display))}
</div>`;
});
var Calculator_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap');.calc.svelte-1figg9z{font-size:var(--fontSize);display:inline-grid;justify-content:center;grid-template-columns:repeat(3, 3.875em) 4.06em;grid-template-rows:4.875em repeat(5, 3.125em);margin:0 auto;gap:1px;background:#444;font-family:'Work Sans', sans-serif}",
  map: null
};
const Calculator = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  let { calcFontSize = "16px" } = $$props;
  let calc;
  if ($$props.calcFontSize === void 0 && $$bindings.calcFontSize && calcFontSize !== void 0)
    $$bindings.calcFontSize(calcFontSize);
  $$result.css.add(css);
  return `<div class="${"calc svelte-1figg9z"}" style="${"--fontSize:" + (0, import_index_5d44e6de.e)(calcFontSize) + ";"}"${(0, import_index_5d44e6de.f)("this", calc, 0)}>${(0, import_index_5d44e6de.v)(Display, "Display").$$render($$result, {}, {}, {})}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "fn" }, {}, {
    default: () => {
      return `AC`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "plusminus" }, {}, {
    default: () => {
      return `<sup>+</sup>/<sub>\u2212</sub>`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "fn" }, {}, {
    default: () => {
      return `%`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "oper" }, {}, {
    default: () => {
      return `\xF7`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `7`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `8`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `9`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "oper" }, {}, {
    default: () => {
      return `\xD7`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `4`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `5`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `6`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "oper" }, {}, {
    default: () => {
      return `\u2212`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `1`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `2`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `3`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "oper" }, {}, {
    default: () => {
      return `+`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { width: "twowide" }, {}, {
    default: () => {
      return `0`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, {}, {}, {
    default: () => {
      return `.`;
    }
  })}
	${(0, import_index_5d44e6de.v)(Calcbtn, "Calcbtn").$$render($$result, { use: "oper" }, {}, {
    default: () => {
      return `=`;
    }
  })}
</div>`;
});
const Calc = (0, import_index_5d44e6de.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Svelte Calc Component</title>`, ""}<meta name="${"description"}" content="${"Building a calculator component in Svelte\n            that can be put in your existing website."}" data-svelte="svelte-gyobzw">`, ""}

<h1>Build a Calculator Component in Svelte</h1><h2>And use it in your current website</h2><div class="${"flt_r"}">${(0, import_index_5d44e6de.v)(Calculator, "Calculator").$$render($$result, {}, {}, {})}</div><p>There&#39;s no need to go all or nothing with Svelte. You can build a few components
in it and use them in your existing website. Here, we&#39;ll build a calculator app 
in Svelte and deploy it in a basic HTML website. Here it is on the right: give
it a try!
</p><p>This fairly full-featured calculator component is
based on the iPhone calculator app, but with the rectangular buttons 
of the Mac calculator app. 
While this project is more complex than is needed just to learn Svelte, I find
it of interest in itself, and it&#39;s more real-world than the trivial examples
often used. I am assuming you are familiar with HTML, CSS, and JavaScript.
This is not a total beginner&#39;s introduction to Svelte\u2014for that, go 
to the great <a href="${"https://svelte.dev/tutorial/basics"}">tutorial by Svelte</a>.
If you are more interested in embedding Svelte components into
existing apps, you can skim over most of this calculator post, or just visit 
<a href="${"./embed"}">Embed Our Calculator Component into Your Existing Website</a>,
and download the finished calculator code as explained there.
</p><p>Let&#39;s start with a little planning. We&#39;re building a Calculator component.
The calculator has a bunch of buttons (19,
to be precise) and a display. So let&#39;s create components for the buttons,
which we&#39;ll call <span class="${"code"}">Calcbtn</span>, and for the display, which we&#39;ll call <span class="${"code"}">Display</span> 
(in real life, we&#39;d probably call it <span class="${"code"}">CalcDisplay</span>). Note that Svelte components
are required to start with a capital letter. To start off with, we&#39;ll just 
write enough code to create a static display, and then we&#39;ll add functionality to it.
</p><p>There are four columns of buttons, so we&#39;ll use CSS grid to do our layout. Some 
of the buttons have different colored backgrounds, so we&#39;ll create classes for them.</p><p>Being lazy by nature, I&#39;m going to build this in the 
<a href="${"https://svelte.dev/repl/hello-world?version=3.46.4"}">Svelte REPL environment</a>
rather than having us set up a Svelte development environment right now. We&#39;ll do that
in my <a href="${"./sveltekit"}">post on SvelteKit</a>.
</p><p>So open another browser window, go to <a href="${"https://svelte.dev/"}">https://svelte.dev/</a>, and click on REPL from the 
main menu. 
This brings up a tab named App.svelte on the left, and a Result tab on the right. 
In order to save your work, click on the right where it says &quot;Log in to save&quot; and 
log in.</p><p>Eventually, we will change App.svelte to display a <span class="${"code"}">Calculator</span> component, but 
in order to avoid error messages, we&#39;ll leave it alone for now.
Let&#39;s begin by creating our subcomponents. Click on the + near the upper left next 
to App.Svelte, and rename the new tab to Calculator.svelte. We&#39;ll just leave it
blank for the moment. Click the + again, and rename this new tab to	
Display.svelte. Enter the following code:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.d1j }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Calccode.d1h }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "css", code: import_Calccode.d1c }, {}, {})}<p>Each Svelte component (like this one) can contain up to three sections: a script tag
containing JavaScript code, HTML code, and a style tag with CSS code. (There can 
also be a module-level script tag, which I will
introduce below). Each instance of the component will get a copy of the HTML and have
access to the JavaScript and the CSS. One of 
the gifts of Svelte is that the CSS is <em>scoped</em>, so that it only applies to 
the component within which it appears. This eliminates the need for complicated 
methods of dealing with scoping CSS such as BEM or Tailwind.</p><p>The script is basic JavaScript, with a few tweaks to add 
Svelte functionality.
The function <span class="${"code"}">toDispString</span> will eventually take the value computed by the 
calculator and format it for the display, but for now, it always returns <span class="${"code"}">&quot;0&quot;</span>. 
The HTML, as we see here, allows Javascript values
to be embedded by surrounding them with curly braces. So the font-size will
initially be set to <span class="${"code"}">3.2em</span>, and the div content will be <span class="${"code"}">&quot;0&quot;</span>. 
The CSS here is straightforward, 
making the display span the grid and setting text display qualities. </p><p>Now click on the plus sign again to create our other subcomponent, and name this tab 
Calcbtn.svelte. Enter the following code:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb1j }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Calccode.cb1h }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "css", code: import_Calccode.cb1c }, {}, {})}<p>The <span class="${"code"}">export</span> statement in the <span class="${"code"}">&lt;script&gt; </span> section signifies that 
these are props that will be passed to the component when this component is 
instantiated by a caller. The initial values are defaults. When we create a <span class="${"code"}">Calcbtn</span> component,
we will invoke it like this: <span class="${"code"}">&lt;Calcbtn use=&quot;fn&quot;&gt;%&lt;/Calcbtn&gt;</span>. 
The content between the opening and closing tags (in this case, the percent sign) will 
replace the <span class="${"code"}">&lt;slot&gt;&lt;/slot&gt;</span> portion of the HTML code. 
</p><h2>So Let&#39;s See Some Results!</h2><p>Now that we&#39;ve defined our subcomponents, we&#39;re ready to define our Calculator component.
Click back on the App.svelte tab, and enter the following code:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.c1j }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Calccode.c1h }, {}, {})}
${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "css", code: import_Calccode.c1c }, {}, {})}<p>Almost done! Go back to the App.svelte tab, and replace all of its code with this:</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Calccode.a1j }, {}, {})}<p>Hooray! If you have followed so far, you should see the calculator in the result window 
on the right. Clicking on the buttons doesn&#39;t yet do anything other than change their
background color, but we&#39;ll take care of that soon enough.
</p><p>In the script section of the Calculator component, we import its two subcomponents. 
Our HTML section has a <span class="${"code"}">div</span> holding
the <span class="${"code"}">Display</span> and our <span class="${"code"}">Calcbtn</span>s. The statement 
<span class="${"code"}">bind:this={calc}</span> sets the <span class="${"code"}">calc</span> variable to point to 
this instance of the component\u2014we will need that later, if we embed more than 
one Calculator instance on a page. The style section imports 
our font and creates the overall layout for the calculator.</p><p>One item of note is the line early in the style section that reads 
<span class="${"code"}">font-size: var(--fontSize);</span> If you look at the last line of App.svelte,
you will see that we set the value of <span class="${"code"}">--fontSize</span> when we invoke the 
Calculator component. This allows us to set the overall size of our calculator 
independently each time it is invoked.
</p><p>Now that we can see our calculator, let&#39;s start getting it to work! Our first step is 
to set up communication between the buttons and the display. Rather than requiring all 
props to be sent up and down the chain to the top-level component, Svelte makes 
inter-component communication easy 
by using a <i>store</i>. A store is just an object with a <span class="${"code"}">subscribe</span> method that lets interested 
components be notified whenever the store value changes. When we click buttons, the value 
on the display should change. Let&#39;s set this up. Click the + at the right of the list of 
tabs, and rename the new tab to stores.js. Add the following two lines of code to it:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.s1j }, {}, {})}<p>This variable, <span class="${"code"}">display</span>, will hold a numeric value to be shown on the display. Now the 
<span class="${"code"}">Display</span> component needs to update the display&#39;s contents whenever they change. We&#39;ll 
start with a simple implementation of <span class="${"code"}">toDispString</span>. Replace the contents of the script 
tags with the following:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.d2j }, {}, {})}<p>Next replace the div with the following:</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "html", code: import_Calccode.d2h }, {}, {})}<p>The dollar sign in front of the variable <span class="${"code"}">display</span> is a Svelte 
feature saying that whenever the store value prefixed with the $ changes 
value, its containing statment will be rerun. Now, we 
just have to update the store when we click on the calculator buttons. 
</p><p>Let&#39;s start by handling entering a number. A number will consist of a 
series of digits, optionally followed by a decimal point and another series 
of digits. If a second decimal point is entered during this process, we 
will ignore it. We&#39;ll use a variable, <span class="${"code"}">inDecimal</span>, 
to show whether we are entering digits beyond a decimal point and how 
many digits past it we are. To support this count, we will create a couple 
of module-level variables. Every time a button is pressed, any 
variables in our script section will be reinitialized, but variables in a 
module context hold their values throughout invocation, like static 
variables in a C++ class. At the top of the file, enter the following:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb2m }, {}, {})}<p>Change the first line 
of the HTML to call a function when a button is clicked:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb2h }, {}, {})}<p>Then replace the contents of the script section with this code:</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb2j }, {}, {})}<p>We have imported <span class="${"code"}">display</span> from stores.js so we can set its 
value, which will lead Display.svelte to change the content of the display. 
We set it by calling <span class="${"code"}">display.set</span> and passing the numeric value 
to be displayed. At this point, you can type numbers into the calculator, 
like 123.45, and see them appear. Progress!

However, we can also see a bug. Start typing in digits, and by the time 
you get to ten digits, the number runs off the display! Let&#39;s add some 
code to Display.svelte to deal with this. If numbers get long, we&#39;ll shrink 
their size. We&#39;ll round off digits to the right of the decimal place that 
won&#39;t fit, and we&#39;ll use scientific notation for numbers too large to fit. 
Go to the 
Display.svelte tab and replace the script section with the following:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.d3j }, {}, {})}<p>By calling <span class="${"code"}">toLocaleString</span>, we not only limit 
<span class="${"code"}">maximumSignificantDigits</span>, but also get commas in numbers four 
or more digits to the left of the decimal point.
</p><p>Now let&#39;s try adding some operators, so we can add, subtract, multiply, 
divide, and see the result of our calculation with the equal button. 
Head back to Calcbtn.svelte, and let&#39;s think this through.</p><p>Imagine someone enters 4 + 5 \xD7 6 = into the calculator. What 
should happen? Some calculators interpret this mathematically, and 
give multiplication higher priority than addition, so they show 34. 
But most calculators function sequentially. When the user enters the 
\xD7 symbol, the display shows the evaluation of 4 + 5 (i.e. 9),
then the 6 is multiplied by 9, giving 54. We will take this approach. 
This means pressing a function key carries out any pending operation 
and displays the result, as well as saving itself to apply to the next 
operand.</p><p>Begin by adding these two lines of code to Calcbtn.svelte after 
<span class="${"code"}">let lastBtn = &quot;&quot;</span>:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb3m }, {}, {})}<p>Now add the following code after the <span class="${"code"}">break</span> statement near the bottom of the 
script section:

${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb3j }, {}, {})}
</p><p>Now try out your calculator. It adds! It multiplies! It follows the rules we set out 
above for chained calculations.

However, we still have a few loose ends to tie up. The AC button should work as follows:
It begins as an AC button, but should change to C when a number is entered. 
If the C (Clear) button is pressed, it clears the currently entered number, but also 
changes its symbol to AC (All Clear), and if pressed in that state, it clears all pending 
data. To support this, we will dispatch a custom event 
from Calcbtn.svelte that will trigger an event handler 
in our top level component. To do this, add this line near the top of the script section of
Calcbtn.svelte: 	<span class="${"code"}">import { createEventDispatcher } from &#39;svelte&#39;;</span></p><p>After the first <span class="${"code"}">if</span> statement in <span class="${"code"}">calcClick</span>, send the event:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.cb4j }, {}, {})}<p>We modify each of the number buttons and the decimal point button in App.svelte to react 
to this ac event, with an <span class="${"code"}">on</span> statement: 
<span class="${"code"}">&lt;Calcbtn on:ac={setClear}&gt;9&lt;/Calcbtn&gt;</span>

Then in the App.svelte tab, we add this code:
</p>${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.c3j }, {}, {})}<p>Another loose end: when the user presses the + key in the previous example and then 
goes on to enter the 5, we want the plus key to continue to appear pressed, as a 
reminder of the operation being performed. In order to do this, Calcbtn will send 
another custom event to the top-level component. Those three lines of code are 
already present below the line <span class="${"code"}">case &quot;=&quot;:</span> so just uncomment them. Next, 
in the top-level component, modify each of the <span class="${"code"}">Calcbtn</span> 
statements with <span class="${"code"}">user=&quot;oper&quot;</span> like this: 
<span class="${"code"}">&lt;Calcbtn use=&quot;oper&quot; on:func={setOperColor}&gt;+&lt;/Calcbtn&gt;</span> 
and add the function to the script section above:

${(0, import_index_5d44e6de.v)(import_PrismJS_4900a548.P, "Prism").$$render($$result, { language: "javascript", code: import_Calccode.c4j }, {}, {})}
</p><p>Well, that about wraps it up! There are certainly a few bugs left, and features that could 
be added (like handling keystroke entry), but we&#39;ve built a functional calculator. Now go 
to the <a href="${"embed"}">Embed</a> post to learn how to embed this component in a 
conventional web page.
</p><a href="${"embed"}">Next\u2192</a>`;
});
