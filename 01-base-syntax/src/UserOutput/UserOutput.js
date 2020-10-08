import React from 'react';

const userOutput = (props) => {
    return (
      <div>
        <p>{props.message} Especially for {props.username}.</p>
        <p>Random text</p>
      </div>
      
    )
}

export default userOutput;