const convert = require('../convert')
const recurse = require('./recurse')
const bench = require('nanobench')
const tree = ['header', null, [
  ['h1', null, 'hello world'],
  ['nav', null, [
    ['a', null, 'foo'],
    ['a', null, 'bar'],
    ['a', null, 'baz']
  ]],
  ['span', null, 'goodbye world']
]]

bench(`recursion ${1e6} times`, b => {
  b.start()
  for (var i = 1e6; i--;) recurse(h, tree)
  b.end()
})

bench(`imperative ${1e6} times`, b => {
  b.start()
  for (var i = 1e6; i--;) convert(h, tree)
  b.end()
})

function h(tag, attributes, children) {
  return { tag, attributes, children }
}
