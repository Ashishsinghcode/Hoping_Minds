import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const[username,setUsername]=useState()
  const[name,setName]=useState()
  const[gender,setGender]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()
  const[confirmPassword,setConfirmPassword]=useState()

  const handleUsername=(event)=>{
    setUsername(event.target.value)
  }
  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleGender=(event)=>{
    setGender(event.target.value)
  }
  const handlePhone=(event)=>{
    setPhone(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)  
  }
  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value)
  }
  console.log(username)
  console.log(name)
  console.log(gender)
  console.log(phone)
  console.log(password)
  console.log(confirmPassword)
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 border border-primary rounded my-5'>
            <h1 className='my-5 text-center'>Register</h1>
            <div className='row'>
              <div className='col-md'>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsername} type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="form-group my-2">
                    <label  htmlFor="name">Name</label>
                    <input onChange={handleName} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                  </div>
                    <label>Gender</label>
                  <div className="form-check">
                    <input onChange={handleGender} value='Male' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                      </label>
                  </div>
                  <div className="form-check">
                    <input onChange={handleGender} value='Female' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                      </label>
                  </div>
                  <div className="form-check">
                    <input onChange={handleGender} value='Others' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Others
                      </label>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="phone">Phone</label>
                    <input onChange={handlePhone} type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter phone" />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input onChange={handleConfirmPassword} type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                  </div>

                  <button type="submit" className="btn btn-primary my-2">Register</button>
                  <button type="reset" className="btn btn-danger my-2 mx-3">Cancel</button>
                </form>
                <NavLink className='text-center' to='/'>Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
