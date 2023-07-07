<script>
	import { page } from '$app/stores';
</script>

<header>
	<p class="logo"><a href="/">Deep Web Works</a></p>
	<nav class="primary-navigation">
		<ul class="menu">
			<li><a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a></li>
			<li>
				<a class:active={$page.url.pathname.includes('/blog')} href="/blog">Blog &dtrif;</a>
				<ul class="dropdown">
					<li>
						<a class:active={$page.url.pathname === '/blog/calc'} href="/blog/calc"
							>Build a Svelte Calculator Component</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/embed'} href="/blog/embed"
							>Embed a Svelte Component into Your Existing Website</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/kit1'} href="/blog/kit1"
							>SvelteKit 1&mdash;Getting Started with SvelteKit</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/kit2'} href="/blog/kit2"
							>SvelteKit 2&mdash;Further Adventures with SvelteKit</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/kit3'} href="/blog/kit3"
							>Use SvelteKit with MySQL</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/kit4'} href="/blog/kit4"
							>Moving SvelteKit Sites to Production</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/blog1'} href="/blog/blog1"
							>Making a Blog in SvelteKit Part One</a
						>
					</li>
				</ul>
			</li>
			<li><a class:active={$page.url.pathname === '/about'} href="about">About</a></li>
			<li><a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	/****** MAIN MENU ********/
	nav.primary-navigation {
		margin: 2em auto 0;
		margin-top: -1em;
		border-top: 1px solid #70493580;
		border-bottom: 1px solid #70493580;
		max-width: 40em;
	}
	nav ul {
		margin: 0;
		padding: 0;
	}
	.menu {
		display: flex;
		justify-content: space-between;
	}
	.menu li {
		list-style-type: none;
		display: block;
		position: relative;
	}

	.menu li a {
		display: flex;
		text-align: left;
		text-decoration: none;
		padding: 0.8rem;
		color: var(--brown);
	}
	.menu li a:visited {
		color: var(--brown);
	}

	.menu li a:hover,
	.menu li a:active {
		color: var(--hover);
		-webkit-text-stroke: 1px var(--hover);
		-webkit-text-stroke: 0.5px var(--hover);
	}

	.menu li:hover {
		cursor: pointer;
	}

	nav.primary-navigation a.active {
		color: var(--hover);
		-webkit-text-stroke: 1px var(--hover);
		-webkit-text-stroke: 0.5px var(--hover);
	}

	nav ul li ul {
		visibility: hidden;
		opacity: 0;
		position: absolute;
		padding-left: 1em;
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
		padding-right: 2em;
		box-shadow: 0px 3px 5px -1px #ccc;
		transition: all 0.3s ease;
	}

	nav ul li ul li {
		clear: both;
		width: 100%;
		text-align: left;
		margin-bottom: 0.2em;
		border-style: none;
	}

	nav ul li ul li a:hover {
		padding-left: 10px;
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
</style>
