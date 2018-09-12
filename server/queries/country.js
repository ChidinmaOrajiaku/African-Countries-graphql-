import { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLList,
} from 'graphql';
import db from '../models'
import Country from '../types/country'

const Query = new GraphQLObjectType({
  name:"Query",
  description: "Root Query",
  fields: () => {
    return {
      countries: {
        type: GraphQLList(Country),
        args: {
          id: {
            type: GraphQLInt
          },
          region: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return db.Country.findAll({where: args})
        }
      }
    }
  }
});

export default Query;
