import { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
} from 'graphql';

const Country = new GraphQLObjectType ({
  name: "Country",
  description: "Reps a country",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(country) {
          return country.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(country) {
          return country.name
        }
      },
      region: {
        type: GraphQLString,
        resolve(country) {
          return country.region
        }
      },
      description: {
        type: GraphQLString,
        resolve(country) {
          return country.description
        }
      },
      pictures: {
        type: GraphQLString,
        resolve(country) {
          return country.pictures
        }
      },
    }
  }
});

export default Country;