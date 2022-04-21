import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "./routes";
import history from "./history";
import OrdersPage from "../pages/orders";
import PricingPage from "../pages/pricing";
import ProfilePage from "../pages/profile";

const pages = [
  {
    exact: true,
    path: routes.orders,
    component: OrdersPage,
  },
  {
    exact: true,
    path: routes.pricing,
    component: PricingPage,
  },
  {
    exact: true,
    path: routes.profile,
    component: ProfilePage,
  },
];

export default class Controller extends Component {
  render() {
    return (
      <Switch history={history}>
        <Route exact path="/" render={() => <Redirect to={routes.orders} />} />
        {pages.map(({ exact, path, component: Component }, index) => (
          <Route
            key={index}
            exact={exact}
            path={path}
            render={(props) => <Component {...props} />}
          />
        ))}
      </Switch>
    );
  }
}
