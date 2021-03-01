import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand">
            Team Builder - Make Your Favorite Team
          </a>
          <div className="navbar-dark d-flex">
            <a href="#players">
              <h5 className="me-5">Players</h5>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
