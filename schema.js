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

  type Mutation {
    addCategory(input: addCategoryInput): Category!
    addProduct(input: addProductInput): Product!
    addReview(input: addReviewInput): Review!
  }

  type Product {
    id: ID
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean
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
    productId: ID!
  }
  input ProductFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  input addCategoryInput {
    name: String
  }
  input addProductInput {
    name: String!
    price: Int!
    quantity: Int!
    description: String!
    categoryId: ID!
  }
  input addReviewInput {
    title: String
    comment: String
    rating: Int
    productId: ID
  }
`;
