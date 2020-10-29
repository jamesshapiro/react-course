import React, { Component } from 'react';

class Course extends Component {

    render () {
        const query = new URLSearchParams(this.props.location.search);
        return (
            <div>
                <h1>{query.get('title')}</h1>
                <p>You selected the Course with ID: {this.props.match.params.course}</p>
            </div>
        );
    }
}

export default Course;