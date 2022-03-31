import React, { Component } from "react";
import { Link } from "react-router-dom";

import routes from "../routes/routes";
import AvatarComponent from "./Avatar";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Your Orders", route: routes.orders },
        { name: "Pricing", route: routes.pricing },
      ],
    };
  }

  render() {
    return (
      <nav>
        <header>
          <span>laundryKing</span>
        </header>

        <div className="nav--links">
          {this.state.links.map((link, index) => {
            return (
              <div key={index} className="link">
                <Link to={link.route}>
                  <span>{link.name}</span>
                </Link>
              </div>
            );
          })}
          <div className="user--profile">
            <AvatarComponent />
          </div>
        </div>
      </nav>
    );
  }
}
