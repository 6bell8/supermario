const MongoClient = require("mongodb").MongoClient;

let db = null;
MongoClient.connect(`mongodb+srv://parkgutime:${process.env.Mongo_URL}@cluster0.jmdlgc1.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log(err);
  }
  db = client.db("crud");
  // console.log("db", db);
});

module.exports = db;
