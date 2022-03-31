import React, { Component } from "react";
import { Droplet } from "react-feather";

export default class PricingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: ["Affordable", "Reliable", "Efficient"],
    };
  }
  render() {
    return (
      <div className="laundry--pricingPage">
        <div className="container">
          <header>Pricing</header>
          <div className="body">
            <span className="plan">Standard Plan</span>
            <span className="description">
              We currently offer an affordable flexible standard plan.
            </span>
            <div className="price">
              <span>Ksh.</span>
              <span>70</span>
              <span>per kg</span>
            </div>
          </div>
          <div className="footer">
            {this.state.features.map((feature, index) => {
              return (
                <div className="feature" key={index}>
                  <Droplet />
                  <span>{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
