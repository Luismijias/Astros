import React from "react";
import "./index.less";

function Orbit1() {
  return (
    <svg className="orbit2-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="200" r="5" fill="white">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="300" cy="400" r="15" fill="gray">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 400 400"
          to="0 400 400"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="300" cy="400" r="12" fill="white">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 400 400"
          to="0 400 400"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>

      <ellipse
        cx="300"
        cy="400"
        rx="28"
        ry="2"
        fill="none"
        stroke="white"
        stroke-width="2"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 400 400"
          to="0 400 400"
          dur="10s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}

export default Orbit1;
