import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand h1"
            style={{ color: "white" }}
            href="/home"
          >
            <h2>Dream11</h2>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
