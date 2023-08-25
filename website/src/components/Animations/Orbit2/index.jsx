import React from "react";

import "./index.less";

function Orbit2() {
  return (
    <svg className="orbit2-svg" xmlns="http://www.w3.org/2000/svg">
  
      <circle cx="300" cy="500" r="15" fill="gray">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 400 400"
          to="360 400 400"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="100" cy="200" r="5" fill="white">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="500" cy="600" r="20" fill="white">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 400 400"
          to="0 400 400"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Anel de Saturno */}
      <ellipse cx="300" cy="500" rx="5" ry="40" fill="none" stroke="gray" stroke-width="2">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 400 400"
          to="360 400 400"
          dur="10s"
          repeatCount="indefinite"
        />
      </ellipse> 
    </svg>
  );
}

export default Orbit2;
