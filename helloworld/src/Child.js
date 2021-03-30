import React from 'react';

function Child(props) {
  return <div>
    <h1>This is child Component</h1>
<p>The received country from parent component is {props.country}</p>
  </div>
}

export default Child;