import React, { Component } from "react";

import axios from "axios";

class Patient extends Component {
  state = {
    patient: {},
    isCreate: false,
  };

  handleId = (id) => {
    axios.get("https://localhost:5001/Patients/" + id).then((response) => {
      this.setState({ patient: response.data === "" ? {} : response.data });
      this.setState({ isCreate: response.data.name !== undefined });
    });
  };

  render() {
    return (
      <React.Fragment>
        Search Id:
        <input
          className="form-control m-2"
          type="text"
          placeholder="Search by Id"
          onBlur={(e) => this.handleId(e.target.value)}
        ></input>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Health Number"
          value={this.state.patient.healthNumber || ""}
        ></input>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Name"
          value={this.state.patient.name || ""}
        ></input>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Date of Birth"
          value={this.state.patient.dateOfBirth || ""}
        ></input>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Phone Number"
          value={this.state.patient.phoneNumber || ""}
        ></input>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Address"
          value={this.state.patient.address || ""}
        ></input>
        <button
          type="button"
          className="btn btn-success  m-2"
          disabled={this.state.isCreate}
        >
          Add New Patient
        </button>
        <button
          type="button"
          class="btn btn-warning m-2"
          disabled={!this.state.isCreate}
        >
          Update Patient
        </button>
      </React.Fragment>
    );
  }
}

export default Patient;
