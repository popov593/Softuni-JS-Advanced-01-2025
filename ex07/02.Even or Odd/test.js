import { expect } from 'chai';
import { isOddOrEven } from './func.js';

describe('02.Test Even or Odd function', function() {

    //not a string, number
    it('Test for undefined - number input', function() {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it('Test for undefined - array input', function() {
        expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
    });

    it('Test for undefined - object input', function() {
        expect(isOddOrEven({key: 'value'})).to.equal(undefined);
    });

    it('Test for undefined - boolean input', function() {
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('Test for undefined - boolean input', function() {
        expect(isOddOrEven(false)).to.equal(undefined);
    });

    it('Test for even string', function() {
        expect(isOddOrEven('abcd')).to.equal('even');
    });

    it('Test for even string', function() {
        expect(isOddOrEven('ab cd')).to.equal('odd');
    });

    it('Test for odd string', function() {
        expect(isOddOrEven('abc')).to.equal('odd');
    });

    it('Test for odd string', function() {
        expect(isOddOrEven('he l')).to.equal('even');
    });


    it('Test multiple values', function() {

        expect(isOddOrEven('test')).to.equal('even');
        expect(isOddOrEven('testing')).to.equal('odd');
        expect(isOddOrEven('unit')).to.equal('even');
        expect(isOddOrEven('mocha')).to.equal('odd');
        expect(isOddOrEven('chai')).to.equal('even');

    });

});