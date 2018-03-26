import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


import SearchByCompany from './components/SearchByCompany/SearchByCompany.js';
// import SearchByTech from './components/SearchByTech/SearchByTech.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tech Checker...for all your tech checkin' needs</h2>
        </div>
          <h3>Check the tech</h3>
          <div className="Components">
              <SearchByCompany />
              {/*<SearchByTech />*/}
          </div>
      </div>

    );
  }
}

export default App;
