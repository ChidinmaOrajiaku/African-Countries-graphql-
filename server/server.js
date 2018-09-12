import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema'

const app = express()
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Listening")
})