import React, { Component } from 'react';
// import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

const StyledButton = styled.button` 
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding:8px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black; 
    }`;


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

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   // this.state.persons[0].name = 'Derese Teshome' Do Not Do this 
  //   this.setState({persons:[
  //     {name:newName,age:25},
  //     {name:'Abule',age:30},
  //     {name:'Teshome',age:40}
  //   ]
  //   })
  // }

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

    // this.setState({persons:[
    //   {name:'newName',age:25},
    //   {name:event.target.value,age:30},
    //   {name:'Teshome',age:40}
    // ]
    // })
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if(this.state.showPersons){
        persons = (
          <div className="App">
              {this.state.persons.map((person, index) => {
                return <Person 
                click={() => {this.deletePersonHandler(index)}}
                key={index}
                name={person.name} 
                age={person.age} 
                changed={(event) => {this.nameChangedHandler(event, person.id)}}/>
              })}
          </div> 
        )
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
     
      <div className="App">
      <h1>Hi, I'm react App</h1>
      <p className={classes.join(' ')}>This is realy awesome</p>
      <StyledButton alt={this.state.showPersons}
      onClick={this.togglePersonsHandler}
      >Toggle Persons</StyledButton>
      {persons}
      </div>
      
      // React.createElement('div', {className:'App'},React.createElement('h1', null, 'React is awesome'))
    );
  }
}

// const App = props => {
//   const [ this.state, setthis.state] = useState(
//     {
//           persons:[
//             {name:'Derese',age:25},
//             {name:'Abule',age:30},
//             {name:'Teshome',age:32}
//           ],
//           otherState: 'someother sate'
//         }
//   );
//   const [otherstate, setotherstate] = useState('someotherstate');
//   console.log(this.state, otherstate);

//   const switchNameHandler = () => {
//         // console.log('was clicked');
//         // this.state.persons[0].name = 'Derese Teshome' Do Not Do this 
//         setthis.state({persons:[
//           {name:'Derese Teshome',age:25},
//           {name:'Abule',age:30},
//           {name:'Teshome',age:40}
//         ]
//         })
//       };

//       // nameChangedHandler = (event) => {

//       // }

//   return(
//     <div className="App">
//           <h1>Hi, I'm react App</h1>
//           <p>This is realy awesome</p>
//           <button onClick={switchNameHandler}>Switch Name</button>
//           <Person 
//             name={this.state.persons[0].name} 
//             age={this.state.persons[0].age}></Person>
//           <Person 
//             name={this.state.persons[1].name} 
//             age={this.state.persons[1].age}
//             click={switchNameHandler}>My hobbies racing</Person>
//           <Person 
//             name={this.state.persons[2].name} 
//             age={this.state.persons[2].age}></Person>
//           </div>
//   )
// }

export default App;
