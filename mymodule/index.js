var cool = false;

process.argv.forEach(function (val, index, array) {
  if (val.indexOf('cool') === 0) cool = true;
});

console.log('Are we cool?', cool);

var parser;

if (cool) {
    for(var module in require.cache) {
        if (require.cache.hasOwnProperty(module) && module.indexOf('raml-1-parser')) {
            parser = require(module);
        }
    }
}

parser = parser || require('raml-1-parser');

module.exports = { name: 'mymodule' };
