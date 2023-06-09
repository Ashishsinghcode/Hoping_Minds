import React, { useRef, useState } from 'react'

const ControlledForm = () => {
  const name = useRef('')
  const age = useRef("")
  const handleSubmit = (s) => {
    console.log(name.current.value)
    console.log(age.current.value)
    s.preventDefault()

  }
  return (
    <>
      {console.log(name)}
      <br /><label>Name :&nbsp;</label>
      <input className='form-control' ref={name} type='text' /><br />
      <label>Age : &nbsp;&nbsp;&nbsp;</label>
      <input className='form-control' ref={age} type='text' /> <br />
      <input className='btn btn-primary' onClick={handleSubmit} type='submit' />
    </>
  )
}

export default ControlledForm
