import user_resolvers from "./user/user_resolvers";

export default {
  Query: {
    hello: () => "world",
    ...user_resolvers.Query
  },
  Mutation: {
    ...user_resolvers.Mutation
  }
};
