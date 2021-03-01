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
            Player Auction
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
