import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";

export default function Page12({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <div className="page-group">
          <h3>HTML & CSS Resources</h3>
          <p className="page-body-text">
            While there is a ton of information in this guide, it doesn’t even
            begin to scratch the surface of the entirety of what you can do in
            HTML and CSS. If you have an interest in learning more, here are
            some additional resources that you can learn more about each from:
          </p>
          <ol className="parent-list">
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a className="page-link" href="https://www.w3schools.com/">
                    w3schools.com (https://www.w3schools.com/)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                w3schools is an incredible resource for HTML and CSS, providing
                information on pretty much all HTML and CSS elements, along with
                great examples of how they are used. It covers much more than I
                could in this guide, and in-fact was where I originally learned
                web development.
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a className="page-link" href="https://css-tricks.com/">
                    css-tricks.com (https://css-tricks.com/)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                This website has a ton of information on more advanced web
                development. You’re best off going into this site with a
                specific problem in mind and use the search bar to solve it, but
                they do have a ton of articles in{" "}
                <a className="page-link" href="https://css-tricks.com/guides/">
                  their guide section
                </a>
                .
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a className="page-link" href="https://labs.jensimmons.com/">
                    Jen Simmons Lab (https://labs.jensimmons.com/)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                Jen Simmons Lab is an incredible web developer at Apple and she
                has a website in which she posts great code examples of really
                advanced web layouts.
              </p>
            </li>
          </ol>
        </div>
        <div className="page-group">
          <h3>JavaScript</h3>
          <p className="page-body-text">
            One of the biggest parts of web development that I neglected to talk
            about in this guide is JavaScript, a programming language that can
            run within your browser to provide additional functionality for your
            website. Since JavaScript is a full-fledged programming language its
            applications are endless and most of the websites you use daily are
            heavily driven by JavaScript code. In fact, this website wasn’t
            written in traditional HTML, but through a JavaScript library used
            to build User Interfaces. If you want to learn more about JavaScript
            and some of its potential applications, you can learn more from the
            links below:
          </p>
          <ul className="parent-list">
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://www.codecademy.com/learn/introduction-to-javascript"
                  >
                    Code Academy
                    (https://www.codecademy.com/learn/introduction-to-javascript)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                Code Academy is a great resource for web development tutorials
                (along with many other coding languages), and their intro to
                JavaScript tutorial is both in-depth and super informative.
                There is about 30 hours of content so there is a lot to do, but
                it serves as an introduction to true programming (technically
                HTML/CSS is not programming, more of a markup or display
                language).
              </p>
              <ul className="child-list child">
                <li>
                  <p className="page-body-text">
                    <a
                      className="page-link"
                      href="https://www.codecademy.com/learn/build-interactive-websites"
                    >
                      JavaScript Web Development Tutorial
                      (https://www.codecademy.com/learn/build-interactive-websites)
                    </a>
                    : If you completed the first tutorial, I highly recommend
                    this tutorial as well. While the first tutorial introduced
                    you to JavaScript, this tutorial teaches JavaScript
                    in-regard to web development.
                  </p>
                </li>
                <li>
                  <p className="page-body-text">
                    <a
                      className="page-link"
                      href="https://www.codecademy.com/learn/react-101"
                    >
                      ReactJS Tutorial
                      (https://www.codecademy.com/learn/react-101)
                    </a>
                    : If you want to learn the JavaScript library that I used to
                    build this website, look no further. React allows you to
                    structure websites through reusable objects called
                    components and handle changing data gracefully.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="page-group">
          <h3>Thank you</h3>
          <p className="page-body-text">
            If you made it this far, thank you for taking the time to read this
            guide. I put a lot of work into it, so I hope it was helpful. If you
            want to learn more about me, the author, check out my main website
            at{" "}
            <a className="page-link" href="https://zachizzard.com">
              https://zachizzard.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
