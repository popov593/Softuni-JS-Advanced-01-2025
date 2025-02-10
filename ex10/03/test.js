import { expect } from 'chai';
import { planYourTrip } from './planYourTrip.js'; 

describe('Trip tests', () => {

    it('choosingDestination', () => {

        //check year
        expect(() => {
            planYourTrip.choosingDestination('Ski Resort', 'Winter', 2004)
        }).to.throw('Invalid Year!');

        expect(() => {
            planYourTrip.choosingDestination('Ski Resort', 'Winter', null)
        }).to.throw('Invalid Year!');

        expect(() => {
            planYourTrip.choosingDestination('Ski Resort', 'Winter', undefined)
        }).to.throw('Invalid Year!');

        //check destination
        expect(() => {
            planYourTrip.choosingDestination('Island', 'Winter', 2024)
        }).to.throw('This destination is not what you are looking for.');

        expect(() => {
            planYourTrip.choosingDestination(0, 'Winter', 2024)
        }).to.throw('This destination is not what you are looking for.');

        //check season
        expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');

        //valid season and destination
        expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');

    });

    it('exploreOptions', () => {

        expect(() => {
            planYourTrip.exploreOptions('Swim', 1)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.exploreOptions(['Swim'], 'a')
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.exploreOptions(['Swim'], 3.1)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.exploreOptions(['Swim'], 1)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.exploreOptions(['Swim'], -1)
        }).to.throw('Invalid Information!');

        expect(planYourTrip.exploreOptions(['Swim', 'Ride', 'Slide'], 1)).to.equal('Swim, Slide');

    });

    it('estimateExpenses', () => {

        expect(() => {
            planYourTrip.estimateExpenses('5', '5')
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(5, '5')
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses('5', 5)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(0, 5)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(2, -5)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(-5, 1)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(2, 0)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(0, 1)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses(1, true)
        }).to.throw('Invalid Information!');

        expect(() => {
            planYourTrip.estimateExpenses({}, 10)
        }).to.throw('Invalid Information!');

        expect(planYourTrip.estimateExpenses(50, 5)).to.equal('The trip is budget-friendly, estimated cost is $250.00.');

        expect(planYourTrip.estimateExpenses(50, 10)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');

        expect(planYourTrip.estimateExpenses(500, 5)).to.equal('The estimated cost for the trip is $2500.00, plan accordingly.');

    });

})