import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Controller from "./routes/controller";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <div className="content">
            <Controller />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
