import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.jsx";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_NODE_ENV === "development" ? "http://localhost:4000/graphql" : "/graphql", // The URL of our GraphQL server
  credentials: "include",
});

const client = new ApolloClient({
  // TODO => Update the uri on production
  link: httpLink,
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them
  credentials: "include", // This tells Apollo Client to send cookies along with every request to the server
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />    
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>,
)
