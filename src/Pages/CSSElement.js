import React from "react";

export default function CSSElement({ property, standard, text }) {
  return (
    <li>
      <p className="highlight-text">{property};</p>
      {standard ? " (default)" : ""}: <p className="inline">{text}</p>
    </li>
  );
}
