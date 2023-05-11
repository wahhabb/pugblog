<script>
	import { HtmlTag } from  'svelte/internal';
    import Prism from '$lib/components/PrismJS.svelte';
	import { k1j, k2j, k3j, k3h, k3s, k4j, k5j, k5h } from './kit3code.js';
</script>

<svelte:head>
	<title>SvelteKit 3&mdash;Using MySQL</title>
	<meta name="description" content="Learn how to integrate MySQL into SvelteKit for a full-stack web app." />
</svelte:head>

<template lang="pug">
- var cd = '<span class="code">';
- var ecd = '</span>';
h1  SvelteKit 3&mdash;Using MySQL with SvelteKit
img.flt_r(src="/images/MySQL-logo.png"  alt="MySQL logo") 
p. 
    In order to create a full-stack application, it is typically necessary to connect with a database of some kind. SvelteKit offers integration with popular databases, whether noSQL (like MongoDB or Redis) or SQL (like MySQL or PostgreSQL). SQL databases can be accessed directly, or through wrappers like Prisma.
p.
    Whatever the database, the way of using it with SvelteKit is largely the same. For this example, we will use MySQL in its native format, but you should easily be able to adapt this to your preferred database.
p.
    We will want the database code to run on the server only, while other code will run on the client. Fortunately, Svelteit makes it easy to determine where our code will run. A file named +page.js will run on the client, while a file named +page.server.js will run on the server!
p.
    You can see the simple app we are developing <a href="https://kit-mysql.vercel.app/">here</a>. It comes up with a button for each state, and when you click on a state, displays information about that state below all the buttons.
p.
    How do we develop an app that uses MySQL? I do it using a package called MAMP, which stands for macOS (the operating system); Apache (the web server); MySQL or MariaDB (the database management system); and PHP, Perl, or Python (programming languages used for web development). Of course, we will be using SvelteKit rather than PHP.
p.
    I won’t go into all the details of using MAMP (or WAMP if you are on a Windows machine). Both Intel and Mac M1/M2 versions can be downloaded <a href="https://www.mamp.info/en/downloads/">here</a>. The Windows versions (both 32 bit and 64 bit) can be downloaded <a href="https://www.wampserver.com/en/download-wampserver-64bits/">here</a>. Once they are installed, on Mac, open manager-osx.app, click on "Manage Servers," and fire up the Apache Web Server and MySQL Database. Once the buttons turn green, bring up a web browser and go to localhost/dashboard/. From there, you can click on phpMyAdmin to create and modify MySQL databases.
p.
    Of course, you don’t need MAMP or WAMP. You can also start directly by having your database hosted on a server to which you have access. Read about local development for whatever database you may be using. But it is very convenient to have a fully self-contained environment for your development work.
h2  Creating Our Database
p.
    Since my purpose here is not to teach MySQL, but rather to show how to integrate it with SvelteKit, my example will be very simple. I have hosted a database that you can use for this exercise. But if you would like to build it yourself for use in the WAMP/MAMP/XAMP environment, I have exported my local version to a file statedatabase.sql which you can find at the top level of <a href="https://github.com/wahhabb/kit-mysql">my Github repo</a> for this blog entry.
h2  Connecting with the Database
p.
    Before using a database, it is necessary to open a connection with it, passing credentials. For this sample, I have hard-coded the credentials into a file. For any real project, the credentials shoud be retrieved from environment variables, and not be stored on Git or in other places where they might be stolen.
p.
    In order to use MySQL in SvelteKit, we must install it. From your command prompt, enter !{cd}npm install mysql2!{ecd} and wait for it to be installed.
p.
    Now we will create a file to handle database connections. We’ll call it /src/lib/db/mysql.js. Add the following code to it:
<Prism language="javascript" code={k1j}  />
p.
    As you can see, this function creates two alternate ways to connect to the database. The first, which is commented out, has connections for developing using the database locally. The second, currently uncommented, connects with the database I have hosted and given you access to with a read-only user.
p.
    In a production site, you would create a pool of database connections, using the functions createPool and getConnection rather than createConnection.

h2  Getting Data on Page Load
p.
    When we load our page, we want to get the list of state names. For simplicity, we will display these as a bunch of buttons, rather than as a dropdown or other way of selecting. Our goal is to let the user click on a button and get information about that state.
p.
    In order to make the list of state names available to our page, we will create a new file, +page.server.js. Add the following code to this file:

<Prism language="javascript" code={k2j}  />

p.
    As you can see by examining the code, this has a load function which gets the array of states from the database and returns it for use by +page.svelte. So let’s rewrite that file to receive and make use of it.

h2  Displaying the State Names
p.
    The current page, /src/routes/+page.svelte, doesn’t have much on it. Let’s begin by replacing it with the following code:
<Prism language="javascript" code={k3j}  />
<Prism language="html" code={k3h}  />
<Prism language="css" code={k3s}  />

p.
    At this point, you should see a button for each state with the state name on it. Clicking the buttons doesnvt do anything yet. If you like, you can improve the overall look of the page by adding some appropriate CSS. I went into app.html and added a style statement to put 1em of padding on the body. You might want to add a bit of color or whatever. But now we need to make something happen when we click on those buttons!

h2  Looking up State Data
p.
    In order to retrieve data for a state, we need to issue a POST request, as if we had submitted a form (and of course, we could have created a form). Let’s create the function that processes that POST. Since it needs to run on the server, we will call it +server.js, at the same level as our +page.svelte. Enter the following code into it:

<Prism language="javascript" code={k4j}  />
p.
    The POST data will be converted to JSON to be transmitted, and this function converts it back and extracts the state name. After ensuring it has a database connection, it selects all the data for that state, and returns it as an array (with just one entry) of objects holding the state data. 
p.
    Now let’s modify +page.svelte to issue the appropriate POST request on a button click, and to display the data. Add the following to the script section at the beginning of the file:
<Prism language="javascript" code={k5j}  />

p.
    This code uses a fetch to invoke the POST method we just created, converts the transmitted data back to an object from JSON, and pulls the content out of the array. This fetch function built into SvelteKit has a few additional features to the native fetch web API, which you can read about <a href="https://kit.svelte.dev/docs/load#making-fetch-requests">in the docs.</a> In the present case, it avoids the overhead of an HTTP call and goes directly to the handler function.
p.
    All that’s left for us to do is to wire up a call to our new function on a button click, and to display the results. Replace the three lines of the #each statement with the following:
<Prism language="html" code={k5h}  />
p.
    SvelteKit automatically updates the last lines based on the value of statedata. Initially, it is an empty string, so nothing shows. Each time you click on a button, its value will be updated, and you will see the four sentences with the state’s capital, abbreviation, region, and state bird.

h2  Ta-Da!
p.
    Congratulations! You have successfully built a simple web app that accesses MySQL both on page load and in response to a user action.
p.
    In the next blog entry, we will use this simple webpage to learn how to make a SvelteKit website go live!

</template>
