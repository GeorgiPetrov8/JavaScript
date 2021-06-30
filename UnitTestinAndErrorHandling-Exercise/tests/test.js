let assert = require('chai').assert;
let oddOrEven = require('../02.IsOddOrEven.js');
let loockUpChar = require('../03.LookupChar.js');
let mathEnforcer = require('../04.MathEnforcer.js');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undifiend if param is not a number', () => {
            let input = '12';
            let expected = undefined;

            let actual = mathEnforcer.addFive(input);

            assert.equal(expected, actual);
        });
        it('Should return 15 if param is number', () => {
            let input = 10;
            let expected = 15;

            let actual = mathEnforcer.addFive(input);

            assert.equal(expected, actual);
        });
        it('Should return 0 if param is negative number', () => {
            let input = -5;
            let expected = 0;

            let actual = mathEnforcer.addFive(input);

            assert.equal(expected, actual);
        });
    });
    describe('subtractTen', () => {
        it('Should return undifined if param is not a number', () => {
            let input = '1234';
            let expected = undefined;

            let actual = mathEnforcer.subtractTen(input);

            assert.equal(expected, actual);
        });
        it('Should return undifined if param is not a number', () => {
            let input = [123];
            let expected = undefined;

            let actual = mathEnforcer.subtractTen(input);

            assert.equal(expected, actual);
        });
        it('Should return input number -10 if param is number', () => {
            let input = 15;
            let expected = 5;

            let actual = mathEnforcer.subtractTen(input);

            assert.equal(expected, actual);
        });
        it('Should return input number -10 if param is number', () => {
            let input = 5;
            let expected = -5;

            let actual = mathEnforcer.subtractTen(input);

            assert.equal(expected, actual);
        });
    });
    describe('sum', () => {
        it('Should return undifiend if first param is not a number', () => {
            let x = '123';
            let y = 12;
            let expected = undefined;

            let actual = mathEnforcer.sum(x, y);

            assert.equal(expected, actual);
        });
        it('Should return undifiend if second param is not a number', () => {
            let x = 123;
            let y = [12];
            let expected = undefined;

            let actual = mathEnforcer.sum(x, y);

            assert.equal(expected, actual);
        });
        it('Should return sum of two positive params', () => {
            let x = 20;
            let y = 30;
            let expected = 50;

            let actual = mathEnforcer.sum(x, y);

            assert.equal(expected, actual);
        });
        it('Should return sum of two negative params', () => {
            let x = -20;
            let y = -30;
            let expected = -50;

            let actual = mathEnforcer.sum(x, y);

            assert.equal(expected, actual);
        });
        it('Should return sum of two floating-point numbers', () => {
            let x = 0.01;
            let y = 1.02;
            let expected = 1.03;

            let actual = mathEnforcer.sum(x, y);

            assert.equal(expected, actual);
        });
    })
});



// describe('Test for lookUpChar functionality', () => {
//     it('Should retrun undifiend for different first param', () => {
//         let firstInput = 1234;
//         let secondInput = 1;
//         let expected = undefined;

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
//     it('Should retrun undifiend for different second param', () => {
//         let firstInput = 'Georgi';
//         let secondInput = '1';
//         let expected = undefined;

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
//     it('Should return message if index is negative', () => {
//         let firstInput = 'Georgi';
//         let secondInput = -1;
//         let expected = 'Incorrect index';

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
//     it('Should return message if index is more than length of string', () => {
//         let firstInput = 'Georgi';
//         let secondInput = 6;
//         let expected = 'Incorrect index';

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
//     it('Should work properly', () => {
//         let firstInput = 'Georgi';
//         let secondInput = 2;
//         let expected = 'o';

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
//     it('Should work properly', () => {
//         let firstInput = 'Georgi';
//         let secondInput = 5;
//         let expected = 'i';

//         let actual = loockUpChar(firstInput, secondInput);

//         assert.equal(expected, actual);
//     });
// })

// describe('Test for oddOrEven functionality', () => {
//     it('Should return undifined for different input', () => {
//         let input = 123;

//         let actual = oddOrEven(input);

//         assert.isUndefined(actual);
//     });
//     it('Should return undifined for different input', () => {
//         let input = ['string'];

//         let actual = oddOrEven(input);

//         assert.isUndefined(actual);
//     });
//     it('Should return even', () => {
//         let input = 'name'
//         let expected = 'even';

//         let actual = oddOrEven(input);

//         assert.equal(expected, actual);
//     });
//     it('Should return odd', () => {
//         let input = 'car'
//         let expected = 'odd';

//         let actual = oddOrEven(input);

//         assert.equal(expected, actual);
//     });
//     it('Should work properly', () => {
//         let inputEven = '12345678'
//         let inputOdd = '12345';

//         let actualEven = oddOrEven(inputEven);
//         let actualOdd = oddOrEven(inputOdd);

//         assert.equal(actualEven, 'even');
//         assert.equal(actualOdd, 'odd');
//     });
// });