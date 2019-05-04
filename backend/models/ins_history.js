const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'User can\'t be empty',
    },
    date: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    time: {
        type: String,
        required: 'Password can\'t be empty'
    }
    
});
mongoose.model('History', userSchema);