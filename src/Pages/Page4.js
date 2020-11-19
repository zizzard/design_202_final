import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";

export default function Page4({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          The HTML tags that we are going to introduce in this section help to
          provide structure and style to our webpage. As mentioned previously,
          all of these go inside the <p className="highlight-text">body</p> tag,
          as they are elements to be rendered in the HTML document.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              Division <HTMLHighlightText text="<div>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">div</p> tag creates a “division”
              in the HTML document which can contain any other type of HTML
              element, or text itself. This is why the{" "}
              <p className="highlight-text">div</p> tag is often called a
              container. You can think of the{" "}
              <p className="highlight-text">div</p> tag as splitting up the{" "}
              <p className="highlight-text">body</p> tag, where each division is
              a subsection of the document body. Later on, we will learn how to
              position <p className="highlight-text">div</p> elements on the
              page. One interesting aspect of the{" "}
              <p className="highlight-text">div</p> tag is that your browser
              will automatically render a new line after a{" "}
              <p className="highlight-text">div</p> tag.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Paragraph <HTMLHighlightText text="<p>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">p</p> tag is used to store text
              and is not limited to storing a single paragraph. The{" "}
              <p className="highlight-text">p</p> tag automatically renders a
              blank line before and after each{" "}
              <p className="highlight-text">p</p> element.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Header <HTMLHighlightText text="<h#>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              Similar to paragraph tag, that header tag is used to render text,
              except it is generally used to render header and sub-header text.
              In total, there are six different header tags, each with bold text
              and decreasing font size. Theses tags are:{" "}
              <HTMLHighlightText text="<h1>, <h2>, <h3>, <h4>, <h5>, and <h6>" />
              .
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Image <HTMLHighlightText text="<img>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">img</p> tag is used to render
              images in your webpage. When writing the image tag, it expects two
              properties: <p className="highlight-text">src</p> and{" "}
              <p className="highlight-text">alt</p>. The{" "}
              <p className="highlight-text">img</p> is an empty element, so you
              do not need a closing tag.
              <ul className="child-list">
                <li>
                  <p className="page-list-content-text child">
                    <p className="highlight-text">src</p> is used to provide the
                    image tag with the source image location, which can be
                    specified in two ways. If the image you’re trying to render
                    is already hosted on the internet, you can directly include
                    the image’s url in the source property. Otherwise, you have
                    to store the image in the same directory as the html file
                    attempting to link the file. If you’re working with a lot of
                    images sometimes it is easier to create an image
                    subdirectory to store all the images. To link a file located
                    in a subdirectory, you have to specify the relative file
                    path from the html file in the image{" "}
                    <p className="highlight-text">src</p> property. To learn
                    more about{" "}
                    <a
                      className="page-link"
                      href="https://www.w3schools.com/html/html_filepaths.asp"
                    >
                      relative file paths click here.
                    </a>
                  </p>
                </li>
                <li>
                  <p className="page-list-content-text child">
                    <p className="highlight-text">alt</p> is used when the image
                    specified in the <p className="highlight-text">src</p>{" "}
                    property cannot be found or loaded. Generally, the{" "}
                    <p className="highlight-text">alt</p> property is given some
                    sort of text describing the image that should have been
                    loaded in.
                  </p>
                </li>
                <li>
                  <p className="page-list-content-text child">
                    An example <p className="highlight-text">img</p> tag looks
                    like the following:{" "}
                    <HTMLHighlightText text="<img src='images/me.png' alt='My headshot'>" />
                  </p>
                </li>
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Anchor <HTMLHighlightText text="<a>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">anchor</p> tag defines a
              hyperlink to navigate from one page to another. Similar to the{" "}
              <p className="highlight-text">img</p> tag the{" "}
              <p className="highlight-text">a</p> tag can link to an already
              hosted website or another local html file. In this section, we
              will only be looking at linking to other hosted websites and will
              later touch on linking local html pages.
              <ul className="child-list">
                <li>
                  <p className="page-list-content-text child">
                    <p className="highlight-text">href</p>: The{" "}
                    <p className="highlight-text">a</p> tag links to other pages
                    using the <p className="highlight-text">href</p> property.
                    If you want to create a link to Google’s home page with the
                    text “Google” you would use the following anchor element:{" "}
                    <HTMLHighlightText text="<a href='https://google.com'>Google</a>" />
                  </p>
                </li>
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">HTML Lists: </p>
            <p className="page-list-content-text child">
              In general, HTML supports two types of lists, ordered and
              unordered.
              <ul className="child-list">
                <li>
                  <p className="page-list-content-text child">
                    Unordered List <HTMLHighlightText text="<ul>" />: An
                    unordered list is a collection of elements listed by bullet
                    points. This type of list is defined by creating a{" "}
                    <HTMLHighlightText text="<ul>" /> element, adding internal{" "}
                    <HTMLHighlightText text="<li>" /> elements for each list
                    item, and followed by a closing{" "}
                    <HTMLHighlightText text="</ul>" /> tag.
                  </p>
                </li>
                <li>
                  <p className="page-list-content-text child">
                    Ordered List <HTMLHighlightText text="<ol>" />: An ordered
                    list is a collection of elements listed by cardinal numbers
                    (e.g. 1, 2, 3, …). This type of list is defined by creating
                    a <HTMLHighlightText text="<ol>" /> element, adding internal{" "}
                    <HTMLHighlightText text="<li>" /> elements for each list
                    item, and followed by a closing{" "}
                    <HTMLHighlightText text="</ol>" /> tag.
                  </p>
                </li>
                <li>
                  <p className="page-list-content-text child">
                    List Item <HTMLHighlightText text="<li>" />: A list item is
                    defined by the <HTMLHighlightText text="<li>" /> tag and can
                    contain any other HTML element.
                  </p>
                </li>
                <li>
                  <p className="page-list-content-text child">
                    Nested Lists: You’re able to nest multiple lists inside one
                    another to create an indented level with your list.
                  </p>
                </li>
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              Horizontal Rule <HTMLHighlightText text="<hr>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">hr</p> tag creates a horizontal
              line across the entire div that it is placed in with a height of
              1px (by default). You can modify its size and width using CSS
              style properties that we will learn about in the next section.
            </p>
          </li>
        </ol>
        <p className="page-body-text">
          Let us look at an example HTML file containing these tags and what is
          rendered in your webpage below.
        </p>
      </div>
    </div>
  );
}
