import React, { Component } from "react";
import AvatarComponent from "../../../components/Avatar";

export default class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      fields: [
        { name: "First Name", slug: "first_name", value: "" },
        { name: "Last Name", slug: "last_name", value: "" },
        { name: "Phone Number", slug: "phone_no", value: "" },
      ],
    };
  }

  onFileLoad = (e) => {
    const file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log("image loaded: ", fileReader.result);
      this.setState({ photo: fileReader.result });
    };

    fileReader.onabort = () => {
      console.log("reading aborted");
    };

    fileReader.onerror = () => {
      console.log("reading error");
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div className="profile--content">
        <div className="grid">
          <div className="wrapper">
            <span className="image">
              <AvatarComponent
                src={this.state.photo}
                style={{ width: "100%", height: "100%" }}
              />
            </span>

            <div className="information">
              <span className="name">Derrick Jamal</span>
              <span className="phone">+254707112680</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="avatar--setting">
            <AvatarComponent
              src={this.state.photo}
              style={{ width: 116, height: 116 }}
            />

            <div className="upload__container">
              <input
                type="file"
                id="file-browser-input"
                name="file-browser-input"
                ref={(input) => (this.fileInput = input)}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={this.onFileLoad.bind(this)}
                onChange={this.onFileLoad.bind(this)}
              />
              <span>Drag and drop your photo here or </span>
              <span className="click" onClick={() => this.fileInput.click()}>
                browse file
              </span>
            </div>
          </div>

          <div className="fields">
            {this.state.fields.map((field, index) => {
              return (
                <div className="field" key={index}>
                  <span className="label">{field.name}</span>
                  <input
                    type="text"
                    name={field.slug}
                    value={field.value}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
              );
            })}
            <div className="field button--container">
              <button className="button--Primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
