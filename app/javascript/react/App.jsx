import React from "react"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Products from "./views/products"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" exact render={() => <Redirect to="/products" />} />
      <Route path="/products" exact component={Products} />
    </Switch>
  </Router>
)

export default App
