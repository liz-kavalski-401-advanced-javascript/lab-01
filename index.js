'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.add('fish',3)); //null
console.log(math.add(1,'fish')); //null
console.log(math.subtract(1,3)); // -2
console.log(math.subtract('fish',3)); // null
console.log(math.subtract(1,'fish')); // null
