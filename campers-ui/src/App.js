import React, { Component } from 'react';
import CampersContainer from './containers/CampersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          <p>Campers Leader Board</p>
        </header>
        <CampersContainer />
      </div>
    );
  }
}

export default App;
