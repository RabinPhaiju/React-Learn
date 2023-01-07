import React from "react"
import {Link, Outlet } from "react-router-dom"

const Hook = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  }
  return (
    <div>
    <nav>
      <div className='nav'>
        <Link to='/React-Learn/Hook/useTransition' style={navStyle}>
          <div className='nav-item'>useTransition</div>
        </Link>
        <Link to='/React-Learn/Hook/debounce' style={navStyle}>
          <div className='nav-item'>debounce</div>
        </Link>
      </div>
      </nav>
     <Outlet/>
    </div>
  )
}

export default Hook
