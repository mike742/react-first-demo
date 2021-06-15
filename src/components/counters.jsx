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
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const newId = counters[counters.length - 1].id + 1;
    counters.push({ id: newId, value: 0 });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-outline-warning btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button
          className="btn btn-outline-success btn-sm m-2"
          onClick={this.handleAdd}
        >
          Add Item
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
