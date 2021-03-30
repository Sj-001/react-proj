import React, {useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import swal from 'sweetalert'
function Login() {
    const[username, setusername]=useState('')
    const[password, setpassword]=useState('')

    function validate(event){
        event.preventDefault();
        if(username=='javascript' && password=='react'){
            swal('Login Successful', 'Congratulations, your login is successful', 'success')
        }
        else{
            swal('Invalid Login Details', 'Please check your details', 'error')
        }

    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1>User Authentication</h1>
                    <form onSubmit={validate}>
                        <input type="text" placeholder="username"
                        className="form-control"
                        value={username} 
                        onChange={(event)=>{setusername(event.target.value)}}/><br/>
                        <input type="text" placeholder="password"
                        className="form-control"
                        value={password} 
                        onChange={(event)=>{setpassword(event.target.value)}}/><br/>
                        <input type="submit"
                        className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;