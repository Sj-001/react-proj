import React, { useState } from 'react';

function Home() {
  const[color, setcolor] = useState('red')
  const[bgcolor, setbgcolor] = useState('yellow')
  function changestyling(){
    setcolor('green')
    setbgcolor('blue')
  }
  return (
    <div>
      <h1>Manipulating Css using hooks</h1>
      <h1 style={{color:color}}>Ronaldo</h1>
      <h1 style={{backgroundColor:bgcolor}}>Football</h1>
      <button onClick={changestyling}>Change Styling</button>
    </div>
  );
}

export default Home;