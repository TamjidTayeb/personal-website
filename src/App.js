import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
import Description from './Component/Description';


class App extends Component {
  state = {
    about: 'Lorem ipsum dolor sit amet, ne scripta definiebas eum. Ignota mucius percipit pro ne, eu vero primis propriae vim. Ut sed dolore impedit expetenda, ex duo expetendis mediocritatem. Purto pericula vel an.',
    skillsCards: [
      {id: 1, name: 'Soft Skills', image: './softskills.png', text: 'lololol'},
      {id: 2, name: 'Personal Details', image: './personal.png', text: 'hehehe'},
      {id: 3, name: 'Technical Skills', image: './education.png', text: 'hahaha'},
    ],
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
    {id: 4, name:'Software Development', photo: 'purple', content: '4th'}
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

    let skillsCards = (
      <div className="CardHolder">
        {this.state.skillsCards.map((c, index) => {
          return <Card 
            name={c.name} 
            key={c.id}
            image={c.image}
            />
        })}
        </div>
    );

    const index = this.state.descriptionChoice;
    let description = this.state.projectdescription[index].content;
    let descriptionName = this.state.projectdescription[index].name;
    let bg = this.state.projectdescription[index].photo;
    //about text
    let about = this.state.about;

    //scroll animation
    var scrolled = false;
    function getDocHeight(D) {
      return Math.max(
          D.body.scrollHeight, D.documentElement.scrollHeight,
          D.body.offsetHeight, D.documentElement.offsetHeight,
          D.body.clientHeight, D.documentElement.clientHeight
      )
  }
  
  function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight(document)
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

    if (pctScrolled > 25) {
      scrolled = true;
      document.getElementById('anim').className+=" animate";
    }
  }

  window.addEventListener("scroll", function(){
    if (!scrolled) amountscrolled()
  }, false)





    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="start">   
        <h2>PASSIONATE ABOUT SOFTWARE</h2>
        <h2 style ={ { fontSize: '35px', paddingTop: '0'} }>Tamjid Tayeb</h2>
        </div>
        <div className="Body-1">
        <div className="aboutholder" id="anim">
        <h2>About</h2>
        <div style= { { padding:'25px'}}>
        <p>{about}</p>
        </div>
        </div>
        </div>
        <div className="Body-2">
        <h2 className="miniHeader two">Skills</h2>
        <div className="CardHolder">
        {skillsCards}
        </div>
        </div>
        <div className="Body-3">
        <h2 className="miniHeader one">Projects</h2>
        {cards}
        </div>
        <div className="Body-4">
        <div className="CardHolder">
        <Description content={description} name={descriptionName}/>
        <div className="backBox">
        <div className="imgHolder" style ={ { background: bg } }>
        </div>
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
