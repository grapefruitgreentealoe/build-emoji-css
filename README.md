# emoji-with-gulp

```
// install packages
yarn

// build scss and css files
yarn build
```

````
//file tree

├── package.json 
├── sass 
│   └── emojis
│       ├── _all.scss
│       ├── activity
│       │   └── _all.scss
│       ├── flags
│       │   └── _all.scss
│       ├── foods
│       │   └── _all.scss
│       ├── nature
│       │   └── _all.scss
│       ├── objects
│       │   └── _all.scss
│       ├── people
│       │   └── _all.scss
│       ├── places
│       │   └── _all.scss
│       └── symbols
│           └── _all.scss
├── src
│   ├── generate.js // generate emoji data
│   └── index.js // make scss file
├── template //template for emoji scss
│   ├── _emojis.mustache
│   └── _imports.mustache
├── webpack.config.js
└── yarn.lock
```