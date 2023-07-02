const Pool = require("pg").Pool;

// const pool = new Pool({
//     host: 'dpg-cefs7kta499e21r5i6f0-a.oregon-postgres.render.com',
//     port: 5432,
//     user: 'livros_k06r_user',
//     password: 'uhhtkljEHkKwityaDJS6Hy51IF6TXCUI',
//     database: 'livros_k06r',
//     ssl: true
// });

// const pool = new Pool({
//     host: 'dpg-cgk6304eoogkndhanapg-a.oregon-postgres.render.com',
//     port: 5432,
//     user: 'chamada_user',
//     password: 'c4iuA4u6HRFWyNz8GynJtb2dkARfJqhD',
//     database: 'chamada',
//     ssl: true
// });

const pool = new Pool({
    host: 'dpg-cigfuitgkuvojj90m7eg-a.oregon-postgres.render.com',
    port: 5432,
    user: 'webchamada_user',
    password: 'vjGoHcz6H1fVkNftqfrPBcW3cu5EafH7',
    database: 'webchamada',
    ssl: true
});

// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'admin',
//     database: 'crud_produtos'
// }); postgres://webchamada_user:vjGoHcz6H1fVkNftqfrPBcW3cu5EafH7@dpg-cigfuitgkuvojj90m7eg-a.oregon-postgres.render.com/webchamada

module.exports = pool;