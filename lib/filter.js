var util = require('mace');
var config = util.use('./config.js');

exports = module.exports = function (options) {
  exports.config(options);
  return function (req, res, next) {
    req.filterUrl = exports.filter(req.url);
    next();
  };
};

exports.options = config;
exports.config = function (options) {
  exports.options = util.merge(true, exports.options, options);
};
exports.filter = function (url) {
  util.each(exports.options, function (repl, regstr) {
    url = url.replace(new RegExp(regstr, 'gim'), repl);
  });
};