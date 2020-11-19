import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";

export default function Page11({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <div className="page-group">
          <h3>Editing Style Directly in Chrome</h3>
          <p className="page-body-text">
            One of the biggest complaints that I hear from people who are first
            trying to get into web development is that styling pages is
            difficult, especially because it often feels like a guess-and-check
            problem. Google Chrome actually has a really intuitive solution for
            this problem built into their developer tools. To access this panel,
            open up your webpage in Chrome and then right-click the body of the
            page and select Inspect. You can also open this panel through the
            Chrome View settings by clicking{" "}
            <p className="highlight-text">View > Developer > Developer Tools</p>
            .
          </p>
          <p className="page-body-text">
            You should now see a panel opened up in Chrome along the right-hand
            side of your browser. This panel contains a set of tools that allow
            you to edit the page within your browser, debug potential issues,
            and analyze certain performance metrics of your site. We will be
            using the <p className="highlight-text">Elements</p> panel today,
            but feel free to explore the other panels as you become more
            proficient in Web Development.
          </p>
          <p className="page-body-text">
            Click on the <p className="highlight-text">Elements</p> panel to
            open it up and you should see the contents of your HTML document. To
            view any of the HTML elements you can either click on the element
            directly in the <p className="highlight-text">Elements</p> panel or
            click on the element selector tool along the left-hand side of the
            top bar in the <p className="highlight-text">Elements</p> panel (the
            icon is an arrow over a square) and then select the HTML element in
            your browser window. This will open the HTML element inside the
            style panel (located below the HTML document preview, or to the left
            of the HTML document preview depending on how large the{" "}
            <p className="highlight-text">Elements</p> panel is) which will
            display the corresponding style for that element. If you
            double-click on any of the CSS classes it will allow you to modify,
            add, or remove any attribute and then render this change directly in
            your browser. Because the changes you make inside the Chrome
            Developer Tools do not save to your local files it becomes a great
            way to test different styles for your website without worrying about
            overwriting your work. Unfortunately, this is also a double-edged
            sword as it does not allow you to easily save your changes, forcing
            you to re-write anything you changed.
          </p>
          <p className="page-body-text">
            Chrome does have support for saving style changes made directly in
            your browser and if you want to learn more about this,{" "}
            <a
              className="page-link"
              href="https://www.sitepoint.com/edit-source-files-in-chrome/"
            >
              follow this link here
            </a>
            .
          </p>
        </div>
        <div className="page-group">
          <h3>Draw Your Page Layout First</h3>
          <p className="page-body-text">
            While this tip may seem not that useful, it is one of the biggest
            pieces of advice that I can give. If you take the time to sit down
            and draw out the basic layout for your website, this can save you
            from a huge headache down the line. After coming up with your basic
            website layout, you will most likely be able to see any potential
            difficulties to code, and from there you can decide whether to make
            a different design decision altogether or make deliberate design
            decisions in other places to make this roadblock more feasible.
          </p>
        </div>
        <div className="page-group">
          <h3>Code Editor Packages</h3>
          <p className="page-body-text">
            While this section will be focused on packages available for Atom,
            there are available packages (sometimes called plugins) for pretty
            much every code editor around. Packages are additional pieces of
            code written to work on top of your code editor to provide you, the
            developer, with additional functionality which makes your life a lot
            easier. Here are some of my favorite Atom packages:
          </p>
          <ol className="parent-list">
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://atom.io/packages/linter"
                  >
                    Linter (https://atom.io/packages/linter)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                A code linter identifies potential issues with your code as you
                write it. This is incredibly helpful as you begin because you
                will often miss small mistakes that you’re making which could
                waste hours of time. This package provides the base linting
                structure for Atom and you will need to install additional
                linters for each type of file that you’re working with.
              </p>
              <ul className="child-list child">
                <li>
                  <p className="page-body-text">
                    <a
                      className="page-link"
                      href="https://atom.io/packages/linter-tidy"
                    >
                      linter-tidy (https://atom.io/packages/linter-tidy)
                    </a>
                    : Install this package to add an HTML linter to your Atom
                    application.
                  </p>
                </li>
                <li>
                  <p className="page-body-text">
                    <a
                      className="page-link"
                      href="https://atom.io/packages/linter-csslint"
                    >
                      linter-csslint (https://atom.io/packages/linter-csslint)
                    </a>
                    : Install this package to add a CSS linter to your Atom
                    application.
                  </p>
                </li>
              </ul>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://atom.io/packages/atom-beautify"
                  >
                    Atom Beautify (https://atom.io/packages/atom-beautify)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                This package provides a shortcut to “beautify” your code. It is
                always a good idea to write code that is more understandable to
                the human eye. Through proper indentation and code formatting,
                this can be achieved. While you can do this manually, packages
                like Atom Beautify provide you a quick and easy way to do this.
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://atom.io/packages/pigments"
                  >
                    Pigments (https://atom.io/packages/pigments)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                This package makes styling colors a lot easier as it provides a
                live preview of CSS colors in Atom.
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://atom.io/packages/autoclose-html-plus"
                  >
                    Auto Close HTML+
                    (https://atom.io/packages/autoclose-html-plus)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                Since almost all HTML tags have a paired closing tag, it is
                pretty easy to automate writing the closing tag. This package
                auto-completes writing closing HTML tags for you.
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-header">
                <p className="highlight-text">
                  <a
                    className="page-link"
                    href="https://atom.io/packages/file-icons"
                  >
                    File Icons (https://atom.io/packages/file-icons)
                  </a>
                </p>
              </p>
              <p className="page-list-content-text child">
                This package is a bit of a personal preference, but it adds file
                icons to the Atom sidebar to help you identify the files you’re
                working with easily.
              </p>
            </li>
            <li className="page-list-header-number">
              <p className="page-list-content-text child">
                Find more Atom packages on{" "}
                <a className="page-link" href="https://atom.io/packages">
                  their website here
                </a>
                .
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
