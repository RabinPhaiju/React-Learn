import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  }
  return (
    <nav>
      <Link to='/React-Learn/' style={navStyle}>
        <h3>Logo | Home</h3>
      </Link>

      <div className='nav'>
        <Link to='/React-Learn/about' style={navStyle}>
          <div className='nav-item'>about</div>
        </Link>
        <Link to='/React-Learn/hook' style={navStyle}>
          <div className='nav-item'>hook</div>
        </Link>
        <Link to='/React-Learn/customHook' style={navStyle}>
          <div className='nav-item'>customHook</div>
        </Link>
        <Link to='/React-Learn/stylecomponents' style={navStyle}>
          <div className='nav-item'>Style_Component</div>
        </Link>
        <Link to='/React-Learn/taskTracker' style={navStyle}>
          <div className='nav-item'>Task_Tracker</div>
        </Link>
        <Link to='/React-Learn/dijkstra' style={navStyle}>
          <div className='nav-item'>Dijkstra</div>
        </Link>
        <Link to='/React-Learn/react-responsive' style={navStyle}>
          <div className='nav-item'>React-Responsive</div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
