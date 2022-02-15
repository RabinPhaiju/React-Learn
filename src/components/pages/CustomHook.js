import React from "react"
import { Link } from "react-router-dom"

const CustomHook = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  }
  return (
    <nav>
      <div className='nav'>
        <Link to='/React-Learn/customHook/useLocalStorage' style={navStyle}>
          <div className='nav-item'>useLocalStorage</div>
        </Link>{" "}
        <Link to='/React-Learn/customHook/useFetch' style={navStyle}>
          <div className='nav-item'>useFetch</div>
        </Link>
        <Link to='/React-Learn/customHook/useMediaQuery' style={navStyle}>
          <div className='nav-item'>useMediaQuery</div>
        </Link>
      </div>
    </nav>
  )
}

export default CustomHook
