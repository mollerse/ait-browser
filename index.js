const {
  aitFFIUnwrapValue: unwrap,
  aitFFI__F: aitF,
  aitFFIWrapValue: wrap
} = require('ait-lang/ffi');

function createElement(n) {
  const name = unwrap(n);
  return wrap(document.createElement(name));
}

function setAttribute(val, attrName, el) {
  unwrap(el).setAttribute(unwrap(attrName), unwrap(val));
  return el;
}

function windowInnerHeight() {
  return wrap(window.innerHeight);
}

function windowInnerWidth() {
  return wrap(window.innerWidth);
}

function querySelector(query) {
  return wrap(document.querySelector(unwrap(query)));
}

module.exports = {
  createElement: aitF(1, 'createElement', createElement),
  setAttribute: aitF(3, 'setAttribute', setAttribute),
  windowInnerHeight: aitF(0, 'windowInnerHeight', windowInnerHeight),
  windowInnerWidth: aitF(0, 'windowInnerWidth', windowInnerWidth),
  querySelector: aitF(1, 'querySelector', querySelector)
};
