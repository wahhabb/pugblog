<header>
	<p class="logo"><a href="/">Deep Web Works</a></p>
	<nav class="primary-navigation">
		<ul>
			<li><a href="/">Home</a></li>
			<li>
				<a href="/blog">Blog &dtrif;</a>
				<ul class="dropdown">
					<li><a href="/blog/calc">Build a Svelte Calculator Component</a></li>
					<li><a href="/blog/sveltekit">Use SvelteKit with MySQL</a></li>
					<li><a href="/blog/mysite">How this Site was Built</a></li>
				</ul>
			</li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<style global>
	:root {
		font-family: 'Merriweather', serif;
		--brown: #704935;
		--hover: #aa4c1d;
		--text: #332118;
		--link: #3366cc;
	}

	body {
		padding: 2em;
		color: var(--text);
		background-color: rgb(238, 230, 220);
		background: linear-gradient(0deg, rgba(238, 230, 220, 0.5), rgba(238, 230, 220, 0.5)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		font-size: 1.05em;
		line-height: 1.4;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	.logo,
	nav.primary-navigation {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 700;
		color: var(--brown);
	}
	h2,
	h3,
	h4,
	h5 {
		font-weight: 500;
	}
	/* Demo Specific Styles */
	body {
		margin: 0 auto;
		max-width: 60em;
		padding: 1em 0;
		color: #222;
	}
	a,
	a:visited {
		text-decoration: none;
		color: var(--link);
	}

	a:hover {
		color: var(--hover);
	}

	.flt_l {
		float: left;
		margin-right: 2em;
	}
	.flt_r {
		float: right;
		margin-left: 2em;
		padding: 0;
	}
	.bdr_1 {
		border: 1px solid #666;
		border-radius: 1em;
	}
	header,
	main,
	aside,
	footer {
		background: #f7f6f4;
		padding: 2em;
		margin: 1em;
		padding-top: 1em;
	}

	.logo {
		font-size: 2em;
		text-align: center;
		margin-top: 0;
		text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.4);
	}
	.logo a,
	.logo a:visited {
		text-decoration: none;
		color: var(--brown);
	}

	/****** MAIN MENU ********/
	nav.primary-navigation {
		margin: 0 auto;
		display: block;
		text-align: center;
		margin-top: -1em;
	}
	nav ul li {
		list-style: none;
		margin: 0 auto;
		border-left: 2px solid var(--brown);
		display: inline-block;
		padding: 0 30px;
		position: relative;
		text-decoration: none;
		text-align: center;
	}

	nav li a,
	nav li a:visited {
		color: var(--brown);
	}

	nav li a:hover,
	nav li a:active {
		color: var(--hover);
	}

	nav li:hover {
		cursor: pointer;
	}

	nav ul li ul {
		visibility: hidden;
		opacity: 0;
		position: absolute;
		padding-left: 0;
		left: 0;
		display: none;
		background: white;
	}

	nav ul li:hover > ul,
	nav ul li ul:hover {
		visibility: visible;
		opacity: 1;
		display: block;
		min-width: 250px;
		text-align: left;
		padding-top: 20px;
		padding-right: 1em;
		box-shadow: 0px 3px 5px -1px #ccc;
	}

	nav ul li ul li {
		clear: both;
		width: 100%;
		text-align: left;
		margin-bottom: 20px;
		border-style: none;
	}

	nav ul li ul li a:hover {
		padding-left: 10px;
		border-left: 2px solid var(--brown);
		transition: all 0.3s ease;
	}

	nav a {
		text-decoration: none;
	}
	nav a:hover {
		color: var(--brown);
	}

	nav ul li ul li a {
		transition: all 0.5s ease;
	}
	span.code {
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	}
</style>
