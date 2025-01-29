import { expect } from 'chai';
import { mathEnforcer } from './func.js';

describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('If the parameter is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive('num')).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });

        it('If the parameter is a number, add 5 to it, and return the result.', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6); 
            expect(mathEnforcer.addFive(-4)).to.equal(1); 
            expect(mathEnforcer.addFive(0)).to.equal(5); 
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01); 
            expect(mathEnforcer.addFive(-1.5)).to.be.closeTo(3.5, 0.01); 
        });
    });

    describe('subtractTen', () => {
        it('If the parameter is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('num')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });

        it('If the parameter is a number, subtract 10 from it, and return the result.', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9); 
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14); 
            expect(mathEnforcer.subtractTen(10)).to.equal(0); 
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01); 
            expect(mathEnforcer.subtractTen(-1.5)).to.be.closeTo(-11.5, 0.01); 
        });

    });

    describe('sum', () => {

        it('If any of the 2 parameters is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
            expect(mathEnforcer.sum('1', '2')).to.equal(undefined);
            expect(mathEnforcer.sum('2', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, [])).to.equal(undefined);
            expect(mathEnforcer.sum('2', {})).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
        });

        it('If both parameters are numbers, the function should return their sum.', () => {
            expect(mathEnforcer.sum(5, 6)).to.equal(11); 
            expect(mathEnforcer.sum(-5, -6)).to.equal(-11); 
            expect(mathEnforcer.sum(0, 0)).to.equal(0); 
            expect(mathEnforcer.sum(5.5, 6)).to.be.closeTo(11.5, 0.01); 
            expect(mathEnforcer.sum(6, 5.5)).to.be.closeTo(11.5, 0.01); 
            expect(mathEnforcer.sum(-1.5, 5)).to.be.closeTo(3.5, 0.01); 
            expect(mathEnforcer.sum(5, -1.5)).to.be.closeTo(3.5, 0.01); 
        });

    });

});