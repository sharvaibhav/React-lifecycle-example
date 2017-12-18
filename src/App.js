import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Lifecycle from './components/Lifecycle';
import Test from './components/Test';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className='container'>
            <div className='col-md-6'>
              <Lifecycle />
            </div>
            <div className='col-md-6'>
              <Test />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
