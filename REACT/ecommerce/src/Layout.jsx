import React from 'react'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
const Layout = (props) => {
  return (
    <>
    <NavBar/>
     {props.children}
    <Footer/>
    </>
  )
}

export default Layout
