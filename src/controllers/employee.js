const knex = require('../config/db')


exports.getEmployees =  async (res, req) => {
    try {
        const employees = await knex('employees').select('*');
         res.status(200).json(employees);
      } catch (error) {
        console.error(error);
         res.status(500).json({ error: 'Internal Server Error' });
      }

}

//assignment
exports.updateEmployee = async (req, res) => {

}

exports.deleteEmployee = async (req, res) => {

}