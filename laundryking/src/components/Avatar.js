import { Avatar } from "@mui/material";
import React, { Component } from "react";

export default class AvatarComponent extends Component {
  render() {
    return (
      <Avatar
        className="avatar"
        style={this.props.style}
        src={this.props.src}
      />
    );
  }
}
