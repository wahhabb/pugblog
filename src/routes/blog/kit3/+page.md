<svelte:head>
	<title>SvelteKit 3&mdash;Using MySQL</title>
	<meta name="description" content="Learn how to integrate MySQL into SvelteKit for a full-stack web app." />
</svelte:head>

# SvelteKit 3&mdash;Using MySQL with SvelteKit
<img class="flt_r" src="/MySQL-logo.png"  alt="MySQL logo" />

    In order to create a full-stack application, it is typically necessary to connect with a database of some kind. SvelteKit offers integration with popular databases, whether noSQL (like MongoDB or Redis) or SQL (like MySQL or PostgreSQL). SQL databases can be accessed directly or through wrappers like Prisma.

    Whatever the database, the way of using it with SvelteKit is largely the same. For this example, we will use MySQL in its native format, but you should easily be able to adapt this to your preferred database.

    We will want the database code to run on the server only, while other code will run on the client. Fortunately, SvelteKit makes it easy to determine where our code will run. A file named `+page.js` will run on the client, while a file named `+page.server.js` will run on the server!

    You can see the simple app we are developing [here](https://kit-mysql.vercel.app/). It comes up with a button for each state, and when you click on a state, displays information about that state above all the buttons.

    How do we develop an app that uses MySQL? One approach is using a package called MAMP, which stands for MacOS (the operating system); Apache (the web server); MySQL or MariaDB (the database management system); and PHP, Perl, or Python (programming languages used for web development). There are also WAMP and XAMP for Windows or Xenix. Of course, we will be using SvelteKit rather than PHP.

    I won’t go into all the details of using MAMP here. Both Intel and Mac M1/M2 versions can be [downloaded here](https://www.mamp.info/en/downloads/). The Windows versions (both 32 bit and 64 bit) can be [downloaded here](https://www.wampserver.com/en/download-wampserver-64bits/). Once they are installed, on Mac, open `manager-osx.app`, click on "Manage Servers," and fire up the Apache Web Server and MySQL Database. Once the buttons turn green, bring up a web browser and go to localhost/dashboard/. From there, you can click on phpMyAdmin to create and modify MySQL databases.

    Of course, you don’t need MAMP or WAMP. You can also start directly by having your database hosted on a server to which you have access. Read about local development for whatever database you may be using. But it is very convenient to have a fully self-contained environment for your development work.

## Creating Our Database

    Since my purpose here is not to teach MySQL, but rather to show how to integrate it with SvelteKit, my example will be very simple. I have hosted a database that you can use for this exercise. But if you would like to build it yourself for use in the WAMP/MAMP/XAMP environment, I have exported my local version to a file `statedatabase.sql` which you can find at the top level of [my Github repo](https://github.com/wahhabb/kit-mysql) for this blog entry.

##  Connecting with the Database

    Before using a database, it is necessary to open a connection with it, passing credentials. For this sample, I have hard-coded the credentials into a file. For any real project, the credentials shoud be retrieved from environment variables, and not be stored on Git or in other places where they might be stolen.

    In order to use MySQL in SvelteKit, we must install it. From your command prompt, enter `npm install mysql2` and wait for it to be installed.

Now we will create a file to handle database connections. We’ll call it `/src/lib/db/mysql.js`. Add the following code to it:

```javascript
import mysql from "mysql2/promise";
import { env } from '$env/dynamic/private';

// console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
let myPool = null;

export async function myPoolFn() {
  try {
    myPool = await mysql.createPool({
          host: env.SQL_HOST,
          user: env.SQL_USER,
          password: env.SQL_PASSWORD,
          database: env.SQL_DATABASE,
    // // used for development with MAMP
    //   host: "127.0.0.1",
    //   user: "root",
    //   password: "",
    //   database: "statedata",          
    });
  } catch(error) {
    console.error("Got an error on getting pool!!!");
    console.error(error);
    return error;
  }
  return myPool;
}
```

As you can see, this function creates two alternate ways to connect to the database. The first, which is commented out, has connections for developing using the database locally. The second, currently uncommented, connects with the database I have hosted and given you access to with a read-only user.

You will notice that user, password, etc. are given values in the form of `env.SQL_` This is to prevent people from gaining access to your database. To use these, when running this site, you must set the corresponding values for those environment variables. In this case, I will share those environment variables with you so you can build this and see it work. Here they are:

```
SQL_HOST		srv766.hstgr.io
SQL_USER		u384526927_wahhabb
SQL_PASSWORD	sT4t3s&!ccmc9
SQL_DATABASE	u384526927_States
```

You can set these environment variables in your terminal session before bringing up the site. For production, for example in Vercel, there is a place for you to save the environment variables so they cannot be seen by others, and Vercel will set those environment variables when it spins up your site.


## Getting Data on Page Load

When we load our page, we want to get the list of state names. For simplicity, we will display these as a bunch of buttons, rather than as a dropdown or other way of selecting. Our goal is to let the user click on a button and get information about that state.

In order to make the list of state names available to our page, we will create a new file, `+page.server.js`. Add the following code to this file:

```javascript
import mysql from "mysql2/promise";
import { myPoolFn } from "$lib/db/mysql.js";

export async function load() {
  try {
    const pool = await myPoolFn();
    let results = await(pool.query('SELECT state FROM states;')
      .then (function ([rows, fields]) {
        //        console.log(rows);
        return rows;
    }))
    await pool.end();
    return {
      data: results,
    }
  } catch (error) {
    console.error("Got an error getting state data!!!");
    console.error(error);
    return error;
  }
}

```

As you can see by examining the code, this has a load function which gets the array of states from the database and returns it for use by `+page.svelte`. So let’s rewrite that file to receive and make use of it.

## Displaying the State Names

The current page, `/src/routes/+page.svelte`, doesn’t have much on it. Let’s begin by replacing it with the following code:

```javascript
<script>
    let res;
	let statedata = $state('');
	async function xget(st) {
        const response = await fetch("/api/getstate", {
            method: 'POST',
            body: JSON.stringify({st}),
            headers: {
                'content-type': 'application/json'
            }
        
        });

        res =  await response.json();
        statedata = res[0];
	}
    let { data } = $props();
</script>
```

```html
<h1>Get State Information</h1>
{#if statedata}
    <p>The capital of {statedata.state} is {statedata.capital}!</p>
    <p>Its abbreviation is {statedata.abbr}.</p>
    <p>It is in the {statedata.region} region.</p>
    <p>Its state bird is the {statedata.bird}.</p>
{/if}
<h2>Click state name to see data above.</h2>
{#each data.data as state}
  <button onclick={() => xget(state.state)}>{state.state}</button>
{/each}

```

```css
<style>
    button, p {
        padding: .5em .8em;
        margin: .5em;
        font-size: 110%;
    }
    button {
        background-color: #DDF;
    }
 </style>
```

At this point, you should see a button for each state with the state name on it. The state names have been retrieved by `+page.server.js` and are passed through as props, and retrieved by the line

`let { data } = $props();`

When the page is initially displayed, `statedata` has not been set, and so the four `<p>` statements are not displayed.

If you like, you can improve the overall look of the page by adding some appropriate CSS. I went into `app.html` and added a style statement to put `1em` of padding on the body. You might want to add a bit of color or whatever. But now let's see what happens when we click on those buttons!

## Looking up State Data

In order to retrieve data for a state, we need to issue a POST request, as if we had submitted a form (and of course, we could have created a form). As you can see, when you click on a state button, the function `xget` is called and the state name is passed to it. That function in turn issues a `fetch` which is received by `+server.js` at `routes/api/getwserver.js`.

The POST data will be converted to JSON to be transmitted, and this function converts it back and extracts the state name. After ensuring it has a database connection, it selects all the data for that state, and returns it as an array (with just one entry) of objects holding the state data.

When the `fetch` completes, it converts the transmitted data from JSON back to an object, and pulls the content out of the array. This fetch function built into SvelteKit has a few additional features to the native fetch web API, which you can read about [in the docs.](https://kit.svelte.dev/docs/load#making-fetch-requests) In the present case, it avoids the overhead of an HTTP call and goes directly to the handler function.

Now that `statedata` has a value, the `#if` condition is satisfied, and the results are inserted in front of the buttons. If there was already state data displaying, the values of the four lines are updated with the  values of the new state’s capital, abbreviation, region, and state bird.

## Ta-Da!

Congratulations! You have successfully built a simple web app that accesses MySQL both on page load and in response to a user action.

In the [next post](kit4), we will use this simple webpage to learn how to make a SvelteKit website go live!