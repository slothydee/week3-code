import logo from './logo.svg';
import './App.css';
import MountUnmount from './MountUnmount';
import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMountUnmount: false,
      showCountdownTimer: false
    }
    console.log('App: constructor');
  }

  toggleMountUnmount = () => this.setState({ showMountUnmount: !this.state.showMountUnmount });

  toggleCountdownTimer = () => this.setState({ showCountdownTimer: !this.state.showCountdownTimer });

  render() {
    console.log('App: render');
    const {showMountUnmount, showCountdownTimer} = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleMountUnmount}>Toggle <code>MountUnmount</code> component</button>
        {showMountUnmount && <MountUnmount />}

        <button onClick={this.toggleCountdownTimer}>Toggle <code>CountdownTimer</code> component</button>
        {showCountdownTimer && <CountdownTimer countFrom={10} />}
      </div>
    );
  }
}

export default App;
