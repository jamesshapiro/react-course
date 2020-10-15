import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  
  // runs on initialization and return function runs on component unmounting/destruction
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // },1000);
    toggleBtnRef.current.click();
    return () => {
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Cockpit);