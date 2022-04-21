import React, { Component } from "react";
import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";

class Step extends Component {
  static propTypes = {
    activeStep: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeStep, label, icon },
    } = this;

    let className = "step ";

    if (activeStep === label) {
      className += " --active";
    }

    return (
      <Tooltip title={label} placement="top">
        <button className={className} onClick={onClick}>
          {icon}
        </button>
      </Tooltip>
    );
  }
}

export default Step;
