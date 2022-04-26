const express = require('express'); 
const router = express.Router(); 
const employees = require('../controllers/employees.controller');

router.get("/api/employees", employees.list); 
router.get("/api/employees/oldest", employees.listOldest); 
router.get("/api/employees/:name", employees.listByName); 
router.post("/api/employees", employees.create); 

module.exports = router; 

