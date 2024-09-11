function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var ACButton = function ACButton(_ref) {
  var btnText = _ref.btnText,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size;
  return /*#__PURE__*/React.createElement("button", {
    className: className + " " + variant + " " + size,
    "aria-label": typeof btnText === 'string' ? btnText : ''
  }, btnText);
};

exports.ACButton = ACButton;
//# sourceMappingURL=index.ts.js.map
