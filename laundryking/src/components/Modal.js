import React from "react";
import { Dialog } from "@mui/material";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.modal_state}
        >
          <div>{this.props.component}</div>
        </Dialog>
      </div>
    );
  }
}
