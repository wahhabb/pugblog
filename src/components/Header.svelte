<script>
	import { page } from '$app/stores';
</script>

<header>
	<p class="logo"><a href="/">Deep Web Works</a></p>
	<nav class="primary-navigation">
		<ul>
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
					<!-- <li>
						<a class:active={$page.url.pathname === '/blog/sveltekit'} href="/blog/sveltekit"
							>Use SvelteKit with MySQL</a
						>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/blog/mysit'} href="/blog/mysite"
							>How this Site was Built</a
						>
					</li> -->
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

	nav.primary-navigation a.active {
		color: var(--hover);
		-webkit-text-stroke: 1px var(--hover);
		-webkit-text-stroke: 0.5px var(--hover);
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
		padding-right: 2em;
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
</style>
