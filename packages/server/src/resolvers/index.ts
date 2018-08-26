import user_resolvers from "./user/user_resolvers";

export default {
  Query: {
    ...user_resolvers.Query
  },
  Mutation: {
    ...user_resolvers.Mutation
  }
};
