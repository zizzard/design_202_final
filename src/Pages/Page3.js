import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";
import Structure from "./Examples/Structure";

export default function Page3({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          With set up complete, let’s jump into building your first web page.
          Open up the skeleton index.html in your text editor so we can talk
          about the basics of this file. As a bit of an overview, an HTML file
          provides the format for the structure of a webpage. These files are
          organized inside tags, pre-defined HTML elements written inside arrows
          (e.g. <HTMLHighlightText text="<div>" />
          ). At this step, we will be talking about a few of the basic HTML tags
          that provide the page’s basic structure.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<!DOCTYPE html>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              When your browser loads a file, it may have trouble deciding
              exactly how to display the page. For example, if you tried to open
              a .txt file in your browser, you would want it to display the
              text. However, when it comes to an HTML file, you want it to
              render the page as an HTML file. Therefore, we include the{" "}
              <p className="highlight-text">DOCTYPE</p> tag at the beginning of
              our HTML file as it allows the browser to automatically recognize
              our file as a webpage.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<html>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              As we dive deeper into tags in html, you will start to see that
              most tags have a beginning and closing section. That is, the html
              tag begins with <HTMLHighlightText text="<html>" /> and ends with{" "}
              <HTMLHighlightText text="</html>" />. Outside of the{" "}
              <p className="highlight-text">DOCTYPE</p> tag, the{" "}
              <p className="highlight-text">html</p> tag is the outer-most tag
              and defines the root, or beginning, of the HTML document. This
              means it contains all other HTML elements present on your webpage.
              All other tags go inside this tag.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<head>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">head</p> tag defines the
              metadata (data about other data, in this case, data about the
              webpage) of the html page.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<title>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">title</p> tag goes inside the{" "}
              <p className="highlight-text">head</p> tag and defines the title
              of the webpage. This element gets rendered along the title bar of
              your web browser in the tab that the page is open in. This element
              is required in all HTML documents. the html page.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<link>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">link</p> also tag goes inside
              the <p className="highlight-text">head</p> tag and is used to
              import an external resource, most often an external style sheet. A
              style sheet is a document (extension .css) that defines the style
              for a webpage and will be described in more depth later. One
              different thing about the link tag is that it is an empty element,
              which means it has no closing tag.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              The <HTMLHighlightText text="<body>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">body</p> tag goes inside the{" "}
              <p className="highlight-text">head</p> tag and defines your
              webpage’s body. All information within the{" "}
              <p className="highlight-text">body</p> tag gets rendered in your
              browser to be displayed. All HTML Tags shown on the next page
              belong inside the <p className="highlight-text">body</p> tag.
            </p>
          </li>
        </ol>
        <p className="page-example-text">
          <p className="bold">
            Let us look at an example HTML file and how it renders:
          </p>
          <Structure />
        </p>
      </div>
    </div>
  );
}
