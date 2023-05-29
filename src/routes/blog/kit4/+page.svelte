<script>
	import { HtmlTag } from  'svelte/internal';
    import Prism from '$lib/components/PrismJS.svelte';
	import { k1s, k2h, k3j, k3h, k3s, k4j, k5j, k5h } from './kit4code.js';
</script>

<svelte:head>
	<title>Moving SvelteKit Sites to Production</title>
	<meta name="description" content="You’ve created a website in SvelteKit -- now how do you share it with the world?" />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  Moving SvelteKit Sites to Production 
img.flt_r(src="/svelte-kit-machine.jpg"  alt="SvelteKit Machine") 
p. 
   We’ve explored creating websites in SvelteKit, and discovered that it provides a great development environment. But for that website to be useful, it needs to be exposed to the world. This post will look at several ways of accomplishing that, some even free of charge!

h2  Building for Production.
p.
    Until now, we have been running a test version of our SvelteKit sites. This is quick and convenient, and provides useful feedback when something goes wrong, but a site built for production needs to be built differently. The code is optimized, and prerendering is done if needed.
p.    
   Typically, you do a production build with the command 
   <br>!{cd}npm run build!{ecd}<br>  
   However, before doing this, you need to specify details about the kind of build that should be created in the svelte.config.js file. This is done by specifying an <i>adapter</i> for the target environment. 
p.    
    There are many different ways in which to host a SvelteKit site. In fact, if most of your experience is (for example) hosting on shared servers for WordPress, you may be startled by the range of options.
p.
    Official adapters are described in detail in the <a href="https://kit.svelte.dev/docs/adapters">documentation</a>, but the current list consists of the following:

ul   
    li  @sveltejs/adapter-cloudflare for Cloudflare Pages
    li  @sveltejs/adapter-cloudflare-workers for Cloudflare Workers
    li  @sveltejs/adapter-netlify for Netlify
    li  @sveltejs/adapter-node for Node servers
    li  @sveltejs/adapter-static for static site generation (SSG)
    li  @sveltejs/adapter-vercel for Vercel
p.
    Additional community-provided adapters exist for other platforms.
p.
    This is a lot of choices! Rather than discuss them all, let’s dive in. Rich Harris, the original creator of Svelte and SvelteKit, has gone to work for Vercel, so not surprisingly, that is a good platform for hosting SvelteKit. We’ll start there.

h2  Hosting on Vercel
p.
    According to Wikipedia, Vercel, Inc. “is an American cloud platform as a service company. The company maintains the Next.js web development framework.
p.
    “Vercel’s architecture is built around Jamstack, and deployments are handled through Git repositories.”
p.
    Part of what is wonderful about Vercel is that it essentially eliminates the ops portion of web development. You maintain your source code on GitHub, GitLab, or Bitbucket. Every time you push new code, Vercel automatically generates a new build of your site and pushes it to a global edge network. Use for personal or non-commercial projects is free of charge!
p.
    While there is a Vercel adapter for SvelteKit, we are not using any Vercel-specific features, so the adapter-auto that is specified by default will work fine.

h2  Sign Up for GitHub
p.
    If you have an account with GitHub, GitLab, or Bitbucket, you can skip this step. If not, go to GitHub.com and sign up for an account. 
p.
    Once you have created an account, you will be invited to create your first project. On my screen, there is a green button saying, “Create repository”.
p.
    Pressing this brings up a page saying “Create a new repository.” Create a name for your repository. We are going to use this as a repository for the app you built in the previous post, that lists the states and gets data about them using MySQL, so choose a name like state_data. Add a description, and leave it public or make it private as you choose. Do not add a README file or add .gitignore, as we will be getting these from your local machine. Then click the green Create Repository button.
p.
    This will take you to a screen with instructions on filling this repository from your directory. Bring up a command line, navigate to where your files are located, and look at the directions under “..or create a new repository on the command line”. We’ll just change these a bit:
pre.
    git init
    git add -A
    git commit -am"First commit"
    git branch -M main
    git add origin https://github.com/xxxx/xxx.git
    git push -u origin main
p.
    The first line creates a local repository in the directory where you have your code. The second line adds all your files to it (except the ones that SvelteKit has specified in the .gitignore file they provide). The third line commits these files and gives a comment to that commit. For the fifth line, copy the code given on the GitHub page, which replaces the xxx's with your username and repository name. The last line pushes copies of your files up to your repository.
p.
    Congratulations! You have a GitHub repository. Now we are ready to take the next step, which is to sign up for Vercel.

h2  Sign Up for Vercel
p.
    Go to vercel.com, and click on Sign Up at the right end of the menu. the page, “Create Your Vercel Account" will come up. Choose Hobby, and enter your name. 
p.
    A page will now ask you, “Let’s connect your Git provider”. Click on the appropriate choice (Continue with GitHub if you’ve been following along). Click on “Authorize Vercel," and under “Import Git Repository," click on “Select a Git Namespace." Now choose “Add GitHub Account." You will be asked whether to allow Vercel access to all your GitHub repositories, or only those you specify. Make this selection, and then enter your GitHub password when requested. Then, on the line with your desired GitHub repository, click “Import”. 
p.
    This will take you to a page titled “You’re almost done." Under Configure Project, accept the Project Name or change if you with. Under Framework Preset, select SvelteKit. The Build and Output Settings should work without overrides. As mentioned earlier, credentials, such as login credentials to your database, would normally be provided through Environment Variables. For more information on using environment variables in SvelteKit, see <a href="https://kit.svelte.dev/docs/modules">SvelteKit’s documentation</a> or (on Vercel) <a href="https://vercel.com/docs/frameworks/sveltekit">Vercel’s documentation</a> on using SvelteKit on Vercel, which includes a number of useful tips.
p.
    That was easy! Now we’re ready for some payoff. Click the large, black Deploy button. Vercel will begin building the application, and in a matter of seconds, will build it, deploy it, and assign some domain names to it. If you go to Project Settings on the top menu, then choose Domains from the side menu, you can edit one of the domain names (actually, subdomain names of vercel.app) for example, mine will show at <a href="https://kit-mysql.vercel.app/">kit-mysql.vercel.app/</a>. Vercel also assigns a certificate so your app uses https and secure sockets.
p.
    If you want to use your own domain, Vercel tells you how to do that in its <a href="https://vercel.com/docs/concepts/projects/domains">documentation</a>.
p.
    You had to do some setup, but now you have a SvelteKit site running live on the Internet, where anyone can access it! And from this point forward, life becomes very easy.

h2  Making Changes
p.
    Let’s make a change to our website. In +page.svelte, add the following style:

<Prism language="css" code={k1s}  />
p.
    Now, just to change another file, let’s add a +layout.svelte file with the following code:

<Prism language="html" code={k2h}  />
p.
    Save the files, and go back to your command line. Enter !{cd}git status!{ecd} and it should show one modified and one added file. Enter the following:
pre.
    git add -A
    git commit -am"Add layout"
    git push
p.
    Let a few seconds go by, and then visit your webpage through the link Vercel gave you. Mirabile dictu! Your website has been automatically updated by Vercel just because you updated the source code on GitHub.
h2  Using Netlify
p.
    Netlify works very similarly to Vercel when it comes to hosting your SvelteKit site or app. This blog is hosted by Netlify. Netlify also has a generous free tier.
p.
    Both Vercel and Netlify provide a variety of useful functions that are specific to their framework that can be invoked from your SvelteKit code. For example, Netlify supports form submissions, background functions, edge functions (beta), large media using Git Large File Storage, etc. with pricing above certain usage. However, exploring these features (and Vercel’s specific features) is beyond the scope of this article.
p.
    Both Vercel and Netlify fall in the category of Jamstack hosts, standing for Javascript, APIs and HTML Markup. As a result, they do not host databases. To find a host that will include both MySQL hosting and host our SvelteKit site, we should use Node.
p.
    Cloudflare Pages is another Jamstack host that appears similar to Vercel and Netlify, but I have not used it.
h2  Deploying on Node
p.
    To produce a Node version of our site, we start by installing the appropriate adapter:
pre npm i -D @sveltejs/adapter-node
p.
    Next, we change the first line of svelte.config.js to
pre import adapter from '@sveltejs/adapter-node';
p.   
    Following that, run !{cd}npm run build!{ecd} to create the production server in the output directory specified in the adapter options, defaulting to !{cd}build!{ecd}. From this point, follow the directions listed in the SvelteKit <a href="https://kit.svelte.dev/docs/adapter-node">documentation.</a>
p.
    For a shared server host with cPanel, much as you might use for WordPress, you can use A2 hosting or Bluehost. Be sure to read their documentation on hosting Node applications. I haave used A2 for a Node website and been pleased with it. Their tech support was helpful to me as this was the first time I had deployed with Node. 
p.
    Of course, when you make changes to your site, it will be necessary for you to rebuild it and upload the new build to your host yourself (or find an automated tool that will do that for you).
p.
    Another low-cost provider for small projects is EvenNode. However, they support the MongoDB database rather than MySQL. But if you choose that, they have plans from 4.50€ monthly, with a 30-day free trial. Heroku supports Node and offers Postgres SQL, which is very similar to MySQL, with modest starting costs. For large-scale production systems, Amazon Web Services and its competitors Google Cloud Platform and Microsoft Azure are standard corporate choices.
p.
    Well, we've done it! Whether you’re a hobbyist, doing a small professional project, or wanting to build for a major corporation with millions of users, these are ways to take a SvelteKit site to production.
</template>
<style>
    pre {
        font-weight: 700;
        font-size: 1rem;
    }
</style>
