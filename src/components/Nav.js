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
        <Link to='/React-Learn/reactdnd' style={navStyle}>
          <div className='nav-item'>React DND</div>
        </Link>
        <Link to='/React-Learn/shop' style={navStyle}>
          <div className='nav-item'>shop</div>
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
      </div>
    </nav>
  )
}

export default Nav
