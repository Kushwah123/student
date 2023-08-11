import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          SHRI S R CONVENT SCHOOL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-row-reverse">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Result">
                Result
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/User">
                Student
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Signup">
              Signup
              </NavLink>
            </li>
            
          </ul>
        </div>

        
      </div>
    </nav>
    
   </>
  );
};

export default Navbar;
