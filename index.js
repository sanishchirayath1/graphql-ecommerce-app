const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");

const { db } = require("./db");

const resolvers = {
  Query,
  Product,
  Category,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
