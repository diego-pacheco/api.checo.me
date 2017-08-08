const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

// Define your types here.
const typeDefs = `
  type Chip {
    id: ID!
    tech: String!,
    idJob: ID!
  }

  type Job {
    id: ID!
    company: String!,
    from: String!,
    job: String!,
    description: String!,
    avatar: String!,
    index: Int,
    chips: [Chip]
  }

  type Query {
    allJobs: [Job!]!,
    allChips: [Chip!]
  }

  type Mutation {
    createJob(
      company: String!,
      from: String!,
      job: String!,
      description: String!,
      avatar: String!,
      index: Int
    ): Job

    createChip(
      tech: String!,
      idJob: ID!
    ): Chip
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});