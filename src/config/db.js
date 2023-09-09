const knex = require('knex');
const knexfile = require('./knexfile.js');

const db = knex(knexfile.development);

// // Create a table in the SQLite database
async function create_employees_table() {
const tableExists = await db.schema.hasTable('employees');

    if(!tableExists) {

       return db.schema.createTable('employees', (table) => {
            table.increments('id').primary();
            table.string('name');
            table.string('email');
            table.string('job_title');
            }).then(() => {
            console.log('Table "employees" created');
            });
            }
}

create_employees_table();

module.exports = db;

