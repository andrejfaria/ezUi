import { GraphQLID, GraphQLList, GraphQLSchema, GraphQLString } from 'graphql'
import { GraphQLObjectType } from 'graphql';

import { UserModel } from '../repositories/mongoModel/User';



const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })

})



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return UserModel.find();

      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserModel.findById(args.id);
      }
    }
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery
})