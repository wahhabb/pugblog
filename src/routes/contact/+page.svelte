<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact Me</title>
	<meta name="description" content="Get in touch with Wahhab Baldwin. I'd love to hear from you!" />
</svelte:head>

<template lang="pug">
    h1 Contact Me
    p. 
        You can also send me email at the email address listed on my github account (wahhabb).
    
    form(name="contact" method="POST" data-netlify="true" action="./contact")
        <input type="hidden" name="form-name" value="contact">

        div
            label(for='name') Your Name: 
            input(type="text", name="name")
        div 
            label(for='email') Your Email: 
            input(type="email", name="email")
        div 
            label(for='message') Message: 
            textarea(name="message")   
        div 
            button.btn_submit(type="submit") Send
</template>

<style>
	form div {
		padding-bottom: 1.2em;
	}
	form input {
		min-width: 20em;
	}
	form textarea {
		height: 10em;
		min-width: 20em;
	}
	form label {
		display: inline-block;
		width: 10em;
		text-align: end;
		padding-right: 2em;
		vertical-align: top;
	}
	.btn_submit {
		display: inline-block;
		padding: 0.375rem 1.5rem;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		color: white;
		background-color: #0275d8;
		margin-left: 29em;
		border-radius: 0.8em;
	}
</style>
