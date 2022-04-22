const { User } = require('../models');

const resolvers = {
    Query: {
      user: async (parent, { username }) => {
        const params = username ? { username } : {};
        return User.find(params);
      }
    }
  };
  
  module.exports = resolvers;