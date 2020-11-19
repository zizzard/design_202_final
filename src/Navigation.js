import React from "react";
import Dropdown from "react-dropdown";
import { options } from "./Pages";

import "./Dropdown.css";

export default function Navigation({ pageNumber, prev, next, change, home }) {
  return (
    <>
      <div className="nav">
        {pageNumber !== 1 ? (
          <button onClick={prev} className="nav-button">
            previous
          </button>
        ) : (
          <button onClick={home} className="nav-button">
            return home
          </button>
        )}
        <Dropdown
          options={options}
          onChange={change}
          value={options[pageNumber]}
        />
        {pageNumber !== 12 ? (
          <button onClick={next} className="nav-button">
            next
          </button>
        ) : (
          <button onClick={home} className="nav-button">
            return home
          </button>
        )}
      </div>
    </>
  );
}
