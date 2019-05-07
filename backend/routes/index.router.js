const express = require('express');
const router = express.Router();
 
const ctrlUser =require('../controllers/user.controller');
const ctrlInstructor=require('../controllers/instructor.controller');
const jwtHelper = require('../config/jwtHelper');
 
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/enter_history',ctrlInstructor.enter_history)
router.get('/view_history',ctrlInstructor.view_history)

module.exports = router;