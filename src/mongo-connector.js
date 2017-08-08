const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = 'mongodb://localhost:27017/checome';

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
    Jobs: db.collection('jobs'),
    Chips: db.collection('chips')
  };
}