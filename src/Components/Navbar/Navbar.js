import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a href="#home" class="navbar-brand">
            Team Builder - Make Your Favorite Team
          </a>
          <div className="navbar-dark d-flex">
            <a href="#players">
              <h5 className="me-5">Players</h5>
            </a>
            <a href="#footer">
              <h5>Contact Me</h5>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
