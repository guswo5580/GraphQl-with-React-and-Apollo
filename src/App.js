import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
///////////////////////React Router with Apollo///////////////////////////
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
///////////////////////Server Client//////////////////////////////////////
import client from "./apolloClient";
///////////////////////Component//////////////////////////////////////////
import Home from "./Home";
import Detail from "./Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <main>
              {/* Router 분기 */}
              {/* exact = # 추가여부 */}
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:movieId"} component={Detail} />
            </main>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
