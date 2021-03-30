import React, {useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
function Body() {
  const[name, setname]=useState('')
  const[username, setusername]=useState('')
  const[password, setpassword]=useState('')
  function register(event){

    event.preventDefault()
    var credentials=JSON.parse(localStorage.getItem('credentials') || "[]")
    var credential={
      name: name,
      username: username,
      password: password
    }

    credentials.push(credential)
    localStorage.setItem('credentials',JSON.stringify(credentials))

    alert('Registration is Successful!!')
  }
  return (
    <div className="row body">
      <div className="col-md-6 justify-content-center">
        <img src="https://www.fifteendesign.co.uk/wp-content/uploads/2019/05/facebook-messages-connections-updates-1.jpg" alt="facebook"/>
      </div>
      <div className="col-md-4">
        <h1>Register</h1>
        <form onSubmit={register}>
          <input type="text" placeholder="Name" className="form-control" value={name} onChange={(event)=>{setname(event.target.value)}}/>
          <input type="text" placeholder="Username" className="form-control" value={username} onChange={(event)=>{setusername(event.target.value)}}/>
          <input type="text" placeholder="Password" className="form-control" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
          <input type="submit" className="btn btn-primary" value="SIGN UP"/>
        </form>
      </div>
    </div>
  );
}

export default Body;