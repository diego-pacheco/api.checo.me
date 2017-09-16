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

  type Project {
    id: ID!
    title: String!,
    url: String!,
    description: String!,
    image: String!
  }

  type Query {
    allJobs: [Job!]!,
    allChips: [Chip!],
    allProjects: [Project!]
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

    createProject(
      title: String!,
      url: String!,
      description: String!,
      image: String!
    ): Project

    createChip(
      tech: String!,
      idJob: ID!
    ): Chip
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});