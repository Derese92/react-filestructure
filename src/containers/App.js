import React, { Component } from 'react';

import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons:[
      {id: 'fff', name:'Derese',age:25},
      {id: 'hh',name:'Abule',age:30},
      {id: 'kk',name:'Teshome',age:32}
    ],
    otherState: 'someother sate',
    showPersons: false
  } 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  
  render() {
    
    let persons = null;
    if(this.state.showPersons){
        persons = <Person 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                />;
    }
        
    
    return (
      <div >
      <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      />
      {persons}
      </div>
      
     
    );
  }
}

export default App;
