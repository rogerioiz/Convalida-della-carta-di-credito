const chai = require('chai');
const expect = chai.expect;
const card = require('../index');



describe('cardValidator', () => {
    it('return true for a valid card number', () => {
        expect(card.cardValidator ('5232841955055344')).to.equal(true);
    });

    it('return false for equal digits', () => {
        expect(card.cardValidator ('4444444444444444')).to.equal(false);
    });

    it('return false for equal digits', () => {
        expect(card.cardValidator ('5555555555555555')).to.equal(false);
    });

    it('return false if the number exceeds 11 digits ', () => {
        expect(card.cardValidator ('523284195505534458')).to.equal(false);
    });

    it('return false for a below 11 digits number', () => {
        expect(card.cardValidator ('523284195505')).to.equal(false);
    });

    it('return false for a string with special characters', () => {
        expect(card.cardValidator ('5232.8419550553-44')).to.equal(false);
    });

    it('return false for a string with letters', () => {
        expect(card.cardValidator ('abcdefghijklmno')).to.equal(false);
    });
});