import React from "react";

const Footer = () => {
  const footerStyle = {
    width: "1349px",
    padding: "25px",
    marginTop: "20px",
    backgroundColor: "#BB2D3B",
  };
  return (
    <footer id="footer" style={footerStyle}>
      <h3 style={{ color: "white" }}>
        Developed By ❤{" "}
        <a
          target="blank_"
          style={{ color: "white" }}
          href="https://github.com/coderDaiyan"
        >
          Developer Daiyan.{" "}
        </a>
        All Rights Reserved
      </h3>
    </footer>
  );
};

export default Footer;
