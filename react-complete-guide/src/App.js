import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'James', age: 33},
      {name: 'Michael', age: 38},
      {name: 'Eric', age: 41}
    ],
    tful: false
  }

  switchNameHandler = () => {
    console.log(this.tful);
    this.setState(
      {
        persons: [
          {name: 'Jamboree', age: 33},
          {name: 'Michael', age: 38},
          {name: 'Eric', age: 41}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Jamboree', age: 33},
          {name: event.target.value, age: 38},
          {name: 'Eric', age: 41}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hi, I'm a React app</h1>
       <p>This is really working!</p>
       <button 
         style={style}
         onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
       <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age} 
         click={this.switchNameHandler}
         changed={this.nameChangedHandler}
       >
       My Hobbies: Reading newspapers
       </Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
