const config = require('./config.js');
const express = require('express');
const graphqlHTTP = require('express-graphql');



const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`)
});