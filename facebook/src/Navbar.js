import React, {useState} from 'react';
import {withRouter, useHistory} from 'react-router-dom'
import './Navbar.css'
import swal from 'sweetalert'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
  const[username, setusername]=useState('')
  const[password, setpassword]=useState('')
  const history=useHistory()
  function logout(){
    localStorage.removeItem('loggedin')
    history.push('/')
    window.location.reload(true)

  }
  function login(){
    
    
    var credentials=JSON.parse(localStorage.getItem('credentials'))
    var i=0;
    for( var credential of credentials){
      if(credential.username==username && credential.password==password){
        ++i
        break
      }
    }
    if(i==1){
      swal('Login Successful','You will be redirected to dashboard', 'success')
      localStorage.setItem('loggedin', 'loggedin')
      history.push('/dashboard')
    }
    else{
      swal('Invalid Login Credentials', 'Check your details', 'error')
    }
    
  }
  return (
    <div className="row nav">
      <div className="col-md-6">
        <h1>FaceBook</h1>
      </div> 
      <div className="m-1">
        {
          (()=>{
            if(localStorage.getItem('loggedin')){
              return <button onClick={logout}>LOGOUT</button>
            }
            else{
              return <div>
                <input type="text" placeholder="username" value={username} onChange={(event)=>{setusername(event.target.value)}}/>
                <input type="text" placeholder="password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
                <button onClick={login}>LOGIN</button>
              </div>
            }
          })()
        }
      </div>
    </div>
  );
}

export default withRouter(Navbar);