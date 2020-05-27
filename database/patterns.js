const Joi = require('joi');
const db = require('./connection');
const patterns = db.get('patterns');

function getAll() {
    return patterns.find();
}

function getOne(id) {
    return patterns.find({_id: id});
}

function create(pattern) {
  return patterns.insert(pattern);
}

module.exports = {
    create,
    getAll,
    getOne
};
