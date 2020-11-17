const graphql = require('graphql')
const UserType = require('./user_type')
const { GraphQLObjectType, GraphQLID } = graphql

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(_parent, _arrs, req, _info) {
        return req.user
      },
    },
  },
})

module.exports = RootQueryType
