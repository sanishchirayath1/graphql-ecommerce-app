const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");

const { products, categories, reviews } = require("./db");

const resolvers = {
  Query,
  Product,
  Category,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
