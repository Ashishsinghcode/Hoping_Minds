import React, { useState } from 'react'

const UncontrolledForm = () => {
  const [user, setUser] = useState({
    name: '',
    age: null
  })
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)

  }
  return (
    <>
      <label>Name :&nbsp;</label>
      <input type='text' id='name' onChange={handleChange} /><br />
      <label>Age : &nbsp;&nbsp;&nbsp;</label>
      <input type='text' id='age' onChange={handleChange} /> <br />
      <input type='submit' onClick={handleSubmit} />
    </>
  )
}

export default UncontrolledForm
