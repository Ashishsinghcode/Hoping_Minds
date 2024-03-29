import React from 'react'
//import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  //const cartValue = useSelector(state=>state)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">E-Commerce</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Product">Product</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/Cart">Cart <span className="badge badge-light text-light bg-danger rounded-circle"></span></NavLink>
              </li>

            </ul>
            
              <div className="nav-item">
                <NavLink className="nav-link text-danger" to="/" tabindex="-1" aria-disabled="true">Logout</NavLink>
              </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
