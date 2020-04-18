## Vue Mastery - Introduction to Vue

### Vue Instance

### Problem

We need a way to take the variable `product` from our JavaScript and have it show up in the `h1` of our HTML.

Our first step is to include Vue in our project, which we`ll do by adding this line in our `.html` file, just above the `main.js` script.

```
<script src="https://unpkg.com/vue"></script>
```

Next in our `main.js` we`ll write the following:

```
//var product="Socks";

var app = new Vue({
    el: '#app',
    data: {
        product: "Socks"
    }
});
```

And then in our `.html` we`ll use our first JavaScript expression:

```
<div id="app">
    <h1>{{ product }}</h1>
</div>
```

When we save this, we`ll see "Socks" appear on our webpage.

It worked. Data from our JavaScript is showing up in our HTML. But what did we just do? Let`s break it down:

### The Vue Instance

```
var app = new Vue({options})
```

A Vue instance is the root of our application. It is created by passing an options object into it. Just like it sounds, this object has a variety of __optional__ properties that give the instance the ability to store data and perform actions.

### Plugging in to an Element

```
el: '#app',
```

The Vue instance is then plugged into an elemant of your choosing, forming a relationship between the instance and that portion of the DOM. In other words, we're activating Vue on the div with the id of `app` by setting '`#app`' as the element (`el`) that our instance is plugged into.

### Putting our data in its place
A Vue instance has a place for data, in its data property.

```
data: {
    product: "Socks"
}
```

### Using an Expression
If we want our `product` to appear in our `h1`, we can put `product` inside these double curl braces.

```
<h1>{{ product }}</h1>
```

How does it work? Inside the double curly braces, we're using a JavaScript expression.

### Important Term: Expression

Expression allow us to utilize existing data values, together with logic, to produce new data values.

When Vue sees the expression `{{ product }}`, it recognizes that we are referencing the associated Vue instance's data, and it replaces that expression with the __value__ of product instead, in this case: "Socks".

### Some other ways expressions can be used:

```
{{ product + '?' }}
{{ firstName + ' ' + lastName }
{{ message.split('').reverse().join('') }}
```

### Introducing Reactivity
The reason Vue is able to display `product`'s value immediately is because Vue is __reactive__. In other words, the instance's data is linked to every place that data is being referenced. So not only can Vue make its data appear within the HTML that references it, but that HTML will be updated to display new values any time that referenced data changes.

To prove that, let's open the console and change the value of our product string (`app.product = ...`). Look what happens.

What we have learned?
- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance's data can be displayed using the moustache-like syntax `{{}}` called an expression
- Vue is reactive

## Learn by doing
### Challenge
Add a `description` key to our existing data object with the value "A pair of warm, fuzzy socks". Then display `description` using an expression in a `p` element, underneath the `h1`.




