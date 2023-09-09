const express = require('express');
const router = express.Router();
const admin = require('../controllers/employee');

router.post('/employees', async (req, res) => {

  await  admin.getEmployees(req, res)
  
  })

router.post('/create-employee', async (req, res) => {
    console.log('2. inside create employee route')
    await res.status(200).json({message :  "employee created successfully"})

})


module.exports =router;