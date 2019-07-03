let Models = require('../../models/index');

async function AfindById(user_id) {
    const result = await Models.OrdersA.where({ user_id }).orderBy('id', 'DESC').fetch();
    return result;
}

async function BfindById(user_id) {
    const result = await Models.OrdersB.where({ user_id }).orderBy('id', 'DESC').fetch();
    return result;
}

async function CfindById(user_id) {
    const result = await Models.OrdersC.where({ user_id }).orderBy('id', 'DESC').fetch();
    return result;
}

function AaddUp(data) {
    return new Models.OrdersA(data).save(null, {method: 'insert'});
}

function BaddUp(data) {
    return new Models.OrdersB(data).save(null, {method: 'insert'});
}

function CaddUp(data) {
    return new Models.OrdersC(data).save(null, {method: 'insert'});
}


module.exports = {
    AaddUp,
    AfindById,
    BaddUp,
    BfindById,
    CaddUp,
    CfindById
}