import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";

export default function Page5({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          While the body tags we learned about on the last page gives us a
          pretty good way to build the basic structure of our webpage, there
          isn’t much you can do with HTML alone to make it look good. That is
          where Cascading Style Sheets (commonly called CSS) comes in. CSS
          allows us to style our webpages by giving our HTML elements a general
          class or unique ID and then allowing us to define certain styles for
          their respective class or ID. CSS is defined in .css files which can
          be imported through the <p className="highlight-text">link</p> tag
          that we learned about earlier.
        </p>
        <p className="page-body-text">
          In general, you can apply styling to HTML elements through two
          methods: classes and IDs. Generally, if you have multiple elements
          that you want to style in the same way, you should define a single
          class to style each of these elements, whereas if you have a single
          unique element that you want to style you would define a style for
          that element’s ID. You can give any HTML element a class and/or an ID,
          which is done as follows:
        </p>
        <p className="page-body-text indent">
          <HTMLHighlightText text="<div class='red-circle'></div>" />
        </p>
        <p className="page-body-text indent">
          <HTMLHighlightText text="<div id='picture-container'></div>" />
        </p>
        <p className="page-body-text">
          After giving out HTML elements a class/ID, we can begin to style these
          elements in our .css file (in the provided skeleton code, this would
          be <p className="highlight-text">styles.css</p>). If we wanted to
          style our <p className="highlight-text">red-circle</p> class, then we
          would create the following class definition in our styles.css file:
        </p>
        <p className="page-body-text indent">
          <HTMLHighlightText text=".red-circle{}" />
        </p>
        <p className="page-body-text">
          Anything style properties defined inside the{" "}
          <p className="highlight-text">red-circle</p> class (inside the curly
          braces) would then be applied to any HTML element with the class{" "}
          <p className="highlight-text">red-circle</p>. We will get to specific
          styling on the next page. In general, however, you define a CSS class
          by adding the <p className="highlight-text">.</p> selector before the
          class name inside the .css file.
        </p>
        <p className="page-body-text">
          Adding style for an ID is pretty similar, except instead of using the
          <p className="highlight-text">.</p> selector, you use the{" "}
          <p className="highlight-text">#</p> selector. That means, for the ID{" "}
          <p className="highlight-text">picture-container</p> we can define the
          class inside the .css file as follows:
        </p>
        <p className="page-body-text indent">
          <HTMLHighlightText text="#picture-container{}" />
        </p>
        <p className="page-body-text">
          Similarly, any style defined within the{" "}
          <p className="highlight-text">#picture-container</p> style definition
          will be applied to the HTML element with the ID{" "}
          <p className="highlight-text">picture-container</p>.
        </p>
        <p className="page-body-text">
          There is one more way we can apply style for HTML elements. For each
          defined HTML element, we can directly apply a style to all of those
          elements by defining a style for that element in our CSS file. For
          example, if we want to style all <p className="highlight-text">p</p>{" "}
          tags, then we can define a style for it as follows:
        </p>
        <p className="page-body-text indent">
          <HTMLHighlightText text="p{}" />
        </p>
        <p className="page-body-text">
          As you can see we do this by not including either the{" "}
          <p className="highlight-text">.</p> selector or the{" "}
          <p className="highlight-text">#</p> selector, instead we write just
          the tag name followed by a set of curly braces. This method for
          styling HTML elements works for all pre-defined HTML elements (e.g.{" "}
          <p className="highlight-text">div</p>,{" "}
          <p className="highlight-text">body</p>, and{" "}
          <p className="highlight-text">h1</p>).
        </p>
      </div>
    </div>
  );
}
