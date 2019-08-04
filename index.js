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
console.log(math.mulitbly(1,3)); // 3
console.log(math.mulitbly('fish',3)); // null
console.log(math.mulitbly(1,'fish'));//null
console.log(math.divide(3,6));//.5
console.log(math.divide('fish',6));//null
console.log(math.divide(3,'fish'));//null
console.log(math.divide(3,0));//Please pick a number other than zero
