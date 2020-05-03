# Pure Documentation

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

The site is hosted on [Vercel](https://vercel.com/) and will automatically deploy when commits are merged to `master`.

### Including Pure

We want to use the locally built version of Pure so that the [layout examples](https://purecss.io/layouts/) are always using the `master` version, previously they had used a hardcoded CDN link.

To get Docusaurus to register the css as `static`, they have to exist in the `static/` directory before the site is built. Therefore, we copy the Pure `build/` in manually and `.gitignore` them. Once Docusaurus builds, they resolve as proper CSS files.

