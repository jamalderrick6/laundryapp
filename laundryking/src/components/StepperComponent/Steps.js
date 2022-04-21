import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./Step";

class Steps extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeStep: this.props.children[0].props.label,
    };
  }

  onClickStepItem = (step) => {
    this.setState({ activeStep: step });
  };

  render() {
    const {
      onClickStepItem,
      props: { children },
      state: { activeStep },
    } = this;

    return (
      <>
        <div className="Step-Container">
          {children.map((child) => {
            const { label, icon } = child.props;

            return (
              <Step
                identifier={this.props.identifier}
                activeStep={activeStep}
                key={label}
                label={label}
                icon={icon}
                onClick={onClickStepItem}
              />
            );
          })}
        </div>
        <div className="Step-Content">
          {children.map((child) => {
            if (child.props.label !== activeStep) return undefined;
            return child.props.children;
          })}
        </div>
      </>
    );
  }
}

export default Steps;
