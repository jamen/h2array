
# h2json

> Create JSON nodes from h(...) calls

Creates a compact structure out of your `h(...)` calls, to be serialized as JSON afterwards

```js
h('div', { class: 'foo' }, 'hello world')
// ['div', { class: 'foo' }, 'hello world']

h('div', { class: 'bar' }, [
  h('span', 'hello'),
  h('span', 'world')
])
// ['div', { class: 'bar' }, [
//   ['span', 'hello'],
//   ['span', 'world']
// ]]
```

The objects created here are **only** intended for use with JSON because they are compacted.  Do not treat them like VDOM nodes.  Instead, look at a different `h2*` package for VDOM

To create a tree of proper nodes of your choosing from these objects (DOM, VDOM, string, etc), supply a `h` function and the parsed tree:

```js
h2json.create(h, nodes)
// '<div class="bar"><span>hello</span><span>world</span></div>'
```

## Usage

Functions exported as `{ h, create }`

### `h(name, data?, children?)`

### `create(h, tree)`

