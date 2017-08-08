module.exports = {
  Query: {
    allJobs: async (root, data, {mongo: {Jobs}}) => { // 1
      return await Jobs.find({}).toArray(); // 2
    },
    allChips: async (root, data, {mongo: {Chips}}) => { // 1
      return await Chips.find({}).toArray(); // 2
    },
  },

  Mutation: {
    createJob: async (root, data, {mongo: {Jobs}}) => {
      const response = await Jobs.insert(data); // 3
      return Object.assign({id: response.insertedIds[0]}, data);
    },
    createChip: async (root, data, {mongo: {Chips}}) => {
      const response = await Chips.insert(data); // 3
      return Object.assign({id: response.insertedIds[0]}, data);
    },
  },

  Chip: {
    id: root => root._id || root.id,
  },
  Job: {
    id: root => root._id || root.id,
    chips: async (root, data, {mongo: {Chips}}) => {
      return await Chips.find({idJob: root._id.toString()}).toArray()
    }
  },
};