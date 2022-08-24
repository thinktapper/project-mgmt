const express = require('express')
const cors = require('cors')
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
const port = process.env.PORT || 5000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')))

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true //process.env.NODE_ENV === 'development'
}))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
})

app.listen(port, 'localhost',() => console.log(`Listening on port ${port}`))