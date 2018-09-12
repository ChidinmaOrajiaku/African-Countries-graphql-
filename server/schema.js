import { 
  GraphQLSchema,
} from 'graphql';
import Query from './queries/country'
import Mutation from './mutations/country'

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema