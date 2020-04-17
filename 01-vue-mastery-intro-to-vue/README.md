## Vue Mastery - Introduction to Vue

### Vue Instance

### Problem

We need a way to take the variable `product` from our JavaScript and have it show up in the `h1` of our HTML.

Our first step is to include Vue in our project, which we’ll do by adding this line in our `.html` file, just above the `main.js` script.

```
<script src="https://unpkg.com/vue"></script>
```

Next in our `main.js` we’ll write the following:

```
//var product="Socks";

var app = new Vue({
    el: '#app',
    data: {
        product: "Socks"
    }
});
```
