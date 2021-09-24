module.exports = function h(tag, attributes, children) {
  if (!children && (typeof attributes !== 'object' || Array.isArray(attributes))) {
    children = attributes
    attributes = null
  }
  return [tag, attributes, children]
}
