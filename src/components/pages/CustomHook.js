import React from "react"
import {Link, Outlet } from "react-router-dom"

const CustomHook = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  }
  return (
    <div>
    <nav>
      <div className='nav'>
        <Link to='/React-Learn/customHook/useLocalStorage' style={navStyle}>
          <div className='nav-item'>useLocalStorage</div>
        </Link>
        <Link to='/React-Learn/customHook/useFetch' style={navStyle}>
          <div className='nav-item'>useFetch</div>
        </Link>  
        <Link to='/React-Learn/customHook/useProducts' style={navStyle}>
          <div className='nav-item'>useProducts</div>
        </Link>
        <Link to='/React-Learn/customHook/useMediaQuery' style={navStyle}>
          <div className='nav-item'>useMediaQuery</div>
        </Link>
      </div>
      </nav>
     <Outlet/>
    </div>
  )
}

export default CustomHook
