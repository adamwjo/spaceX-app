import React from 'react';
import './App.css';
import logo from './logo.png';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Launches from './components/launches.js';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
 
  return (
    <ApolloProvider client={client}>
      <div className="container">
        < img src={logo} alt="logo" style={{ width: 500, display: 'block', margin: 'auto'}}></img>
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
