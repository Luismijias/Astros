import React from "react";

function Orbit2() {
  return (
    <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
      {/* Estrelas */}
      <circle cx="400" cy="400" r="5" fill="white" />
      <circle cx="200" cy="200" r="3" fill="white" />
      <circle cx="600" cy="600" r="4" fill="white" />

      {/* Planetas orbitando as estrelas */}
      <circle cx="300" cy="600" r="15" fill="gray">
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

      <circle cx="500" cy="600" r="2" fill="white">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 600 600"
          to="0 600 600"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Anel de Saturno */}
      <ellipse cx="300" cy="600" rx="5" ry="40" fill="none" stroke="gray" stroke-width="2">
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
