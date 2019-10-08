"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("@rplan/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const externalService = _config.default.get('external_service');

console.log('externalService:', externalService);