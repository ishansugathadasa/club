const express = require('express');
const router = express.Router();
 
const ctrlUser =require('../controllers/user.controller');
const ctrlInstructor=require('../controllers/instructor.controller');
const ctrlCheff=require('../controllers/cheff.controller');
const ctrlCashier=require('../controllers/cashier.controller');

const jwtHelper = require('../config/jwtHelper');
 
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/enter_history',ctrlInstructor.enter_history);
router.get('/view_history',ctrlInstructor.view_history);
router.get('/view_person_history/:instructor',ctrlInstructor.view_person_history);
router.post('/register_instructor',ctrlInstructor.register_instructor);
router.post('/register_cheff',ctrlCheff.register_cheff);
router.post('/register_cashier',ctrlCashier.register_cashier);

module.exports = router;