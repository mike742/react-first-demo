import './App.css';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {
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
      <NavBar totalItemsNumber={this.state.counters.filter(c => c.value > 0).length}></NavBar>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        ></Counters>
      </main>
    </React.Fragment> );
  }
}

export default App;
