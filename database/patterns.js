const Joi = require('joi');
const db = require('./connection');

// const schema = Joi.object().keys({
//     name: Joi.string().alphanum().required(),
//     description: Joi.string().required(),
//     message: Joi.string().max(500).required(),
//     imageURL: Joi.string().uri({
//         scheme: [
//             /https?/
//         ]
//     })
// });

//const patterns = db.get('ravelry_db');//db.db('ravelry_db').get('patterns');
const patterns = db.get('patterns');

function getAll() {
    return patterns.find();
}

function getOne(id) {
    return patterns.find({_id: id});
}

function create(pattern) {
  return patterns.insert(pattern);
    // if (!pattern.username) pattern.username = 'Anonymous';
    //
    // // const result = Joi.validate(message, schema);
    // if (result.error == null) {
    //     message.created = new Date();
    //     return messages.insert(message);
    // } else {
    //     return Promise.reject(result.error);
    // }
}

module.exports = {
    // create,
    getAll,
    getOne
};
