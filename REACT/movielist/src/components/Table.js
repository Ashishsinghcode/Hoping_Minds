import React from 'react'


export default function Table(props) {

  return (
    <div className='form-control'>
      <table className='form-control border'>
        <tbody>
        <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
        </tr>
        <tr>
            <th>{props.email}</th>
            <th>{props.password}</th>
            <th>{props.gender}</th>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
