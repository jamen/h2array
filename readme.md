# h2array
```js
['header', [
  ['h1', 'hello world'],
  ['nav', [
    ['a', { href: '/foo' }, 'foo'],
    ['a', { href: '/bar' }, 'bar'],
    ['a', { href: '/baz' }, 'baz']
  ]]
]]
```
This module provides a variant of `h()` for storing calls as arrays, allowing you to serialize them as JSON for later use.

## usage
[![NPM](https://nodei.co/npm/h2array.png?mini)](https://www.npmjs.com/package/h2array)

### `h(tag, attributes?, children?)`
Stores `tag`, `attributes`, and `children` in an array. Handles any missing arguments according to [`hyper2/h2spec`](https://github.com/hyper2/h2spec).
```js
> const h = require('h2array')
> h('h1', 'hello world')
['h1', null, 'hello world']
```

### `convert(h, node)`
Applies `h` to `node` and all its children.
```js
> const convert = require('h2array/convert')
> const h2ml = require('h2ml')
> const tree = ['h1', { style: 'color: red' }, 'hello world']
> convert(h2ml, tree)
"<h1 style='color: red'>hello world</h1>"
```
