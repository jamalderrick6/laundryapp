import { Tooltip } from "@mui/material";
import React, { Component } from "react";
import { HelpCircle } from 'react-feather';
import Radio from '@mui/material/Radio';

export default class SettingsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        { day: "Monday", abbr: "Mon", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 6 p.m.'] },
        { day: "Tuesday", abbr: "Tue", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 6 p.m.'] },
        { day: "Wednesday", abbr: "Wed", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 6 p.m.'] },
        { day: "Thursday", abbr: "Thur", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 6 p.m.'] },
        { day: "Friday", abbr: "Fri", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 6 p.m.'] },
        { day: "Saturday", abbr: "Sat", time_slots: ['9 a.m. to 1 p.m.', '2 p.m. to 4 p.m.'] },
      ],
      selectedDay: "",
      selectedTimeSlot: ""
    }
  }

  selectDay = (d) => {
    if (this.state.selectedDay === d.day) {
      this.setState({
        selectedDay: ""
      })
    } else {
      this.setState({
        selectedDay: d.day
      })
    }
  }

  handleChangeSlot = (slot) => {
    if (this.state.selectedTimeSlot === slot) {
      this.setState({
        selectedTimeSlot: ""
      })
    } else {
      this.setState({
        selectedTimeSlot: slot
      })
    }
  }

  render() {
    return (
      <div className="settings--content">
        <div className="grid">
          <div className="wrapper">
            <div className="header">
              <span className="title">Repeat Pickup</span>
              <Tooltip placement="top" title="pick date and a time slot to repeat your pickup">
                <HelpCircle />
              </Tooltip>
            </div>

            <div className="schedule">
              <div className="days">
                {
                  this.state.days.map((d, index) => {
                    return (
                      <span onClick={() => this.selectDay(d)} key={index} className={"day " + (this.state.selectedDay === d.day ? "selected" : "")}>
                        {d.abbr}
                      </span>
                    )
                  })
                }
              </div>
              {
                this.state.selectedDay ? (
                  <div className="time--slots">
                    <span className="heading">Please select a time slot.</span>
                    {
                      this.state.days.filter((d) => d.day === this.state.selectedDay)[0].time_slots.map((slot, index) => {
                        return (
                          <div onClick={() => this.handleChangeSlot(slot)} className={"slot " + (this.state.selectedTimeSlot === slot ? "selected" : "")} key={index}>
                            <Radio
                              checked={this.state.selectedTimeSlot === slot}
                              value={slot}
                              name="slot-button"
                            />
                            <span className="slot-description">{slot}</span>
                          </div>
                        )
                      })
                    }


                    <button className="button--Primary">Save</button>

                  </div>
                ) : ""
              }

            </div>

          </div>
        </div>
        <div className="grid">

        </div>
      </div>)
  }
}
