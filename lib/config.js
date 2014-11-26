// var util = require('mace');
// exports = module.exports = require('./_base.js')({
//   // no params
//   '\\?.+': '',
//   // no min
//   '(\\w+)[\\-\\.]min\\.(js|css)$' : '$1.$2',
//   // no version
//   "\\/\\d+\\.\\d+\\.\\d+\\/": "/",
//   // .less.css => .less
//   // .sass.css => .sass
//   "(le|sa)ss\\.css$":"$1ss",
//   // template file
//   // .tpl.js => .tpl;
//   // juicer template file
//   // .jpl.js => .jpl;
//   "(t|j)pl\\.js$": "$1pl"
// }, function (options) {
//   exports.config(options);
//   return function (req, res, next) {
//     var url = req.url;
//     util.each(exports.options, function (repl, regstr) {
//       url = url.replace(new RegExp(regstr, 'gim'), repl);
//     });
//     req.filterUrl = url;
//     next();
//   };
// });

module.exports = {
  // no params
  '\\?.+': '',
  // no min
  '(\\w+)[\\-\\.]min\\.(js|css)$' : '$1.$2',
  // no version
  "\\/\\d+\\.\\d+\\.\\d+\\/": "/",
  // .less.css => .less
  // .sass.css => .sass
  "(le|sa)ss\\.css$":"$1ss",
  // template file
  // .tpl.js => .tpl;
  // juicer template file
  // .jpl.js => .jpl;
  "(t|j)pl\\.js$": "$1pl"
};