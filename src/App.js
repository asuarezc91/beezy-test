import React from "react";
import { Content } from "./components/Content";
import { Detail } from "./components/Detail";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export const App = () => (
  <div>
  <Router>
  <Switch>
    <Route path="/" exact component={Content} />
    <Route path="/detail" component={Detail} />
    </Switch>
    </Router>
  </div>
);

// <Router>
// <Content path="/" />
// <Detail path="/detail" />
// </Router>


 