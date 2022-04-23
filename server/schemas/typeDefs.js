// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }
type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
type Auth {
    token: ID!
    user: User
}

input BookInput {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): Book
    removeBook(id: ID!,input: BookInput): User
  }
`;

// export the typeDefs
module.exports = typeDefs;