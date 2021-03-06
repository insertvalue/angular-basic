/**
 * Created by hongdian on 2014/12/23.
 */
var mongoose = require('mongoose');
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// models
require('./user');

exports.User = mongoose.model('User');