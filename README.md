## Belajar VueJS

If you found error in developer console :
```
Vue.js is detected on this page. Devtools inspection is not available because it's in production mode or explicitly disabled by the author.
```

You are probably using Vue from CDN, and probably using a production build (`dist/vue.min.js`). Either replace it with a dev build (`dist/vue.js`) or add `Vue.config.devtools = true` to the main js file.