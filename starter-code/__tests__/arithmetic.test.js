'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

describe('add module', () =>{
  it( 'add a and b together', () =>{
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let results = arithmetic.add(num1,num2);
    let answer= num1+num2;
    expect(results).toEqual(answer);
  });
  it('if "a" is not a number',()=>{
    let notnum1 = null;
    let num2 = faker.random.number()
    let results = arithmetic.add(notnum1,num2);
    let answer= notnum1+num2;
    expect(results).toEqual(answer);
  });
  it('if "b" is not a number',() =>{
    let notnum2 =null;
    let num1 = faker.random.number()
    let results= arithmetic.add(num1,notnum2);
    let answer = num1 + notnum2
    expect(results).toEqual(answer);
  });
});

describe('subtract module', () =>{
  it ('subtract a and b', () =>{
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let results = arithmetic.subtract(num1,num2);
    let answer= num1-num2;
    expect(results).toEqual(answer);
  });
  it('if "a" is not a number',()=>{
    let notnum1 = null;
    let results = arithmetic.subtract(notnum1,'b');
    expect(results).toEqual(notnum1);
  });
  it('if "b" is not a number',() =>{
    let notnum2 =null;
    let results= arithmetic.subtract('a',notnum2);
    expect(results).toEqual(notnum2);
  });
});

describe('mulitbly module', () =>{
  it ('mulitbly a and b', () =>{
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let results = arithmetic.mulitbly(num1,num2);
    let answer= num1*num2;
    expect(results).toEqual(answer);
  });
  it('if "a" is not a number',()=>{
    let notnum1 = null;
    let results = arithmetic.mulitbly(notnum1,'b');
    expect(results).toEqual(notnum1);
  });
  it('if "b" is not a number',() =>{
    let notnum2 =null;
    let results= arithmetic.mulitbly('a',notnum2);
    expect(results).toEqual(notnum2);
  });
});
describe('divide module', () =>{
  it ('divide a and b', () =>{
    let num1 = faker.random.number();
    let num2 = faker.random.number();
    let results = arithmetic.divide(num1,num2);
    let answer= num1/num2;
    expect(results).toEqual(answer);
  });
  it('if "a" is not a number',()=>{
    let notnum1 = null;
    let num2 = faker.random.number()
    let results = arithmetic.divide(notnum1,num2);
    expect(results).toEqual(notnum1);
  });
  it('if "b" is not a number',() =>{
    let num1 =faker.random.number();
    let notnum2 =null;
    let results= arithmetic.divide(num1,notnum2);
    expect(results).toEqual(notnum2);
  });
  it('if "b" is equal to zero',()=>{
    let num1 =faker.random.number()
    let bIsZero = 0;
    let results= arithmetic.divide(num1,bIsZero);
    expect(results).toEqual('Please pick a number other then zero');
  })

});

  






