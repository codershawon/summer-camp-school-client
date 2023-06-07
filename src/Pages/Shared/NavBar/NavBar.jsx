import React from 'react';
import Container from '../Container';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const {user,logout}=useAuth()
    console.log(user)
    const handleLogOut = () => {
      logout()
        .then(() => {})
        .catch((error) => console.log(error));
    };
    return (
        <Container>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><NavLink to="/"><a>Home</a></NavLink></li>
        <li>
          <NavLink to="/instructors"><a>Instructors</a></NavLink>
        </li>
        <li><NavLink to="/classes"><a>Classes</a></NavLink></li>
        <li>{user && <NavLink to="/dashboard"><a>Dashboard</a></NavLink>}</li>
      </ul>
    </div>
    <img className='h-14 w-14' src="https://i.ibb.co/2hYBMPs/8955297-removebg-preview.png" alt="" />
    <a className="btn btn-ghost normal-case text-xl lg:text-4xl  -ml-6 font-bold hidden lg:block">Artisans' Camp</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
    <li ><NavLink to="/"><a>Home</a></NavLink></li>
        <li>
          <NavLink to="/instructors"><a>Instructors</a></NavLink>
        </li>
        <li><NavLink to="/classes"><a>Classes</a></NavLink></li>
         <li>{user && <NavLink to="/dashboard"><a>Dashboard</a></NavLink>}</li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?<>
        <img className="h-14 w-14 rounded-full mr-2" src={user.photoURL} alt="" />
        <NavLink onClick={handleLogOut} to="/register" className="btn" style={{backgroundColor:"#07332F"}}>LogOut</NavLink>
        </>:<>
        <img className="h-14 w-14 rounded-full mr-2" src="https://i.ibb.co/KsCC2BM/placeholder.jpg" alt="" />
        <NavLink to="/login" style={{backgroundColor:"#07332F"}} className="btn">Login</NavLink>
        </>
    }
  </div>
</div>
        </Container>
    );
};

export default NavBar;

