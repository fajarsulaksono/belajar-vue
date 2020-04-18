## Introduction to Vue - Conditional Rendering
In this lesson we'll be uncovering how to conditionally display elements with Vue.

### Our Goal
We want to display text that says if our product is in stock or not, based on our data.

### Starting Code

```
<div id="app">
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
        </div>
    </div>
</div>
```

```
data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: true
}
```

Notice we've added a new data property there at the bottom: `inStock`.

### Problem
Often in a web application, we want elements to appear on the page depending on if a condition is met or not. For instance, if our product is not in stock, our page should display the fact that it's out of stock.

So how could we conditionally render these elements, depending on whether our product is in stock or not?

```
<p>in Stock</p>
<p>Out of Stock</p>
```

### Solution
Vue's solution is simple and straightforward.

Given that our data contains this new property:

```
inStock: true
```

We can use the `v-if` and `v-else` directives to determine which element to render.

```
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
```
If `inStock` is truthy, the first paragrap will render. Otherwise, the second paragraph will. In this case, since the value of `inStock` is true, the first paragraph will render.

Great. We've used conditional rendering to display whether our product is in stock or not. Our feature is done. But let's explore conditional rendering some more before we move onto our next topic.

### Additional Conditional Syntax: v-else-if
We can add a third degree of logic with `v-else-if`. To demonstrate, let's use an example that is a bit more complex.

If our data looked something like this:

```
inventory: 100
```

We could use expressions, inside the quotes, to make our conditions more specific.

```
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <=10 && inventory > 0">Almost sold out!</p>
<p v-else>Out of stock</p>
```

The element that will render is the first element whose expression evaluates to true.

### Additional Conditional Syntax: v-show

If your app needs an element to frequently toggle on and off the page, you'll want to use the `v-show` directive. An element with this directive on it will always be present in our DOM, but it will only be visible on the page if its condition is met. It will conditionally add or remove the CSS property `display: none` to the element.

This method is more performant than inserting and removing an element over and over with `v-if` / `v-else`.

```
<p v-show="inStock">In Stock</p>
```

However, in the product app we're building, using `v-if` and `v-else` works just fine, so we'll keep that as our solution.

### What we have learned
- There  are Vue directives to conditionally render elements:
* `v-if`
* `v-else-if`
* `v-else`
* `v-show`
- If whatever is inside the directive's quotes is truthy, the element will display.
- You can use expressions inside the directive's quotes.
- `v-show` only toggles visibility, it does not insert or remove the element from the DOM.

