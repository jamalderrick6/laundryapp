import React, { Component } from "react";

export default class cellDetailsRenderer extends Component {
  render() {
    return (
      <button className="Button__Arrow-Primary">
        View Details
        <span className="Ico right">
          <svg
            className="HoverArrow"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <g fill-rule="evenodd">
              <path
                className="HoverArrow__linePath"
                stroke="currentColor"
                d="M0 5h7"
              ></path>
              <path
                className="HoverArrow__tipPath"
                stroke="currentColor"
                d="M1 1l4 4-4 4"
              ></path>
            </g>
          </svg>
        </span>
      </button>
    );
  }
}
