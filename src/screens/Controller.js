import React, { Component } from "react";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Controller extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/details/:id" component={Details} />
      </Router>
    );
  }
}
export default Controller;
