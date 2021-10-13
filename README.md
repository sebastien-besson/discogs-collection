# discogs-collection

## Project setup
```
yarn install
cp .env.dist .env
```

You need to create a Discogs application on the Developer Settings: https://www.discogs.com/settings/developers

When it done, copy your key and secret to the .env file

```
VUE_APP_DISCOGS_KEY='YourKey'
VUE_APP_DISCOGS_SECRET='YourSecret'
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
