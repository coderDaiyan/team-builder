import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand h1"
            style={{ color: "white" }}
            href="#home"
          >
            <h2>Dream11</h2>
          </a>
          <div class="collapse d-flex navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                style={{ color: "white" }}
                class="nav-link active"
                aria-current="page"
                href="#players"
              >
                Players
              </a>
              <a style={{ color: "white" }} class="nav-link" href="#footer">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a href="#home" class="navbar-brand">
            Dream 11
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
