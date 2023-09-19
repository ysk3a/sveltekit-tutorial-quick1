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
