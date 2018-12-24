import React, { Component } from 'react';

import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';


import './App.css';
import './Styles/General.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
