let knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'example',
      database : 'demo_db'
    }
});
let bookshelf = require('bookshelf')(knex);

module.exports = {
    bookshelf
}