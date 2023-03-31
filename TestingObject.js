const order = {
    pizzas: 4,
    extraCheese: true,
    deliveryInstructions: 'At Home'
};

module.exports = order;


//------------------------------//
const order = require('../order');
const { assert } = require('chai');

describe('order', () => {
    it('should have a number of pizzas', () => {
        assert(order.hasOwnProperty('pizzas'), "make sure to add pizzas to the order object!");
        assert.equal(typeof order.pizzas, "number");
        assert.isAbove(order.pizzas, 0);
    });

    it('should have an extraCheese boolean', () => {
        assert(order.hasOwnProperty('extraCheese'), "make sure to add extraCheese to the order object!");
        assert.equal(typeof order.extraCheese, "boolean");
    });

    it('should have a deliveryInstructions string', () => {
        assert(order.hasOwnProperty('deliveryInstructions'), "make sure to add deliveryInstructions to the order object!");
        assert.equal(typeof order.deliveryInstructions, "string");
    });
});
