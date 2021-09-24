module.exports = function convert(h, node) {
  var tag = node[0]
  var attributes = node[1]
  var children = node[2]
  if (Array.isArray(children)) {
    children = children.map(convert.bind(null, h))
  }
  return h(tag, attributes, children)
}
