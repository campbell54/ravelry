const monk = require('monk');
//const connectionString = 'mongodb+srv://caitlin:Felix458@ravelry-cluster-tfojd.mongodb.net/test?retryWrites=true&w=majority';
const connectionString = 'localhost:27017';
const db = monk(connectionString);

 db.then(() => {
   console.log("Connected to database server!!!");
 })

module.exports = db;
