import React, { useEffect } from 'react';

import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  // runs on initialization and return function runs on component unmounting/destruction
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    },1000);
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in useEffect')
    };
    // Http request...
  }, []);
  
  // runs unconditionally (I believe every time Cockpit is rendered but not sure)
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });

  

  // can have additional useEffects for different reactions to other pieces
  // of data aside from just props.persons   . You can have as many useEffects
  // as you want.

  const assignedClasses = []; // "red bold"
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
        </button>
    </div>
  );
}

export default Cockpit;

/*

        */