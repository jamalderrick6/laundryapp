import React, { Fragment } from "react";

import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";

export default class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColDef: { resizable: true, sortable: true },
      headerHeight: 40,
      rowHeight: 60,
    };
  }

  onGridReady = async (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  rowClicked = (params) => {
    this.props.rowClicked(params);
  };

  render() {
    return (
      <div className="grid-wrapper">
        <div className="grid-content">
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              flex: "1 1 0%",
            }}
          >
            <div
              className="ag-phawk"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
              }}
            >
              <AgGridReact
                columnDefs={this.props.columnDefs}
                rowData={this.props.rowData}
                modules={AllModules}
                rowSelection={this.props.rowSelection}
                suppressRowClickSelection={true}
                rowClassRules={this.props.rowClassRules}
                defaultColDef={this.state.defaultColDef}
                headerHeight={this.state.headerHeight}
                rowHeight={this.state.rowHeight}
                frameworkComponents={this.props.frameworkComponents}
                pagination={true}
                onRowClicked={this.rowClicked}
                onGridReady={this.onGridReady}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
