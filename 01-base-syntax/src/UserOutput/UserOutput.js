import React from 'react';

const useroutput = (props) => {
    return (
      <p>{props.message} Especially for {props.username}.</p>
    )
}

export default useroutput;