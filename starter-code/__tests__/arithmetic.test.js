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
        let results = arithmetic.add(notnum1,'b');
    expect(results).toEqual(notnum1);
    });
    it('if "b" is not a number',() =>{
        let notnum2 =null;
        let results= arithmetic.add('a',notnum2);
    expect(results).toEqual(notnum2);
    })

describe('subtract module', () =>{
    it ('subtract a and b', () =>{
        let num1 = faker.random.number();
        let num2 = faker.random.number();
        let results = arithmetic.subtract(num1,num2);
        let answer= num1-num2;
    expect(results).toEqual(answer);
    })
})



});
