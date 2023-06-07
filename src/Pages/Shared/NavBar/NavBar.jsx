import React from 'react';
import Container from '../Container';

const NavBar = () => {
    return (
        <Container>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Instructors</a>
        </li>
        <li><a>Classes</a></li>
        <li><a>Dashboard</a></li>
      </ul>
    </div>
    <img className='h-14 w-14' src="https://i.ibb.co/2hYBMPs/8955297-removebg-preview.png" alt="" />
    <a className="btn btn-ghost normal-case text-2xl -ml-6 font-bold">Artisans' Camp</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a>Instructors</a>
      </li>
      <li><a>Classes</a></li>
      <li><a>Dashboard</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </Container>
    );
};

export default NavBar;

