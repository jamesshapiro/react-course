import React from 'react';

const validationComponent = (props) => {
  let message = (
    <div>Text Too Short</div>
  )
  if (props.textFieldLength >= 5) {
    message = (
        <div>Text Long Enough</div>
    )
  }
  return message
}

export default validationComponent;