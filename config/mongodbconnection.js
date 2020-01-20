const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 var db;
// Use connect method to connect to the server
var getMongodbConnection= function conn(){MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
return db;
}
);
}
module.exprts={
	getMongodbConnection
}

