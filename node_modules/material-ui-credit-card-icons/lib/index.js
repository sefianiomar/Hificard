'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon_Visa = exports.Icon_MasterCard = exports.Icon_JCB = exports.Icon_Discover = exports.Icon_DinersClub = exports.Icon_CreditCardOutline = exports.Icon_AmericanExpress = undefined;
exports.getCreditCardIconByName = getCreditCardIconByName;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon_AmericanExpress2 = require('./Icon_AmericanExpress');

var _Icon_AmericanExpress3 = _interopRequireDefault(_Icon_AmericanExpress2);

var _Icon_CreditCardOutline2 = require('./Icon_CreditCardOutline');

var _Icon_CreditCardOutline3 = _interopRequireDefault(_Icon_CreditCardOutline2);

var _Icon_DinersClub2 = require('./Icon_DinersClub');

var _Icon_DinersClub3 = _interopRequireDefault(_Icon_DinersClub2);

var _Icon_Discover2 = require('./Icon_Discover');

var _Icon_Discover3 = _interopRequireDefault(_Icon_Discover2);

var _Icon_JCB2 = require('./Icon_JCB');

var _Icon_JCB3 = _interopRequireDefault(_Icon_JCB2);

var _Icon_MasterCard2 = require('./Icon_MasterCard');

var _Icon_MasterCard3 = _interopRequireDefault(_Icon_MasterCard2);

var _Icon_Visa2 = require('./Icon_Visa');

var _Icon_Visa3 = _interopRequireDefault(_Icon_Visa2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Icon_AmericanExpress = _Icon_AmericanExpress3.default;
exports.Icon_CreditCardOutline = _Icon_CreditCardOutline3.default;
exports.Icon_DinersClub = _Icon_DinersClub3.default;
exports.Icon_Discover = _Icon_Discover3.default;
exports.Icon_JCB = _Icon_JCB3.default;
exports.Icon_MasterCard = _Icon_MasterCard3.default;
exports.Icon_Visa = _Icon_Visa3.default;
function getCreditCardIconByName(iconName) {
  if (iconName == 'AmericanExpress') {
    return _react2.default.createElement(_Icon_AmericanExpress3.default, null);
  }
  if (iconName == 'DinersClub') {
    return _react2.default.createElement(_Icon_DinersClub3.default, null);
  }
  if (iconName == 'Discover') {
    return _react2.default.createElement(_Icon_Discover3.default, null);
  }
  if (iconName == 'JCB') {
    return _react2.default.createElement(_Icon_JCB3.default, null);
  }
  if (iconName == 'MasterCard') {
    return _react2.default.createElement(_Icon_MasterCard3.default, null);
  }
  if (iconName == 'Visa') {
    return _react2.default.createElement(_Icon_Visa3.default, null);
  }
  return _react2.default.createElement(_Icon_CreditCardOutline3.default, null);
}
//# sourceMappingURL=index.js.map