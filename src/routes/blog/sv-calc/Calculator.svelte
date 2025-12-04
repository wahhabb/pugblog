<script lang="ts">
	import CalcUI from './CalcUI.svelte';
	let { fontSize = '16px' } = $props();		
	let calcValue: number = $state(0);    
	let dispString: string = $state("0") 
	let lastOper: string = $state('')
	let lastButton: any = $state('')
	let inDecimal = 0
	let operand: number = 0;  
	let rounded: number
	const maxDigits = 12;	// how many digits can display show

	// Calculate the value to be displayed
	function handleMessage(button: {type: string, face: string}) {
			switch (button.type) {
			case "pm":
				calcValue = - calcValue	
		 	break;
		case "cla":
			lastOper = '' 
			operand = 0  // Fall through
		case "clr":
				calcValue = 0;
				inDecimal = 0
				break;
		case "num":
			if (lastButton.type == "oper") {
				operand = calcValue
				calcValue = 0
				inDecimal = 0
			}
				if (inDecimal) {
					if (calcValue >= 0)
						calcValue += Number(button.face) * 10 ** -inDecimal;
					else
						calcValue -= Number(button.face) * 10 ** -inDecimal;
					++inDecimal
			} else
				calcValue = 10 * calcValue + (calcValue >= 0 ? Number(button.face) : - Number(button.face))
			break;
		case ".":
			if (inDecimal) // extraneous decimal point
				return;
			inDecimal = 1				
				break;
		case "%":
				calcValue /= 100;
				break;
		case 'oper':
			if (lastButton.type == "oper") {
				lastButton = button
				lastOper = button.face
				return
			}
			inDecimal = 0
			if (lastOper == '+') 
				calcValue += operand
			if (lastOper == '-') 
				calcValue = operand - calcValue
			if (lastOper == 'x') {
				calcValue *= operand
			}
			if (lastOper == '/') 
				calcValue = operand	/ calcValue
		  if (lastOper == '=')
				operand = 0
			if (button.face == '=') {
				operand = 0
			}
			lastOper = button.face;
			break;
		default:
			Error('Bad Button Type')
		}
		lastButton = button;
	};
	
	const toDispString = (val: number): string => {
		let leftDigits = Math.max(Math.floor(Math.log10(val)), 0) + 1;
		if (leftDigits > 10) {
			return val.toExponential(8);
		}
		if (maxDigits > leftDigits) {
			rounded = Number(val.toFixed(maxDigits - leftDigits))
		} else {
			rounded = val
		}
		return Number(rounded).toLocaleString("en-US", { maximumSignificantDigits: 12 });
	}
</script>

<!-- For debugging -->
<!-- <p>->{lastButton.type} {lastOper} op {operand} cv {calcValue} ds {toDispString(calcValue)}&lt;-</p> -->

<div id="calculator" style="font-size:{fontSize}" >
  <CalcUI onMessage={ handleMessage } dispString={ toDispString(calcValue) } />
</div>