import React from "react";
import { NavLink } from "react-router-dom";
import { pageNames } from "../Pages";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="home-copy">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales
        nibh ultricies risus rhoncus, vitae ultrices orci efficitur. In eu eros
        arcu. In hac habitasse platea dictumst. Mauris fermentum cursus tortor
        quis posuere. Nunc quis rhoncus magna, ut placerat ante. In convallis
        purus sem, id pretium ex euismod sit amet. Nulla facilisi. Proin
        facilisis accumsan faucibus. Nam ultricies justo non turpis dictum,
        vitae hendrerit lacus hendrerit. Morbi non varius velit, a viverra
        tellus. Vestibulum vel aliquam magna, vitae vulputate sem. Maecenas
        cursus eros ut ligula dignissim, nec egestas nunc tempor. Cras accumsan
        dui ac urna gravida vehicula. Suspendisse ipsum lectus.
      </div>
      <NavLink to="/1" className="home-link">
        <div className="home-start">Get Started!</div>
      </NavLink>
      <hr />
      <div className="home-nav-links">
        {pageNames.map((pageName, index) => {
          let idx = index + 1;
          return (
            <div key={idx}>
              <NavLink to={`/${idx}`} className="home-nav-row">
                <div className="home-nav-number">{idx}</div>
                <div className="home-nav-text">{pageName}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
