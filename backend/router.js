const express = require('express'); 
const router = express.Router(); // use router function in express
const controller = require('./controller'); 

/* Need to define 4 routers for 4 methods */
router.get('/users', controller.getUsers); 
router.post('/createuser', controller.createUser);
router.post('/updateuser', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

module.exports = router; //export router to server.js