import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { hot } from "react-hot-loader";
const Home = lazy(() => import("./components/Home/Home"));
const ShipmentContainer = lazy(() =>
  import("./components/ShipmentDetails/ShipmentContainer")
);
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

//Library load
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./css/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<h4>Loading...</h4>}>
            <Header />
            <Route exact path="/" component={Home} />
            <Switch>
              <Route exact path="/shipment/:id" component={ShipmentContainer} />
            </Switch>
            <Footer />
          </Suspense>
        </Router>
      </Provider>
    );
  }
}
export default hot(module)(App);
