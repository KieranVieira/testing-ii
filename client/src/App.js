import React, { Component } from 'react';

import Display from './Display/Display';
import Dashboard from './Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
