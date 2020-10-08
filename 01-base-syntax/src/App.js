import React, { Component } from 'react';
import './App.css';

import './UserInput/UserInput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {
        message: 'The industrial revolution and its consequences have been a disaster for the human race.',
        name: 'James'
      }, 
      {
        message: "They have greatly increased the life-expectancy of those of us who live in 'advanced' countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world.",
        name: 'Michael'
      }
    ],
  }

  nameChangedHandler = (event) => {
    this.setState({
      usernames: [
        {
          message: 'The industrial revolution and its consequences have been a disaster for the human race.',
          name: event.target.value
        }, 
        {
          message: "They have greatly increased the life-expectancy of those of us who live in 'advanced' countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world.",
          name: 'Michael'
        }
      ],
    }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      fontColor: 'red',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button style={style}>Hey!</button>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput
          name={this.state.usernames[0].name}
          changed={this.nameChangedHandler}
        ></UserInput>
        <UserOutput
          style={style}
          message={this.state.usernames[0].message}
          username={this.state.usernames[0].name}
        ></UserOutput>
        <UserOutput
          message={this.state.usernames[1].message}
          username={this.state.usernames[1].name}
        ></UserOutput>

      </div>
    );
  }
}

export default App;
