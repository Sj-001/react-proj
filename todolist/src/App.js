import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
function App() {
  const[newtask, setnewtask]=useState('')
  const[tasks, settasks]=useState([])
  function addtask(){
    settasks([...tasks, newtask])
  }

  function deletetask(index){
    console.log(index)
    var duparray=[...tasks]
    duparray.splice(index, 1)
    settasks(duparray)
  }

  const tasklist=tasks.map((object, index)=>{
    return <div className="row justify-content-center m-1">
      <h1 className="col-md-6 text-left">{index + 1}. {object}</h1>
      <button className="col-md-1 btn btn-danger" onClick={()=>deletetask(index)}>DELETE</button>
    </div>
  })
  return (
    <div className="App">
      <h1>React ToDo List</h1>
      <div className="row justify-content-center">
        <input type="text" placeholder="taskname" className="form-control col-md-6 m-1"
        value={newtask} onChange={(event)=>{setnewtask(event.target.value)}}/>
        <button className="btn btn-success col-md-1 m-1" onClick={addtask}>ADD TASK</button>
      </div>
      {tasklist}
    </div>
  );
}

export default App;
