import graphql from "graphql";
import _ from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const userData = [
  {
    id: "23",
    firstName: "Alex",
    age: 18,
  },
  {
    id: "43",
    firstName: "Bob",
    age: 24,
  },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return _.find(userData, { id: args.id });
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });
export default schema;
