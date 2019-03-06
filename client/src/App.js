import React, { Component } from 'react';

import Display from './Display/Display';
import Dashboard from './Dashboard/Dashboard';
import './App.css';

class App extends Component {
  state={
    balls: 0,
    strikes: 0,
  }

  componentDidUpdate(){
    if(this.state.balls > 3 || this.state.strikes > 2){
      this.setState({ balls: 0, strikes: 0 })
    }
  }

  strike = () => {
    this.setState({
      strikes: this.state.strikes + 1
    })
  }

  ball = () => {
    this.setState({
      balls: this.state.balls + 1
    })
  }

  foul = () => {
    if(this.state.strikes === 0){
      this.setState({
        strikes: this.state.strikes + 1
      })
    }else if(this.state.strikes === 1){
      this.setState({
        strikes: this.state.strikes + 2
      })
    }else{
      return null
    }
  }

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
        />
        <Dashboard 
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }
}

export default App;
