import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Look some recipes</h2>
          <p>
          Coconut milk is a versatile ingredient that adds a creamy, rich texture to various dishes. Here are some delicious recipes you can try using Fifth Leaf Instant Coconut Powder
          </p>
        </div>
        <div className="row">
  {props.data
    ? props.data.map((d, i) => (
        <div key={`${d.name}-${i}`} className="col-md-4">
          {/* Image instead of Icon */}
          <img
            src={d.image} // Load image dynamically from JSON
            alt={d.name}
            style={{ width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div className="service-desc">
            <h3>{d.name}</h3>
            <p>{d.text}</p>
          </div>
        </div>
      ))
    : "loading"}
</div>

      </div>
    </div>
  );
};
