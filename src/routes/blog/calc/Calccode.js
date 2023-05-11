export const d1j = `<script>
	let val = 0;
	let fontSize = "3.2em"
	const toDispString = (val) => {
		if (val == 0) return "0";
	}
</script>`;

export const d1h = `<div style = "font-size: { fontSize }">
	{ toDispString(val) }
</div>`;

export const d1c = `<style>
	div {
		grid-column-start: 1;
		grid-column-end: 5;
		background-color: #444;
		color: white;
		font-weight: 100;
		text-align: right;
		align-self: end;
		padding: 0 var(--fontSize) 0 0;
	}
</style>`;

export const cb1j = `<script>
	export let width = "";
	export let use = "number";
</script>`;

export const cb1h = `<button class="{width} {use}" >
    <slot></slot>
</button>`;

export const cb1c = `<style>
	button {
		background: #777;
		height: 100%;
		color: white;
		font-size: 140%;
		font-weight: 200;
		border: none;
		margin: 0;
	}
	button:active {
		background:#aaa;
	}
	.twowide {
		grid-column-end: span 2;
		text-align: left;
		padding-left: 1.3em;
	}
	.oper {
		background: #f94;
		font-size: 180%;
		padding-top: .31em;
	}
	.oper.held {
		background: #c72;
	}
	.fn, .plusminus {
		background: #555;
	}
	button.oper:active {
		background: #c72;
	}
	button.fn:active, button.plusminus:active {
		background: #777;
	}
</style>`;

export const c1j = `<script>
	import Calcbtn from './Calcbtn.svelte';
	import Display from './Display.svelte';
	export let calcFontSize = "16px";
	let calc;
</script>`;

export const c1h = `<div class="calc" style="--fontSize:{calcFontSize};" bind:this={calc}>
	<Display />
	<Calcbtn use="fn">AC</Calcbtn>
	<Calcbtn use="plusminus"><sup>&plus;</sup>/<sub>&minus;</sub></Calcbtn>
	<Calcbtn use="fn">%</Calcbtn>
	<Calcbtn use="oper">&div</Calcbtn>
	<Calcbtn>7</Calcbtn>
	<Calcbtn>8</Calcbtn>
	<Calcbtn>9</Calcbtn>
	<Calcbtn use="oper">&times;</Calcbtn>
	<Calcbtn>4</Calcbtn>
	<Calcbtn>5</Calcbtn>
	<Calcbtn>6</Calcbtn>
	<Calcbtn use="oper">&minus;</Calcbtn>
	<Calcbtn>1</Calcbtn>
	<Calcbtn>2</Calcbtn>
	<Calcbtn>3</Calcbtn>
	<Calcbtn use="oper">&plus;</Calcbtn>
	<Calcbtn width="twowide">0</Calcbtn>
	<Calcbtn>.</Calcbtn>
	<Calcbtn use="oper">=</Calcbtn>
</div>`;

export const c1c = `<style>
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap');
	.calc {
		font-size: var(--fontSize);
		display: inline-grid;
		justify-content: center;
		grid-template-columns: repeat(3, 3.875em) 4.06em;
		grid-template-rows: 5em repeat(5, 3.125em);
		margin: 0 auto;
		gap: 0.125em;
		background: #444;
		font-family: 'Work Sans', sans-serif;
	}
</style>`;
export const s1j = `import { writable } from 'svelte/store';
export const display = writable(0);`;

export const a1j = `<script>
	import Calculator from './Calculator.svelte'
</script>

<Calculator calcFontSize="16px" />`;

export const d2j = `	import { display } from './stores.js';
	let fontSize = "3.2em"
	const toDispString = (val) => {
		if (val == 0) return "0";
		return String(val);
	}
`;
export const d2h = `<div style = "font-size: { fontSize }">
	{ toDispString($display) }
</div>`;

export const cb2h = `<button class="{width} {use}" on:click={(a) => calcClick(a)}>`;

export const cb2m = `<script context="module">
	 let lastBtn = ""
	 let inDecimal = 0;
</scrìpt>`;

export const cb2j = `	export let width = "";
	export let use = "number";
	import { display } from './stores.js';
	const calcClick = (a) => {
		const btn = a.target.innerHTML;
		if (use == "plusminus") { 	// +/- key 
			display.set(-$display)
			return(0);
		}
		if (btn == "%") { 	
			display.set($display / 100)
			return(0);
		} 
		if ("0" <= btn && btn <= "9") {
			if (lastBtn != "number" ) {
				display.set(0);
			}
			if (inDecimal == 1) {
				display.set(Number(String($display) + "." + btn))
				++inDecimal
			} else {
				if (inDecimal) {
					display.set(Number(String($display) + btn))
					++inDecimal		
				} else {
					display.set($display * 10 + Number(btn))
				}
			}
			lastBtn = "number"			
		} else {
			switch (btn) {
			case ".":		
				if (inDecimal == 0) {
					inDecimal = 1;
				}
				break
			}
		}
	}`;

export const d3j = `	import { display } from './stores.js';
	let rounded;
	let fontSize = "3.2em"
	let maxDigits = 13;	// how many digits can display show
	const toDispString = (val) => {
		if (val == 0) return "0";
		let leftDigits = Math.max(Math.floor(Math.log10(val)), 0) + 1;
		if (leftDigits > 10) {
			return val.toExponential(8);
		}
		if (maxDigits > leftDigits) {
			rounded = val.toFixed(maxDigits - leftDigits)
		} else {
			rounded = val
		}
		let dispString = Number(rounded).toLocaleString("en-US", 
			{ maximumSignificantDigits: 12 });
		let digits = dispString.split("").filter(digit => digit >= "0" && digit <= "9")
		fontSize =  digits.length > 8 ? "2.1em" : "3.2em";
		return dispString;
	}`;

export const cb3m = `	 let lastOper = ""
	 let operand = ""`;

export const cb3j = `			case "AC":
				lastOper = "" // fall through!	
			case "C":
				display.set(0)
				lastBtn = "number"
				a.target.innerHTML = "AC"
				inDecimal = 0
				break
			case "+":
			case "\\u2212":	// Minus
			case "\\u00D7": // Multiply
			case "\\u00F7":	// Divide
			case "=":
			// dispatch('func', {
			// 	symbol: btn,
			// });
				switch (lastOper) {
					case "":
						operand = $display
						break;
					case "+":
						operand += $display
						break;
					case "\\u2212":	// Minus
						operand -= $display
						break;
					case "\\u00D7":	// Multiply
						operand *= $display
						break;
					case "\\u00F7":	// Divide
						operand /= $display
						break;
				}
				display.set(operand)
				lastBtn = "operator"
				lastOper = btn;
				inDecimal = 0
				if (btn === "=") {
					lastOper = "";
					operand = 0;
				}
				break;`;

export const cb4j = `		if ("0" <= btn && btn <= "9") {
			dispatch('ac', {
				symbol: btn,
			});`;

export const c3j = `	const setClear = (event) => {
		let selected = event.detail.symbol;
		let opers = document.getElementsByClassName('fn');
		opers[0].innerHTML = 'C';
	};`;

export const c4j = `  const setOperColor = (event) => {
		let selected = event.detail.symbol;
		if (selected === "=")
			selected = "";
		let opers = document.getElementsByClassName("oper");
		for(var i = 0, length = opers.length; i < length; i++) {
				opers[i].classList.remove("held")
			if (opers[i].innerHTML === selected) {
					opers[i].classList.add("held")
			}
		}
	}`;
