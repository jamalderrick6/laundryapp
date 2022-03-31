import { Avatar } from "@mui/material";
import React, { Component } from "react";

export default class AvatarComponent extends Component {
  render() {
    return <Avatar src={this.props.src} />;
  }
}
