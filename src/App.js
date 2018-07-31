import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';


class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Android Development', image: "./android.png"},
      {id: 2, name: 'Web Development', image: "./globe.png"},
      {id: 3, name: 'Software Development', image: "./monitor.png"}
    ]
  }
  render() {

    let persons = (
      <div className="CardHolder">
        {this.state.persons.map((person, index) => {
          return <Card 
            name={person.name} 
            key={person.id}
            image={person.image}
            changed={(event) => this.changeNameHandler(event, person.id)}/>
        })}
        </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <div className="Body-1">
        <video autoPlay muted loop id="myVideo">
          <source src="./bgrvideo.mp4" type="video/mp4"/>
        </video>          
        </div>
        <div className="Body-2">
        <h2 className="miniHeader">Skills</h2>
        {persons}
        </div>
        <div className="footer">
        </div>

      </div>
    );
  }
}

export default App;
