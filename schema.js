const { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLList, 
    GraphQLBoolean,
    GraphQLSchema
} = require('graphql');

const axios = require('axios');



//Launch Schema
const LaunchSchema = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketSchema },
    })
});

//Rocket Schema
const RocketSchema = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
});

//Root Query
//Root queries create endpoints that resolve data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchSchema),
            async reslove(parent, args){
                const launches = await axios.get('https://api.spacexdata.com/v3/launches');
                return launches.data
            }
        },
        launch: {
            type: LaunchSchema,
            args: {
                flight_number: { type: GraphQLInt }
            },
            async resolve(parent, args){
                const launch = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                return launch.data
            }
        }
    }
    
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
