const User = require('../models/User.model');

exports.detail = function(req, res) {
    res.send(new User('Nguyen Van B'));
}

exports.test = function(req, res) {
    res.send(new User('Nguyen Van A 1'));
};