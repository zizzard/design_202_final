import React from "react";
import "./Pages.css";

import skeleton from "../skeleton.zip";

export default function Page1({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          Before diving headfirst into learning about web development, let us
          properly set up your computer for coding. If you already have
          alternative programs installed feel free to use them, these are just
          my recommendations.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              A Web Browser:{" "}
              <a className="page-link" href="https://www.google.com/chrome/">
                Google Chrome
              </a>
            </p>
            <ol className="child-list">
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  Obviously, the first thing you will need is a web browser to
                  view the actual website you built. Most likely you will
                  already one that you prefer, but I recommend Google Chrome as
                  it allows you to modify your website’s code and view the
                  changes in real-time. This is incredibly helpful, though not
                  something that is required to build a website.
                </p>
              </li>
            </ol>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              A Code Editor:{" "}
              <a className="page-link" href="https://atom.io/">
                Atom{" "}
              </a>
            </p>
            <ol className="child-list">
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  The other integral application to developing a website is a
                  code editor. I recommend Atom for its simplicity to set up and
                  appealing interface, but any text editor will work. If Atom
                  doesn’t suit your taste, here are a few other options:
                </p>
                <ol className="child-list">
                  <li>
                    <a
                      className="page-link"
                      href="https://code.visualstudio.com/"
                    >
                      Visual Studio Code
                    </a>
                  </li>
                  <li>
                    <a
                      className="page-link"
                      href="https://www.sublimetext.com/"
                    >
                      Sublime
                    </a>
                  </li>
                  <li>
                    <a
                      className="page-link"
                      href="https://www.jetbrains.com/webstorm/"
                    >
                      WebStorm
                    </a>
                  </li>
                  <li>
                    <a className="page-link" href="http://brackets.io/">
                      Brackets
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              A GitHub Account (and GitHub Desktop, optional)
            </p>
            <ol className="child-list">
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  GitHub is a company that provides free code hosting and
                  version control. This is great as it allows you to see how
                  your website develops over time and easily transfer it from
                  workstation to workstation. Additionally, GitHub allows you to
                  easily publish your website for the world to see.
                </p>
              </li>
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  Signup for a{" "}
                  <a className="page-link" href="https://github.com/join">
                    GitHub Account here.
                  </a>
                </p>
              </li>
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  Traditionally, code is “pushed” to GitHub through a
                  command-line interface (called Terminal on MacOS or cmd on
                  Windows), though this is a little difficult if you never have
                  done this before. If you want to try this method, set up the{" "}
                  <a className="page-link" href="https://cli.github.com/">
                    GitHub CLI here
                  </a>{" "}
                  Instead, I highly recommended downloading{" "}
                  <a className="page-link" href="https://desktop.github.com/">
                    GitHub Desktop here
                  </a>{" "}
                  and manage your GitHub files through that as it provides a
                  simple user interface.
                </p>
              </li>
            </ol>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Project Skeleton Code:{" "}
              <a className="page-link" href={skeleton}>
                Download here
              </a>
            </p>
            <ol className="child-list">
              <li className="page-list-subheader-number">
                <p className="page-list-content-text">
                  Located inside the provided zip folder are two files:
                  index.html and style.css. While I’ll describe what each of
                  these files and their contents are responsible for later,
                  generally .html files provide the actual webpage structure,
                  whereas styling is provided through the .css file.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
