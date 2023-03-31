const ORDER_TYPES = {
    PIZZA: 0,
    WINGS: 1,
    SALAD: 2,
}

function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}
//------------------------------------------------------------------------------------------------------------------//

const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');
const ORDER_TYPES = require('../orderTypes');

describe('numberOfPizzas', () => {
    describe('just pizza', () => {
        const orders = [
            { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
            { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
            { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });

    const keys = Object.keys(ORDER_TYPES);
    describe(keys.join(', '), () => {
        const orders = keys.reduce((arr, key) => {
            return arr.concat({
                type: key,
            });
        }, [{ pizzas: 3, type: ORDER_TYPES.PIZZA }]);

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });
});
