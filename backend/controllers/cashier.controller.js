const mongoose = require('mongoose');
const User = mongoose.model('Cashier');
//const Instructor = mongoose.model('Instructor');
const passport = require('passport');
const _ = require('lodash');
const pass="123456"

module.exports.register_cashier = (req, res, next) => {
    var user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.address = req.body.address;
    user.email = req.body.email;
    user.password = pass;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate Email Adress found.']);
            else
                return next(err);
                
        }
    });
}