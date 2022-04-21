import React, { Component } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default class LocationContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="location--content">
        <div className="grid">
          <div className="wrapper">
            <Wrapper apiKey={"YOUR_API_KEY"}>

            </Wrapper>
          </div>
        </div>
        <div className="grid">

        </div>
      </div>
    );
  }
}
