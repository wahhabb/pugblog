<script lang='ts'>
	let dispFontsize = '240%'
	let { onMessage, dispString } = $props();		
	let held = $state({
		plus: false,
		minus: false,
		times: false,
		div: false,
	})
	let clrButton: any = null;

	function setText(face, type) {
		if (face == "C") {
			clrButton.innerHTML = "AC";
		}
		if (face == "AC")
			type = "clr"
		if (type == "num")
			clrButton.innerHTML = "C";
		onMessage({ face: face, type: type });
	}
	
	function hold(operButton) {
		held.plus = operButton == '+';
		held.minus = operButton == '-';
		held.times = operButton == 'x';
		held.div = operButton == '/';		
	//	alert(operButton)
	}
</script>

<div class="calc">
	<div class="display" style="font-size: {(dispString.split("").filter(digit => digit >= "0" && digit <= "9").length ) > 10 ? '200%' : '240%'}">
		{dispString}
	</div>

<button onclick={() => setText(0, "clr")} class="fn" bind:this={clrButton}> AC </button>
<button onclick={() => setText('', 'pm')} class="fn"><sup>&plus;</sup>/<sub>&minus;</sub></button>
<button onclick={() => setText('%', "%")} class="fn"> % </button>
<button onclick={() => {setText('/', "oper");  hold('/')}} class:held={held.div} class="oper"> &div; </button>
<button onclick={() => setText(7, "num")}> 7 </button>
<button onclick={() => setText(8, "num")}> 8 </button>
<button onclick={() => setText(9, "num")}> 9 </button>
<button onclick={() => {setText('x', "oper");  hold('x')}} class:held={held.times} class="oper"> &times; </button>
<button onclick={() => setText(4, "num")}>4 </button>
<button onclick={() => setText(5, "num")}> 5 </button>
<button onclick={() => setText(6, "num")}> 6 </button>
<button onclick={() => {setText('-', "oper");  hold('-')}} class:held={held.minus} class="oper"> &minus; </button>
<button onclick={() => setText(1, "num")}> 1 </button>
<button onclick={() => setText(2, "num")}> 2 </button>
<button onclick={() => setText(3, "num")}> 3 </button>
<button onclick={() => {setText('+', "oper");  hold('+')}} class:held={held.plus} class="oper"> &plus; </button>
<button onclick={() => setText(0, "num")} class="twowide"> 0 </button>
<button onclick={() => setText('.', '.')}> . </button>
<button onclick={() => {setText('=', "oper");  hold('=')}} class="oper"> = </button>
</div>

<style>
	.display {
		grid-column-start: 1;
		grid-column-end: 5;
		background-color: #444;
		color: white;
		font-weight: 100;
		font-size: 250%;
		text-align: right;
		align-self: end;
		padding: 15px 16px 0 0;
	}
	.calc {
		display: inline-grid;
		justify-content: center;
		grid-template-columns: repeat(3, 3.875em) 4.06em;
		grid-template-rows: 4.875em repeat(5, 3.125em);
		margin: 0 auto;
		gap: 1px;
		background: #444;
		font-family: 'Work Sans', sans-serif;
		}
	button {
		background: #777;
		height: 100%;
		color: white;
		font-size: 140%;
		font-weight: 200;
		border: none;
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
	.held { background: #e73; }
	.fn {
		background: #555;
	}
	button.oper:active {
		background: #c72;
	}
	button.fn:active{
		background: #777;
	}
</style>