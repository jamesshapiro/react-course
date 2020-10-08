import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 33 },
      { name: 'Michael', age: 38 },
      { name: 'Eric', age: 41 }
    ],
    tful: false,
    showPersons: false
  }

  switchNameHandler = () => {
    console.log(this.tful);
    this.setState(
      {
        persons: [
          { name: 'Jamboree', age: 33 },
          { name: 'Michael', age: 38 },
          { name: 'Eric', age: 41 }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Jamboree', age: 33 },
          { name: event.target.value, age: 38 },
          { name: 'Eric', age: 41 }
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
          </div>);
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
