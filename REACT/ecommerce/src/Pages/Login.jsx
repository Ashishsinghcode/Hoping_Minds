import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const[username,setUsername]=useState()
  const[password,setPassword]=useState()
  const navigate =useNavigate()
  const handleUsername=(event)=>{
    setUsername(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)

  }

  const Login =()=>{
    if(username === 'Ashish@gmail.com' && password === '1234'){
      alert('Login Successfully')
      navigate('/home',{replace:true});
    }else{
      alert('Invalid Username or Password')
      navigate('/',{replace:false});
    }
  }
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 border border-primary rounded my-5'>
            <h1 className='my-5 text-center'>Login</h1>
            <div className='row'>
              <div className='col-md'>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" onChange={handleUsername} className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                    
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" id="password" placeholder="Password" />
                  </div>

                  <button type="submit" onClick={Login} className="btn btn-primary my-2">Submit</button>
                  <button type="reset" className="btn btn-danger my-2 mx-3">Cancel</button>
                </form>
                <NavLink to='/register'>Register</NavLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
