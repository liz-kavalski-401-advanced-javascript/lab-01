'use strict';

let arithmetic = module.exports = {};

function validArg(){
  return true;
}

arithmetic.add = function(...numbers) {
 // if( typeof acc !== 'number' || typeof val !== 'number' ) { return null; }
  return validArg(numbers) ? numbers.reduce( (sum,val) => sum + val,0) : null;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a-b;
};

arithmetic.mulitbly = function(a,b) {
  if ( typeof a !== 'number' || typeof b !== 'number'){return null;}
  return a*b;
};

arithmetic.divide = function(a,b) {
  if (typeof a !== 'number' || typeof b !== 'number'){return null;}
  if ( b === 0){return 'Please pick a number other then zero';}
  return a/b
};

