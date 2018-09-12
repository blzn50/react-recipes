import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/logo.jpg';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);
HeaderLink.propTypes = {
  children: PropTypes.node,
};

const Header = () => (
  <header className="flex items-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽 MyRecipes</h1>
      <span className="mr1">by</span>
      <img src={Logo} style={{ width: 30 }} alt="logo" />
    </div>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

export default Header;
