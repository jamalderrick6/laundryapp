import React, { Component } from "react";
import { MapPin, Settings, User } from "react-feather";
import Steps from "../../components/StepperComponent/Steps";
import LocationContent from "./steps/location";
import ProfileContent from "./steps/profile";
import SettingsContent from "./steps/settings";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          name: "Profile",
          icon: <User />,
          component: <ProfileContent />,
        },
        {
          name: "Location",
          icon: <MapPin />,
          component: <LocationContent />,
        },
        {
          name: "Settings",
          icon: <Settings />,
          component: <SettingsContent />,
        },
      ],
    };
  }
  render() {
    return (
      <div className="laundry--profilePage">
        <Steps>
          {this.state.steps.map((step, index) => {
            return (
              <div key={index} label={step.name} icon={step.icon}>
                {step.component}
              </div>
            );
          })}
        </Steps>
      </div>
    );
  }
}
