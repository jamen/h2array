module.exports = function convert(h, node) {
  var stack = [[node]]
  var parents = []
  var parent = null
  while (stack.length) {
    var nodes = stack.pop()
    while (nodes.length) {
      var [tag, attributes, children] = nodes.pop()
      if (Array.isArray(children)) {
        stack.push(nodes)
        if (parent) {
          parents.push(parent)
        }
        parent = { tag, attributes, children: [] }
        nodes = children.slice()
      } else {
        if (parent) {
          parent.children.unshift(h(tag, attributes, children))
        } else {
          parent = { tag, attributes, children }
        }
      }
    }
    if (parents.length) {
      node = parent
      parent = parents.pop()
      parent.children.unshift(h(node.tag, node.attributes, node.children))
    }
  }
  return h(parent.tag, parent.attributes, parent.children)
}
