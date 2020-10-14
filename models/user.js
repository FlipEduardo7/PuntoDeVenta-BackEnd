'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name : String,
	nick : String,
	email : String,
	password : String,
	image : String,
	created_at : String
});

module.exports = mongoose.model('User', UserSchema);