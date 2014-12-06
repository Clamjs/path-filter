var util = require('mace');

function Filter () {}
util.inherits(Filter, {
  options: require('./config.js'),
  config: function () {
    this.options = util.merge(true, this.options, options);
    return this
  },
  handle: function (req, res, next) {
    req.filterUrl = this.resolve(req.url);
    next();
  },
  resolve: function (url) {
    util.each(this.options, function (repl, regstr) {
      url = url.replace(new RegExp(regstr, 'gim'), repl);
    });
    return url;  
  }
});

Filter.handle = function (options) {
  var filter = new Filter();
  filter.config(options);
  return filter.handle.bind(filter);
};
module.exports = Filter;