import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <div className='nav'>
        <Link to='/about'>
          <div className='nav-item'>about</div>
        </Link>
        <Link to='/shop'>
          <div className='nav-item'>shop</div>
        </Link>
        <Link to='/dijkstra'>
          <div className='nav-item'>Dijkstra</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
