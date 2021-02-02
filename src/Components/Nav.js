import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <div className='nav'>
        <Link to='/about' style={navStyle}>
          <div className='nav-item'>about</div>
        </Link>
        <Link to='/shop' style={navStyle}>
          <div className='nav-item'>shop</div>
        </Link>
        <Link to='/dijkstra' style={navStyle}>
          <div className='nav-item'>Dijkstra</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
