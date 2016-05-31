var vendormodule = require('./vendormodule');
var extraInjectorsState1 = global['extraInjectors'][0];

var mymodule = require('./mymodule');
var extraInjectorsState2 = global['extraInjectors'][0];

console.log('Are we ok?', extraInjectorsState1 === extraInjectorsState2);
