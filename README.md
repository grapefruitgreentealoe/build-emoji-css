
## this project is for building css file for emoji icon 

```
// install packages
yarn

// build scss and css files
yarn build
```

````
//file tree
├── index.html //show example code about how to use built emoji css file
├── sass
├── package.json
├── build
│   └──css
│       └── index.css // built css from scss
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
````
