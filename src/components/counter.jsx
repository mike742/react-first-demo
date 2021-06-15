import React, { Component } from "react"; // imrc

// cc
class Counter extends Component {
  render() {
    //console.log(this.props);
    return (
      <React.Fragment>
        <br />
        Title #{this.props.counter.id}:
        <span>
          <b>{this.props.counter.value}</b>
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
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
