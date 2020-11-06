import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson({ id: Math.random(), name: 'James', age: Math.floor( Math.random() * 40 )})} />
                {this.props.storedResults.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (payload) => dispatch({type: actionTypes.ADD_PERSON, payload: payload}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, resultElId: id})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);