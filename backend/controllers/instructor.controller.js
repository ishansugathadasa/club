const mongoose = require('mongoose');
const User = mongoose.model('History');
const passport = require('passport');
const _ = require('lodash');

module.exports.enter_history = (req, res, next) => {
    var user = new User();
    user.customer_name = req.body.customer_name;
    user.tel = req.body.tel;
    user.instructor = req.body.instructor;
    user.date = req.body.date;
    user.time = req.body.time;
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

module.exports.view_history = (req, res, next) => {
    User.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });



}
module.exports.view_person_history = (req, res, next) => {
    User.find({instructor:req.params.instructor},(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });



}