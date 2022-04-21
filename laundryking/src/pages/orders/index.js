import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { X } from "react-feather";
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
      orderfields: [
        { title: "Pickup Date", value: "" },
        { title: "Phone Number", value: "" },
        { title: "Pickup Location", value: "" },
        { title: "Any notes?", value: "" }
      ],
      create_order_status: false
    };
  }

  triggerCreateOrder = () => {
    let status = this.state.create_order_status

    this.setState({
      create_order_status: !status
    })
  }

  handleChange = (e, index) => {
    let copy_orderfields = [...this.state.orderfields]
    copy_orderfields[index].value = e.target.value;

    this.setState({
      orderfields: copy_orderfields
    })
  }
  render() {
    return (
      <div className="laundry--orderPage">
        <div className="orders--table">
          <header>
            <span className="heading">My Orders</span>
            <button onClick={this.triggerCreateOrder} className="button--Primary">Create new Order</button>
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
        {
          this.state.create_order_status ? (
            <div className="create--order">
              <header>
                <X onClick={this.triggerCreateOrder} />
                <span>New Order</span>
              </header>
              <form onSubmit={this.handleSubmitOrder}>
                <div className="form--wrapper">
                  {
                    this.state.orderfields.map((field, index) => {
                      return (
                        <div className={"field"} key={index}>
                          <label>{field.title}</label>
                          {index === 3 ? (
                            <textarea name={field.name} value={field.value} onChange={(e) => this.handleChange(e, index)} />
                          ) : (
                            <input type="text" name={field.name} value={field.value} onChange={(e) => this.handleChange(e, index)} />

                          )}
                        </div>
                      )
                    })
                  }
                </div>
                <button type="submit" className="button--Primary">Create Order</button>
              </form>
            </div>
          ) : ""
        }
      </div>
    );
  }
}
