import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 7 },
      { id: 3, value: 2 },
      { id: 4, value: 105 },
    ],
  };
  handleIncrement = (c) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(c);
    //console.log(index);
    counters[index] = { ...c };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (c) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(c);
    counters[index] = { ...c };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
