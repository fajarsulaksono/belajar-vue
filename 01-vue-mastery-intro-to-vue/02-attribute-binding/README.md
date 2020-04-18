## Vue Mastery - Introduction to Vue

### Attribute Binding
In this lesson, we'll explore ways you can connect data to the attributes of your HTML elements.

### Our Goal
We'll use attribute-binding in order to display an image and attach alt text to it based on values from our instance's data.

### Starting Code
Currently our HTML looks like this:

```
<div id="app">
    <div class="product">
        <div class="product-image">
            <!-- We want image data to be dynamically bound here -->
            <img src="" />
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
        </div>
    </div>
</div>
```

We've created a `div` for the product image and the product info, in order to style them with `Flexbox`.

And our JavaScript looks like this:

```
var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "assets/vmSocks-green-onWhite.jpg"
    }
})
```

Notice we've added an `image` source to our data.

### Problem
We want an image to show up on our page, but we need it to be dynamic. We want to be able to update that image in our data and have the image automatically update on the page. Since our `src` attribute is what pull the image into this element, we'll need data to be bound to `src` so that we can dynamically display an image based on the data at that time.

### Important Term: Data Binding
When we talk about data binding in Vue, we mean that the place where it is used or displayed in the template is directly linked, or bound to the source of the data, which is the data object inside the Vue instance.

In other words, the host of the data is linked to the target of the data. In this case, our data is hosted by the data property of our Vue instance. And we want to target that data from our `src`.

### Solution
To bind the value of `image` in our data object to the `src` in our `img` tag, we'll use Vue's `v-bind` directive.

```
<img v-bind:src="image" />
```

This evaluates to:

```
<img src="assets/vmSocks-green-onWhite.jpg" />
```

Voila! Our image appears. If the value `image` were to change, the `src` will update to match, and the new image will appear.

```
image: "assets/vmSocks-green-onWhite.jpg"
```

Again, this happens because the data that lives in `image` is __bound__ to our `src` attribute.

Additional Usages
We can use `v-bind` again here if we want to bind alt text data to this same `img` element.

If we add this in our data:

```
altText: "A pair of socks"
```

We can bind that to the `alt` attribute like so:

```
<img vi-bind:src="image" v-bind:alt="altText" />
```

In both of these cases, we've used the syntax `v-bind` and after the colon `:`, we've stated which attribute we're binding the data to, `src` and `alt` in this case.

Now whenever the `image` and `altText` data changes, that updated data will remain linked to the `src` and `alt` attributes.

This is a very commonly used feature in Vue. Because it's so common, there's a shorthand for `v-bind`, and it's just a colon `:`

```
<img :src="image" />
```

Simple, clean, and handy.

### Learn by doing
### Challenge:
Add a link to your data object, and use `v-bind` to sync it up with an anchor tag in your HTML. Hint: you'll be binding to the `href` attribute.




