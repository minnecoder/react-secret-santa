import React, { Component } from 'react';
import './App.css';
import AddPerson from "./AddPerson";




class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>This is the Header!!</h3>
        </header>
        <AddPerson />
      </div>
    );
  }
}

export default App;
