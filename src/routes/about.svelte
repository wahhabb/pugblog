<script>
	import Prism from '../PrismJS.svelte';

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

	let cb1 =
		`<script>
	export let width = "";
	export let use = "number";
</script` + `>`;
</script>

<svelte:head>
	<title>Prism Syntax Highlighter Example</title>
	<meta name="description" content="" />
</svelte:head>

<h3>Eddie Florea - viper6277@gmail.com</h3>

<p>
	Generate stylish code blocks with <a href="https://prismjs.com//">PrismJS</a>
</p>

<Prism language="javascript" code={code_sample} header="Sample JS Code" />
<Prism language="javascript" code={cb1} header="Sample JS Code" />
