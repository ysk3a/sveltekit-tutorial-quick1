# summary

- how load fn is called:
    - user visits website, the server(?) will call the fn one time to get the data to the component
    - the page is sent to the browser and the load function will be called again to hydrate the data to make the data up to date. ( i believe this is called universal load fn )
    - if you want to avoid this and only want it to be called on the server ( called the server load fn ) then change the file name to containing .server. e.g. +layout.server.ts. This is useful for hdiing api keys and keeping things away from the client. 
    - what is your data depends on the url or the user being logged in? 
        - load fn recieves a param obj that contains lots of props 
        - e.g. params, cookies, parent (access to parent layout), current url and slug for any search params.
        - lets say you have cookies that know that a user is logged in then you can make the load function redirect user to different page. 
    - load function is the main way to fetch data.
    
# questions and notes:
- $page from $app/store only fetch from layout.server.ts ?
- if contain both layout.ts and layout.server.ts then layout.ts > layout.server.ts ?
- everytime route changes load is called. How to not call so many times if user change route multiple times quickly?
- but i don't see recipe-client logged in vscode terminal. only browser console. even though doc says: 
> +page.js and +layout.js files export universal load functions that run both on the server and in the browser

- data creation and forrm actions
    - we have a form element. we need to send this form data somewhere. this is where form actions come in.
    - you need page action, that is in +page.server.ts, which a code on the server side that is responsible for catching the result of form action. 
        - this is where you would save things in db or login the user.
    - for simplicity, no named form action used.
- use:enhance 
    - you can catch values from formaction using the use:enhance directive
    - you can then augment the form e.g. validation, error msg, show loading, catch redirect


- from svelte d3 tutorial:
```txt
This is a simple template for creating data visualizations with Svelte. It was primarily created for my /newline course, "[Better Data Visualizations with Svelte](newline.co/courses/better-data-visualizations-with-svelte/welcome)."

It uses [Svelte](svelte.dev/) and [D3](d3js.org/). The D3 modules most commonly used in data visualization are already installed.

It also includes a simple CSS reset, as existing Svelte templates sometimes have styles that break data visualizations. There is little else added, the template is meant to be barebones.
```
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
