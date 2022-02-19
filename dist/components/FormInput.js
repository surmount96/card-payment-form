"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function FormInput() {
  const [card, setCard] = (0, _react.useState)('');
  const [status, setStatus] = (0, _react.useState)(false);

  const addSpacing = value => {
    let data = value;
    let strLength = value.length;
    let tracker = [4, 9, 14];

    if (tracker.includes(strLength) && !status) {
      data += ' ';
    }

    setCard(data);
    console.log(value);
  };

  const updateCard = e => {
    e.persist();

    if (e.target.value.length < 20) {
      addSpacing(e.target.value);
    }
  };

  const listenTODelete = e => {
    if (e.key === 'Backspace') setStatus(true);else setStatus(false);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-40 my-4 bg-white rounded-md"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: card,
    onChange: updateCard,
    onKeyDown: listenTODelete,
    className: "focus:outline-red-100 py-3 px-10 text-sm",
    placeholder: "5399 9089 1234 1970"
  })));
}

var _default = App;
exports.default = _default;