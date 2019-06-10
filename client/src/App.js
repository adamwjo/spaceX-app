import React from 'react';
import './App.css';
import logo from './logo.png';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Launches from './components/launches.js';
import LaunchDetails from './components/launchDetails.js'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

//some shit

function App() {
 
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          < img src={logo} alt="logo" style={{ width: 500, display: 'block', margin: 'auto'}}></img>
          <Route exact path="/" component={Launches}/>
          <Route exact path="/launch/:flight_number" component={LaunchDetails}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
