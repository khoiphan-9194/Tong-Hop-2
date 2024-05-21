const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },

    studentsHeo: () =>
    {
     return [
        {name:'heo map', age: 23},
        {name:'cho con', age: 20},
        {name:'tho gia', age: 35}
      ]

      
    }
  }
};

module.exports = resolvers;
