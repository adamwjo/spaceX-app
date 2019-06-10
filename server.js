const config = require('./config.js');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');


//initialize app
const app = express();

// Allow cross-origin
app.use(cors());




app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`)
});