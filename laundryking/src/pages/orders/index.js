import React, { Component } from "react";
import cellDetailsRenderer from "../../components/cellDetailsRenderer";
import GridComponent from "../../components/Grid";

export default class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Order ID",
          field: "id",
        },
        {
          headerName: "Pick Up Date",
          field: "pickup_date",
        },
        {
          headerName: "Status",
          field: "status",
          cellClass: (params) => {
            if (params.data.status) {
              return `${params.data.status.toLowerCase()}-status-container`;
            } else {
              return "";
            }
          },
        },
        {
          headerName: "Delivery Date",
          field: "delivery_date",
        },
        {
          headerName: "Summary",
          field: "id",
          cellRendererSelector: (params) => {
            var menu = { component: "cellDetailsRenderer" };
            return menu;
          },
        },
      ],
      frameworkComponents: {
        cellDetailsRenderer: cellDetailsRenderer,
      },
      rowData: [
        {
          id: "#123",
          pickup_date: "26/03/2022 11:50",
          status: "Pending",
          delivery_date: "",
        },
        {
          id: "#122",
          pickup_date: "23/02/2022 11:50",
          status: "Done",
          delivery_date: "26/02/2022 14:50",
        },
        {
          id: "#121",
          pickup_date: "11/01/2022 11:50",
          status: "Done",
          delivery_date: "13/01/2022 14:50",
        },
        {
          id: "#120",
          pickup_date: "31/01/2022 11:50",
          status: "Done",
          delivery_date: "2/02/2022 14:50",
        },
      ],
    };
  }
  render() {
    return (
      <div className="laundry--orderPage">
        <div className="orders--table">
          <header>
            <span className="heading">My Orders</span>
            <button className="button--Primary">Create new Order</button>
          </header>

          <div className="grid">
            <GridComponent
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              frameworkComponents={this.state.frameworkComponents}
            />
          </div>
        </div>
        <div className="promotion">
          <div className="credits">
            <header>
              <span className="title">My credits</span>
              <span className="value">1 credit</span>
            </header>
            <div className="description">
              <span>Get free credits by inviting friends and family and</span>
              <span>
                Get 10% off your next order when they pay their first order
              </span>
            </div>
            <button className="button--Primary">Click to Copy and Share</button>
          </div>
        </div>
      </div>
    );
  }
}
