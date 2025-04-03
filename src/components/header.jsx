import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ color: "black" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <h3 style={{color:'black'}}>
                Pure, Natural, Instant – The Fifth Leaf Promise
                </h3>
                <p style={{color:"black"}}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Explore
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
