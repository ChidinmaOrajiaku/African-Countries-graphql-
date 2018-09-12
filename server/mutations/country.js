import { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';
import db from '../models'
import Country from '../types/country'

const Mutation = new GraphQLObjectType ({
  name: 'Mutation',
  description: 'Create a country',
  fields: () => {
    return {
      addCountry: {
        type: Country,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          },
          region: {
            type: new GraphQLNonNull(GraphQLString)
          },
          description: {
            type: new GraphQLNonNull(GraphQLString)
          },
          pictures: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(_, args) {
          return db.Country.create({
            name: args.name,
            region: args.region,
            description: args.description,
            pictures: args.pictures
          })
        }
      },
      updateCountry: {
        type: Country,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          name: {
            type: GraphQLString
          },
          region: {
            type: GraphQLString
          },
          description: {
            type: GraphQLString
          },
          pictures: {
            type: GraphQLString
          }
        },
        resolve(_, args) {
          return db.Country.findById(args.id)
          .then((country) => {
            if(!country) {
              throw new Error ("Country was not found")
            }
            db.Country.update({
              name: args.name,
            },{ where: { id: args.id }})
           return {
            name: args.name,
            region: args.region,
            description: args.description,
            pictures: args.pictures
           }
          })
          .catch((error) => {
            throw error
          })
        }
      },
      deleteCountry: {
        type: Country,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(_, args) {
          return db.Country.findById(args.id)
          .then((country) => {
            if(!country) {
              throw new Error ("Country was not found")
            }
            db.Country.destroy({ where: { id: args.id }})
            return {
              id: args.id
            }
          })
        }
      }
    }
  }
})

export default Mutation;