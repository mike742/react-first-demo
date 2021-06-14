import './App.css';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <Counters></Counters>
    </React.Fragment>
  );
}

export default App;
