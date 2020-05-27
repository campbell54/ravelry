const monk = require('monk');
const connectionString = 'localhost:27017';
const db = monk(connectionString);

 db.then(() => {
   console.log("Connected to database server!!!");
 })

module.exports = db;
