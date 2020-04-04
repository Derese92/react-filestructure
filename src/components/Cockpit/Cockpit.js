import React from "react";
import classes from './Cockpit.css';



const cockpit = (props) => {

    let assignedclasses = [];

    if (props.showPersons){
        assignedclasses = ['red'];
    }

    if (props.persons.length <= 2){
        assignedclasses.push('red');
    }
    if (props.persons.length <= 1){
        assignedclasses.push('bold');
    }


  return (
    <div className={classes}>
      <h1>Hi, I'm react App</h1>
      <p className={assignedclasses.join(" ")}>This is realy awesome</p>
      <button
        alt={props.showPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
