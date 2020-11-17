const graphql = require('graphql')
const UserType = require('./types/user_type')
const { GraphQLObjectType, GraphQLString } = graphql
const UserrType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_parent, { email, password }, req, _info) {
        return AuthService.signup({ email, password, req })
      },
    },
    logout: {
      type: UserType,
      resolve(_parent, _args, req, _info) {
        const { user } = req
        req.logout()
        return user
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_parent, { email, password }, req, _info) {
        return AuthService.login({ email, password, req })
      },
    },
  },
})

module.exports = mutation
