import React, { Component } from 'react';

import classes from './App.module.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


class App extends Component {
  state = {
    persons: [
      { id: 'asjfdlkjas12321', name: 'James', age: 33 },
      { id: 'klajsdfljasldf2', name: 'Michael', age: 38 },
      { id: 'lajsdfkljaj1232', name: 'Eric', age: 41 }
    ],
    tful: false,
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // does same thing as statement below
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [] // "red bold"
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
