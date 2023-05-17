import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});



root.render(

  <ApolloProvider client={client}>

    <App />

  </ApolloProvider>,

);
