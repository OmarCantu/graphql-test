import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import './styles/index.css'
import * as serviceWorker from './serviceWorker';
import App from './components/App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
serviceWorker.unregister();