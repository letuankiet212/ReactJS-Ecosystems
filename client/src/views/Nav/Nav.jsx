import React from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact={true}>
          Todo
        </NavLink>
        <NavLink activeClassName="active" to="/test">
          Example
        </NavLink>
        <NavLink activeClassName="active" to="/users">
          Users
        </NavLink>
      </div>
    );
  }
}

export default Nav;
