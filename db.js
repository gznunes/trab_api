const Pool = require("pg").Pool;

const pool = new Pool({
    host: 'dpg-cefs7kta499e21r5i6f0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'livros_k06r_user',
    password: 'uhhtkljEHkKwityaDJS6Hy51IF6TXCUI',
    database: 'livros_k06r',
    ssl: true
});

// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'admin',
//     database: 'crud_produtos'
// });

module.exports = pool;