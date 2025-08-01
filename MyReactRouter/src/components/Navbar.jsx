import React from 'react'
import "../assets/Navbar.css"
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav '>
      <ul className='all-list-items'>
        <l1 className="list-item"><NavLink activeClassName="active" className="nav-item" to={"/"}>Home</NavLink></l1>
        <l1 className="list-item"><NavLink activeClassName="active" className="nav-item" to={"/login"}>Login</NavLink></l1>
        <l1 className="list-item"><NavLink activeClassName="active" className="nav-item" to={"/register"}>Sign up</NavLink></l1>
      </ul>
    </nav>
  )
}

export default Navbar