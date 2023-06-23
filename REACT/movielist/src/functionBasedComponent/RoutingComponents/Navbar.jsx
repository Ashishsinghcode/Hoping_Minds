import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './style.css'
export default function Navbar() {
    return (
        <div style={{ top: 0 }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/"><strong>Navbar</strong></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feepage">FeePage</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><NavLink className="dropdown-item" to="fedcourse">FED Course</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="bedcourse">BED Course</NavLink></li>
                                </ul>
                                    
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
            <hr/>
            {/* <nav>
                <ul>
                    <li style={{ float: 'left', marginLeft: '30px' }}>Navbar</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>Home</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>Courses</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>FeePage</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>FED Course</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>BED Course</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>Courses</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>Login</li>
                    <li style={{ float: 'left', marginLeft: '30px' }}>About</li>
                    <li style={{ marginLeft: '30px' }}>Contact_us</li>
                </ul>
                <hr />
            </nav> */}

        </div>
    )
}
