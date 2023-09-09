const knex = require('../config/db')

const registerEmployee = async (req, res) => {
//    const new_employee =   knex('employees')
try {
    const  name  = req.body.name;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const employeeId = await knex('employees').insert({
         name: req.body.name,
         email: req.body.email,
         job_title: req.body.job_title
        
        });
    return res.status(201).json({ id: employeeId[0], name, job_title, email });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

}
module.exports.registerEmployee = registerEmployee; 