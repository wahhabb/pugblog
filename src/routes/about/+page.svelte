<script>
	import Calcbtn from '$lib/components/Calcbtn.svelte';
	import Calc from '../blog/calc/+page.svelte';
	import Sveltekit from '../blog/prisma/+page.svelte';
</script>

<svelte:head>
	<title>Deep Web Works--About</title>
	<meta name="description" content="About Wahhab Baldwin" />
</svelte:head>

<template lang="pug">
h1 About Me
img.flt_r(src="/Wahhab-Baldwin.jpg" alt="Wahhab Baldwin")
p.  
	Hi! I'm Wahhab Baldwin. I began working full-time as a programmer in 1966.
	In my early years, I worked primarily on IBM mainframes, primarily in COBOL 
	and BAL (assembler),
	using CICS and Db2. I did a lot of contract programming, and ended up with  
	significant experience programming for commercial insurance software, 
	ending by becoming a Senior V.P. at AIG.
p.	
	When the IBM PC came out, I taught myself C,  I had articles published in 
	"C Users' Journal" and "Doctor Dobbs' Journal." I taught a group 
	of 20 programmers C and led them in developing Workers' Comp software as 
	AIG's first PC-based application. I was a charter member of the ANSI 
	committee to standardize C++.
p. 
	After AIG I went to work for Microsoft, where I was Senior Dev. Manager for 
	Middle East Products, and then ran their Internal Tools group. I also worked 
	on the Office development team.

	After retiring from Microsoft, I went on to pursue different interests. However, 
	my wife started a small graphic design business, and as her clients increasingly 
	wanted websites, I would build the websites that she designed. 

	In recent years, in retirement, I have only built websites for friends and family. 
	However, I have attempted to stay current with the technology, just for my own 
	interest. I have been delighted by Svelte and SvelteKit, which seem to me 
	friendlier, easier to learn and more efficient than React or Vue. So I decided 
	to put together a blog written using SvelteKit (and Pug, as it happens) 
	and use it to write occasional articles about my learning journey with this 
	great tool. 
p. 
	I hope you'll find it useful, and I welcome your <a href="/contact">feedback</a>.
</template>
