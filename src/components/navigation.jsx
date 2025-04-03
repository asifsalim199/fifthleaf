import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          {/* Flex Container for Logo, Brand, and Navigation */}
          <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            
            {/* Logo Image */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/img/logo.png"
                alt="Logo"
                width="80"
                height="80"
                style={{ marginRight: "10px", verticalAlign: "middle" }}
              />
              {/* Brand Name */}
              <h1 style={{ color: "black", margin: 0, width:250 }}>FIFTH LEAF LLP</h1>
            </div>

            {/* Navbar Toggle Button for Mobile */}
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"style={{marginLeft:'500'}}>
              <ul className="nav navbar-nav" style={{ display: "flex", gap: "20px" }}>
                {/* <li>
                  <a href="#features" className="page-scroll">
                    Features
                  </a>
                </li> */}
                <li>
                  <a href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="page-scroll">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};
