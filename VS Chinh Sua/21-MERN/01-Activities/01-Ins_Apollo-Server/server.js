const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('@apollo/apoloServer');
const { expressMiddleware } = require('@apollo/apoloServer/express4');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const apoloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const expressApp = express();

// Create a new instance of an Apollo apoloServer with the GraphQL schema
const startApolloServer = async () => {
  await apoloServer.start();
  
  expressApp.use(express.urlencoded({ extended: false }));
  expressApp.use(express.json());
  
  expressApp.use('/graphql', expressMiddleware(apoloServer));

  db.once('open', () => {
    expressApp.listen(PORT, () => {
      console.log(`API apoloServer running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the apoloServer
startApolloServer();
