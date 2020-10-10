import React from 'react';

const charComponent = (props) => {
  return <span onClick={props.click}>{props.letter}</span>
}

export default charComponent;