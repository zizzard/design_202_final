import React from "react";
import { NavLink } from "react-router-dom";
import { pageNames1, pageNames2 } from "../Pages";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <h1 className="inline">Introduction to Web Development</h1>
        <h3 className="inline left">By Zach Izzard</h3>
        <div className="page-copy">
          <p>
            If you're looking to learn web development, then you've come to the
            right place! Split into twelve digestable steps, this tutorial
            covers all of the basics in Web Development. Everything you need to
            know to build you first website is included in this guide, from the
            actual construction of your site up to getting it published online.
            Each basic component of web development is described in-depth with
            helpful examples along the way. But don't take it from me, listen to
            a testimonial from a statisfied user of this very site:
          </p>
          <div className="testimonial">
            <p>
              Hello, my name is Ian and I graduated from the University of
              Southern California about a year ago. While I thought I was a
              great designer, I was struggling to connect with clients as I had
              no way to show off what I’ve done. I have a PDF document
              containing my portfolio, but it was difficult to share with
              potential clients. I tried making a website on Squarespace, but it
              was too expensive to have for its occasional use. I really
              struggled to consistently connect with clients until I discovered
              Zach’s Website Development Guide.
            </p>
            <p>
              After reading the guide and working through the examples, I began
              to understand basic website design. First, I decided to create a
              mockup of their website in Adobe XD as design is my strong suit.
              Then, I began to transfer my mockup to the web using what I
              learned in the guide. I kept working on a little every day until I
              finally reached making it look like my mockup. I then hosted it on
              GitHub and ever since then I’ve been able to share my work easily
              and for free. As I created more work, I was easily able to add new
              things to my site since I understood how it functioned. The
              website itself even became part of my portfolio. Definitely take a
              look at Zach’s guide if you’re looking to learn web development!
            </p>
          </div>
          <p>
            Hopefully that was enough to convince you to continue. If you want
            to jump right in, click on the{" "}
            <p className="highlight-text">get started</p> button on the bottom
            right of your screen. If you want to jump directly to a certain
            topic, feel free to select an of the below options.
          </p>
          <hr />
          <div className="jump-to-header">
            <h3>Jump to any of the below topics</h3>
          </div>
          <div className="links">
            <div>
              {pageNames1.map((pageName, index) => {
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
            <div>
              {pageNames2.map((pageName, index) => {
                let idx = index + 7;
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
