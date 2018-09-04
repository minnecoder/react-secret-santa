import React, { Component } from 'react';
import './App.css';
import AddPerson from "./components/AddPerson";
import Person from "./components/Person";
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  state = {
    people: [],
    secretSantaType: "withkids"
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Person type={this.state.secretSantaType} />
       <AddPerson type ={this.state.secretSantaType} />
       <Footer />
      </div>
    );
  }
}

export default App;
