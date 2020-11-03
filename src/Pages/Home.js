import React from "react";
import { NavLink } from "react-router-dom";
import { pageNames } from "../Pages";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Introduction to Web Development</h1>
        <h3>By Zach Izzard</h3>
        <h4>Jump to</h4>
        <div className="home-hr" />
        <div className="home-nav-links">
          {pageNames.map((pageName, index) => {
            let idx = index + 1;
            return (
              <NavLink key={idx} to={`/${idx}`} className="home-nav-row">
                <div className="home-nav-number">
                  <div className="flex-vertical-center">{idx}</div>
                </div>
                <div className="flex-vertical-center">
                  <div className="home-nav-text">{pageName}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="nav">
        <div className="nav-button-hidden"></div>
        <div className="nav-button-hidden"></div>

        <NavLink to="/1">
          <button className="nav-button">get started</button>
        </NavLink>
      </div>
    </>
  );
}
