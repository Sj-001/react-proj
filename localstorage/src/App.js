import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[language, setlanguage]=useState('')
  const[framework, setframework]=useState('')

  function savelanguage(){
    var courses=JSON.parse(localStorage.getItem('courses') || "[]")
    var course={
      language: language,
      framework: framework
    }

    courses.push(course)

    localStorage.setItem('courses', JSON.stringify(courses))
  }

  
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <input type="text" placeholder="language" value={language} onChange={(event)=>{setlanguage(event.target.value)}}/>
      <input type="text" placeholder="framework" value={framework} onChange={(event)=>{setframework(event.target.value)}}/>

      <button onClick={savelanguage}>Click me</button>
    </div>
  );
}

export default App;
