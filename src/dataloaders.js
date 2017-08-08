const DataLoader = require('dataloader');

async function batchJobs (Jobs, keys) {
  return await Jobs.find({_id: {$in: keys}}).toArray();
}

module.exports = ({Jobs}) =>({
  jobLoader: new DataLoader(
    keys => batchJobs(Jobs, keys),
    {cacheKeyFn: key => key.toString()},
  ),
});