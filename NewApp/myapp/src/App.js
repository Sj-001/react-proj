import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name, setname] = useState('')
  const[username, setusername] = useState('')
  const[age, setage] = useState('')
  

  function printvalue(event){
    event.preventDefault()
    var user={
      name:name,
      username:username,
      age:age
    }

    console.log(user)
  }
  return (
    <div className="App">
      <h1>React forms</h1>
      <form onSubmit={printvalue}>
        <input type="text" placeholder="name" value={name}onChange={(event)=>{setname(event.target.value)}}/><br />
        <input type="text" placeholder='username' value={username} onChange={(event)=>{setusername(event.target.value)}}/><br />
        <input type="text" placeholder='age' value={age} onChange={(event)=>{setage(event.target.value)}}/><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
