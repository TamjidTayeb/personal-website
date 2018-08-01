import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
import Description from './Component/Description';


class App extends Component {
  state = {
    descriptionChoice: 0,
    cards: [
      {id: 1, name: 'Android Development', image: "./android.png"},
      {id: 2, name: 'Web Development', image: "./globe.png"},
      {id: 3, name: 'Software Development', image: "./monitor.png"}
    ],
    projectdescription: [
    {id: 1, name: 'Projects', photo: 'red', content: 'Lorem ipsum dolor sit amet, ne scripta definiebas eum. Ignota mucius percipit pro ne, eu vero primis propriae vim. Ut sed dolore impedit expetenda, ex duo expetendis mediocritatem. Purto pericula vel an. Dico cibo augue ad nec. Eripuit laoreet sed ne, ex mollis scribentur vim, pri ad duis partem. Eu docendi theophrastus vix, possim aliquam noluisse id pro. Sed no consul volumus aliquando, dicta tritani equidem vel id. In harum volutpat sea. Cibo legere torquatos pri et.'},
    {id: 2, name: 'Android Development', photo: 'green', content: '2nd'},
    {id: 3, name: 'Web Development', photo: 'yellow', content: '3rd'},
    {id: 4, name:'Software Development', photo: 'yellow', content: '4th'}
    ]
  }

  changeDescription = (event, id) => {
    //get index of clicked item
    const newIndex = this.state.projectdescription.findIndex(p => {
      return p.id === id;
    });

    let temp = {
        //create copy of person object we want
        ...this.state.descriptionChoice
    };

    temp = newIndex+1

    //store new index
    this.setState({descriptionChoice: temp})
  }

  render() {

    let cards = (
      <div className="CardHolder">
        {this.state.cards.map((c, index) => {
          return <Card 
            name={c.name} 
            key={c.id}
            image={c.image}
            clicked={(event) => this.changeDescription(event, c.id)}/>
        })}
        </div>
    );

    const index = this.state.descriptionChoice;
    let description = this.state.projectdescription[index].content;
    let descriptionName = this.state.projectdescription[index].name;
    let currentImg = this.state.projectdescription[index].photo;




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
        {cards}
        </div>
        <div className="Body-3">
        <div className="CardHolder">
        <Description content={description} name={descriptionName} image={currentImg}/>
        <div className="backBox" background={currentImg}>
        </div>
        </div>
        </div>
        <div className="footer">
        </div>

      </div>
    );
  }
}

export default App;
