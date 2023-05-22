import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {

  const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' });

  return (
    <header>
      <nav>
        <NavLink to="/" style={styles}>Home</NavLink>
        <NavLink to="/shows" style={styles}>Shows</NavLink>
        <NavLink to="/search" style={styles}>Search shows</NavLink>
      </nav>
      <Outlet/>
    </header>
  );
}

export default Header;
