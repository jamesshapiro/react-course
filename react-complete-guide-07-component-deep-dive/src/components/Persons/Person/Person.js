import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm a Person! My name is {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
            
        )
        
    }

}

export default Person;