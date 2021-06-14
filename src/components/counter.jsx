import React, { Component } from "react"; // imrc

// cc
class Counter extends Component {
  state = {
    value: 0,
  };

  onIncrement = () => {
    let { value } = this.state;
    value++;
    this.setState({ value });
  };

  onDecrement = () => {
    let { value } = this.state;
    value--;
    this.setState({ value });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <br />
        Title <span> {this.state.value} </span>
        <button
          onClick={this.onIncrement}
          className="btn btn-success btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.onDecrement}
          className="btn btn-success btn-sm m-2"
        >
          -
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }
}

export default Counter;
