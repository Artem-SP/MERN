import React from "react";
import { NavLink, useHistory, useContext } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const lougoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.pushState("/");
  };

  return (
    <nav>
      <div class="nav-wrapper blue-darken-1" style={{ padding: "0 2rem" }}>
        <span class="brand-logo">Cutting links</span>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={lougoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
