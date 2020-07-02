import React from "react";
import "./App.css";
import Launch from "./components/Launch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> SpaceX</h1>
        <Launch />
      </div>
    </ApolloProvider>
  );
}

export default App;
