## Introduction to Vue - List Rendering
In this lesson, we'll learn how to display lists onto our webpages with Vue.

### Our Goal
We want to be able to display a list of our product's details.
```
- 80% cotton
- 20% polyester
- Gender-neutral
```

### Starting Code
Our project's code currently looks like this:

```
<div id="app">
    <div class="product">
        
        <div class="product-image">
            <img v-bind:src="image">
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
        </div>

    </div>
</div>
```

```
data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: true,
    //New details
    details: ["80% cotton", "20% polyester", "Gender-neutral"]
}
```

What's new here is our array of `details` at the bottom.

### Problem
We want our page to display our product's `details`. How can we iterate through this array to display its data?

```
details: ["80% cotton", "20% polyester", "Gender-neutral"]
```

### Solution
Another Vue directive to the rescue. The `v-for` directive allows us to loop over an array and render data from within it.

```
<ul>
    <li v-for="detail in details">{{ detail }}</li>
</ul>
```

Now we have our details showing up in a list. But how is this working?

The syntax within the quotes of the `v-for` directive may look familiar if you have used JavaScript's `for of` or `for in` before. The `v-for` works like this:

We use a singular noun (`detail`) as an __alias__ for the string in the array we are iterating over. We then say `in` and name the __collection__ (`details`) that we are looping through. Inside the double curly braces, we specify what data to be displayed there (`{{ detail }}`).

Since our `v-for` inside `<li>`, Vue will print out a new `<li>` for each detail in our `details` array. If our `v-for` was inside a `<div>`, then a `div` would have been printed out for each array item along with its content.

You can envision `v-for` like an assembly line, where a mechanical arm takes an element from the collection one at a time in order to construct your list.

Let's take a look at a more complex example, displaying an object's data in a div.

## Iterating Over Objects
### Problem
The product page we're building needs to be able to show different versions of the same product, based on an array in our data of `variants`. How would we iterate through this array of objects to display its data?

```
variants: [
    {
        variantId: 2234,
        variantColor: "green"
    },
    {
        variantId: 2235,
        variantColor: "blue"
    }
]
```

Let's display the color of each variant. We'll write:

```
<div v-for="variant in variants">
    <p>{{ variant.variantColor }}</p>
</div>
```

In this case, we just want to display the color from the variant object, so we're using dot notation to do so. If we wrote {{ variant }} we'd display the entire object.

Note that is recommended to use a special key attribute when rendering elements like this so that Vue can keep track of each node's identity. We'll add that in now, using our variant's unique `variantId` property.

```
<div v-for="variant in variants" :key="variant.variantId">
    <p>{{ variant.variantColor }}</p>
</div>
```

### What we have learned
- The `v-for` directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, an specify the name of the array we are looping through. Ex: `v-for="item in items"`
- We can loop over an array of objects and use dot notation to display values from the objects
- When using `v-for` it is recommended to give each rendered elements its own unique key

### Learn by doing
### Challenge:
Add an array of `sizes` to the data and use `v-for` to display them in a list.
