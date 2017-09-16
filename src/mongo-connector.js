const {MongoClient} = require('mongodb');

// TODO do not commit this
const MONGO_URL = '';

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
    Jobs: db.collection('jobs'),
    Chips: db.collection('chips'),
    Projects: db.collection('projects')
  };
}