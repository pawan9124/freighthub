import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { hot } from "react-hot-loader";
import Home from "./components/Home/Home";
import Landing from "./components/Layout/Landing";
import ShipmentContainer from "./components/ShipmentDetails/ShipmentContainer";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Navigation from "./components/Common/Navigation";
//Library load
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./css/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>

          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/shipment/:id" component={ShipmentContainer} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}
export default hot(module)(App);
