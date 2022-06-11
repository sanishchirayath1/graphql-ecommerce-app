const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: [String!]!
    products(filter: ProductFilterInput): [Product!]
    product(id: ID!): Product
    categories: [Category!]!
    reviews: [Review!]
    category(id: ID!): Category
  }

  type Product {
    id: ID
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean!
    categoryId: ID
    category: Category
    reviews: [Review!]
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductFilterInput): [Product!]
  }

  type Review {
    id: ID
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID
  }
  input ProductFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;
