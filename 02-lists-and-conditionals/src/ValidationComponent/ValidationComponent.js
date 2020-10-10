import React from 'react';

const validationComponent = (props) => {
  let message = 'Text Too Short'
  if (props.textFieldLength > 5) {
    message = 'Text Long Enough'
  }
  return (
  <div><p>{message}</p></div>
  )
}

export default validationComponent;