import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";

import axios from "axios";
import Doctors from "./components/doctors";

class App extends Component {
  state = {
    doctors: [],
    patient: {},
    currentDoctorId: 0,
    currentAilment: "",
  };

  componentDidMount() {
    axios.get("https://localhost:5001/Doctors").then((responce) => {
      this.setState({ doctors: responce.data });
      this.setState({ currentDoctorId: this.state.doctors[0].id });
    });
  }

  handleCurrentDoctor = (event) => {
    console.log(event.target.value);
    this.setState({ currentDoctorId: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar>Doctor's office</NavBar>
        <main className="container">
          <p>
            Current Doctor ID: &nbsp;
            {this.state.currentDoctorId}
            <br />
          </p>
          <Doctors
            doctors={this.state.doctors}
            onCurrentDoctor={this.handleCurrentDoctor}
          ></Doctors>
          <hr />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
