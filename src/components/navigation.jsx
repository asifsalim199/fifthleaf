import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container"> 
        <div className="navbar-header" >

          {/* Navbar Toggle Button */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", width: "100%" }}>
  {/* Logo & Text */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="/img/logo.png"
      alt="Logo"
      width="80"
      height="80"
      style={{ marginRight: "10px" }}
    />
    <h1 style={{ margin: 10, color: "black", fontSize: 26 }}>FIFTH LEAF LLP</h1>
  </div>

  {/* Navbar Toggle Button */}
  <button
    type="button"
    className="navbar-toggle collapsed"
    data-toggle="collapse"
    data-target="#navbar-menu"
    aria-expanded="false"
  >
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </button>
</div>

      
         
         </div> 

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right" style={{ margin:15}}>
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
    </nav>
  );
};
