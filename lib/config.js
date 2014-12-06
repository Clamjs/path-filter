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