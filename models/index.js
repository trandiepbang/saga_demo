let dbAdapter = require('../lib/db');

let OrdersA = dbAdapter.bookshelf.Model.extend({
    tableName: 'orders_a'
});

let OrdersB = dbAdapter.bookshelf.Model.extend({
    tableName: 'orders_b'
});

let OrdersC = dbAdapter.bookshelf.Model.extend({
    tableName: 'orders_c'
});

module.exports = {
    OrdersA,
    OrdersB,
    OrdersC
}