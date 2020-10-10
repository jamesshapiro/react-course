import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

import './CharComponent/CharComponent.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textField: "",
    textFieldLength: 0
  }

  deleteLetterHandler = (letterIndex) => {
    console.log('called!')
    //const persons = this.state.persons.slice(); // does same thing as statement below
    const textField = [...this.state.textField]
    textField.splice(letterIndex, 1)
    console.log(textField)
    this.setState({ textField: textField.join('') })
  }

  textChangedHandler = (event) => {
    this.setState({
      textField: event.target.value,
      textFieldLength: event.target.value.length
    })
  };

  render() {
    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'
    };

    let charComponents = null
    charComponents = (
      <div>
        {this.state.textField.split('').map((letter, index) => {
          return <CharComponent
            style={style}
            click={() => this.deleteLetterHandler(index)}
            letter={letter}
          />
        })}
      </div>
    )

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={this.textChangedHandler} value={this.state.textField} />
        <p>{this.state.textFieldLength}</p>
        <ValidationComponent
          textFieldLength={this.state.textFieldLength}
        />
        {charComponents}
      </div>
    );
  }
}

export default App;
