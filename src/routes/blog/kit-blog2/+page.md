<svelte:head>
	<title>Making a Blog in SvelteKit – 2</title>
	<meta name="description" content="Create a blog using SvelteKit--Continued" />
</svelte:head>


# Making a Blog in SvelteKit – Part 2

<img class="flt_r" src="/blog_image.jpg"  
    alt="Blog (design by geralt)"  style="width:50%"  />

In our [previous post](kit-blog1), we left a number of loose ends. Let's deal with those.

First, our blog pages lack titles and meta descriptions. If this is all we care about, there is a simple solution. At the beginning of our `+page.md` page, we can add the following code:

```html
<svelte:head>
	<title>My Blog's Title</title>
	<meta name="description" content="This is an example of a blog page built with SvelteKit." />
</svelte:head>
```

This adds the specified fields to the `<head>` section of our page.

However, we are also missing other metadata for this post: author, date, publication status, category and tags. So if we want these common blog features, it's better simply to roll the title and description in along with them and include them in Markdown's **front matter**. This is a block that must be the first thing in the Markdown file. It was developed specifically to support metadata for blog posts. It begins and ends with a line of three hyphens, and consists of a variable name ended by a colon, followed by a value or values. Here's an example:

```md
---
title: "My Blog's Title"
description: "This is an example of a blog page built with SvelteKit."
category: "SvelteKit"
tags: ["Markdown", "Blog", "SvelteKit"]
---
```

The `tags` could also be listed one per line, indented and preceded by a hyphen and a space:

```md
tags:
    - "Markdown"
    - "Blog"
    - "SvelteKit"
```

Best practices are to have strings quoted, numbers not quoted, booleans as `true` or `false` (unquoted) and dates quoted in the format `'YYYY-MM-DD'` (or `'YYYY-MM-DD HH:MM:SS +/-TTTT'`). 

When a Markdown page is displayed, the front matter is not included, but as we shall see, you can have programming access to the variables and their values. You can invent your own variable names.

In order to gain access to the front matter, we will need to treat the Markdown pages as data. Fortunately, that is not only easy to do, but brings other benefits as well. One is that rather than having a separate folder for each page with a `+page.md` file in it, we can put all blog pages in a single folder and give each page a potentially more expressive name, i.e. its slug.

Let's start with the sample blog we built in the last post. If you skipped that, you can get it from [my Github](https://github.com/wahhabb/blog_b1). 

For now, we'll continue to have a minimal home page. We'll just change it to provide a link to the blog page, which will list our blog posts in reverse chronological order (newest first). So just navigate to `src/routes/+page.svelte`, our home page, and change the second line to read

```html
<h2>Visit my <a href="/blog">Blog</a></h2>
```

Since we're making blog pages elsewhere, delete the folder `src/blog/post1` and its contents. Now, let's create three blog posts. Create a folder under `src` called `posts`. Within that, create new files that we'll call `blog1.md`, `blog2.md` and `blog3.md`.Here's the content of `blog1.md`:

```md
---
title: "Blog Post the First"
author: "Wahhab Baldwin"
datePosted: "01/02/2025"
summary: "1st blog post shows this is working."
---
## Yes, I'm the First Blog Post!

I may not say a lot, but you can tell if I'm working.
```

Not too exciting, but it will do for now. For `blog2.md` you can use

```md
---
title: "Blog Post the Second"
author: "Wahhab Baldwin"
datePosted: "01/08/2026"
summary: "2nd blog post sorts earlier."
---
## Yes, I'm the Second Blog Post!

I don't say any more than the fist post, but you can tell if I'm working. I'm earlier!
```

and for `blog3.md`:

```md
---
title: "Blog Post the Third"
author: "Wahhab Baldwin"
datePosted: "12/22/2025"
summary: "3rd blog post sorts in middle."
---
## At Last, I'm the Third Blog Post!

I may not say a lot, but you can tell if I'm working. My date is in the middle.
```

Be sure the front matter is consistent--failure to do so can cause problems unless you add more error-correction code than I will demonstrate in this post. I haven't followed my own advice about dates, so we'll need to convert our dates to sort them.

Now that we have our posts, we need to read them all in and extract the front matter from them. Vite offers us a tool to read them all at a single gulp. This is `import.meta.glob`. The default behavior of this to lazy load all the files. However, by adding `{eager: true}` as a parameter, all the loading is done at build time. Within the `src/routes` folder, create folder `api` with folder `posts` beneath that. In that folder, create a file called `+server.js` with the following code:

```js
//+server.js
import { json } from '@sveltejs/kit';

let cachedPosts = null;

async function getPosts() {
	if (cachedPosts != null) {
		return cachedPosts;
	}
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })
	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata 
			const post = { ...metadata, slug } // Add slug to metadata
			posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.datePosted) - new Date(first.datePosted) // convert strings to dates
	)

	cachedPosts = posts;	// Only run this function once
	return posts
}

export async function GET() {
	const posts = await getPosts()
	return await json(posts)
}
```

Several other authors show versions of this function, although many  use earlier versions of Svelte and SvelteKit (see Credits, below). However, most do not use the `eager: true` statement. Since this data is often retrieved for every page of the blog, using lazy loading can slow  performance as the number of blog posts increases. 

When new posts are added, the blog will be rebuilt, if we are using hosts like Netlify or Vercel. Therefore, we don't need to redo the work of analyzing and sorting the posts every time this function is called. For efficiency, I cache the value the first time it is generated and just use the cached value on all future calls.

This function returns the metadata, or front matter. It would be possible to get the post content here as well (see [here](https://www.aaronhubbard.dev/blogposts/text-from-module)). I extract the slug from the filename and add it to the metadata, and then sort the posts newest to oldest.

Now let's create a blog page that will display all this information. Under `blog`, create a `+page.svelte` file. Here's the code:

```svelte
<script>
    let { data } = $props();
 </script>

<h1>Welcome to My Blog</h1>

<ul>
	{#each data.posts as post, i}
		<li class="article" style="border-radius:2em;">
			<article>
					<h2>
						Title: <a href="/blog/{post.slug}">{post.title}</a>
					</h2>
                    <p>Slug: {post.slug}<br>
                    Date: {new Date(post.datePosted).toLocaleDateString('en-us', { month:"long", day: "numeric", year:"numeric" } )}<br>
                    Author: {post.author}</p>
                     <h3>{post.summary}</h3>
			</article>
		</li>
	{/each}
</ul>

<style>
    li  {
        list-style-type: none;
        background-color: beige;
    }
    li.article article {
        border-radius: 3 rem;
         margin-top: 2em;
        padding: 2em;
    }
</style>
```

This straightforwardly loops through the blog posts and displays their metadata. But how does  `$props()` get the data? We'll do that through another file in the same folder, `+page.server.js`. Create that file and add this code to it:

```js
export async function load({ fetch }) {
	const response = await fetch('/api/posts')
	const posts = await response.json()
	return { posts }
}
```
SvelteKit will automatically run this code when the page is loaded and pass the return value through the `props`.

We don't need the `+layout.svelte` file we have in the `blog` folder for this page, but we will want to use it for the posts. So let's create the folder that will display blog posts. Under the `blog` folder, add a folder named `[post]`. This odd naming convention means that any url that consists of `blog` plus something else, like `mysite.com/blog/visiting-greenland`, will use the `+page.svelte` code in this folder, and that `visiting-greenlad` will be passed to that page as a parameter. Move the file `+layout.svelte` from the `blog` folder to this new folder. 

At this point, we can see some results! Navigate to the top lovel directory of your project in a terminal window and run
`npm run dev -- --open`
This will bring up our minimal home page. Click on the home page link that says "Visit my blog." You should see a list of our three blog pages' titles, authors, dates, and summaries, sorted in date order.

The title on each entry has a link to the blog page, but there's no page there yet. Let's fix that.  Within the `[blog]` folder, add a `+page.svelte` file with the following code:

```svelte
<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
 <!-- Adapted from  Josh Collinsworth's Sveltekit-blog-starter -->
<script>
	let { data } = $props();
	
	const meta = $derived(data.meta);
	const { title, summary, datePosted, author } = $derived(data.meta);
	const PostContent = $derived(data.PostContent);
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={summary} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<!-- <img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/> -->

	<h1>{title}</h1>

	<div class="meta">
		<b>Author:</b>
		{author} <br />
		<b>Published:</b>
		{datePosted}
	</div>

	<PostContent />

</article>
```

This is mostly straightforward. The `meta` properties are added to the `head` of the page (the `og:` entries, referring to Open Graph, are used when your page is shared on social media). 

Once again, we need to use Javascript to load our blog page as data and pass it here. We do that by adding in the same folder a file named `+page.js` with the following code:

```svelte
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {	
		const post = await import(`../../../posts/${params.post}.md`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		error(404, err);
	}
}
```

If you recall from part 1, within the `+layout.svelte` file we now have in this folder, we created a sidebar to hold a list of recent posts for our post page. We'll import the list of posts the same way we did on the main blog page, into a file called `+layout.server.js`

```js
export async function load({ fetch }) {
	const response = await fetch('/api/posts')
	const posts = await response.json()
	return { posts }
}
```
Now we can show the results in the sidebar, by updating `+layout.svelte` to look as follows:

```svelte
<!-- This is adapted from a W3 Schools tutorial. -->
  <script>
    let { data, children } = $props();
  </script>

<svelte:head>
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
    <a href="../../"><b>Home</b></a>
  <b>Recent Posts</b>
    {#each data.posts as post, i}
      <a href="{post.slug}"><b>{post.title}</b>
      <br />
      Date: {new Date(post.datePosted).toLocaleDateString('en-us', { month:"long", day: "numeric", year:"numeric" } )}<br />
      Author: {post.author}<br />
      <i>{post.summary}</i></a>
  	{/each}

    <!-- <Sidebarlist /> -->
  </div>
  
  <!-- Page content -->
  <div class="content">
     {@render children()}
  </div> 
```
Navigate to `blog/blog2`, or click its link from your `blog` page, and you should see both the post with its metadata above it, and the list of recent posts in the sidebar.

At this point, the way forward is clear, and I will leave it to you to carry it out. We will want a `category` page that will give a clickable link of categories of your posts. First, you will need to add a category to the metadata of each post, and update places where metadata is displayed to list category as well. 

Next create a `category` folder below `blog` and add a copy of `blog/+page.server.js` to it. Create the `+page.svelte` page in the same folder, and in its `<script>` section, create a `$derived()` alphabetical list of the unique categories in the posts passed to it. This is straightforward Javascript. You can use the `Set()` constructor on the array of categories or just loop through the sorted list, including only unique entries. Then in the HTML code, have a loop like
```svelte
<#each categories as category>
    <li><a href="./{category}>{category}</a></li>
</each
```
Now create the folder `blog/categories/[category]`, and using the same approach as in the `[post]` folder, but getting the full list of posts, filter for those with the desired category. The same approach can be used for tags, the only difference being that tags will be in an array for each post.

One issue you will see when you run your blog is what is called FOUT: the Flash Of Unstyled Text. This is caused by the wait to download the fonts from Google Fonts. To solve this problem, host the fonts locally using FontSource. Read [their documentation](https://fontsource.org/docs/guides/svelte) and you will find it straightforward.

I hope you have enjoyed this journey! I certainly enjoyed scouting it out for you. I used many sources; here are a few that were most helpful to me.

## Credits
The more-or-less [classic site describing building a blog in SvelteKit](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) is an old one by Josh Collinsworth. It uses SvelteKit 1 and Svelte 3. Josh has created a new and more functional version of a [SvelteKit static blog starter](https://joshcollinsworth.com/projects) that you can use if your goal is simply to create a blog and not to learn SvelteKit, as he does not explain the code. This starter blog includes pagination and pages showing blogs by category or by tag.

The best modern explanation I have found is [this one](https://joyofcode.xyz/sveltekit-markdown-blog) from *The Joy of Code*.

Using `eager: true` is shown on a site at [thisdot.co](https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit).