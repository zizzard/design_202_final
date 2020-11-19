import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";
import CSSElement from "./CSSElement";

import {
  HeightWidth,
  Display,
  Position,
  PaddingMargin,
  Color,
  Background,
  Border,
  BorderRadius,
  Font,
} from "./Examples/CSS-Examples";

export default function Page6({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          Now that we know how to define style classes for HTML elements, let us
          learn how to add styling to those classes. Each of the CSS properties
          that we are soon to learn about goes inside CSS classes that we
          learned about on the previous page. On this page, examples of each
          style property will be shown after explaining the property as to do so
          at the end would be too complicated.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">height</p> and{" "}
              <p className="highlight-text">width</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">height</p> and{" "}
              <p className="highlight-text">width</p> property can be used to
              set the height and width of an HTML element. These properties can
              be set in a few different ways shown below:
              <ul className="child-list">
                <CSSElement
                  property={"height: 50px"}
                  standard={true}
                  text="Set the height of an element to be 50px large. Other units with a fixed length that can be used include `in`, `cm`, and `pt`."
                />
                <CSSElement
                  property={"height: 50%"}
                  standard={false}
                  text="Set the height to be 50% of the height of the parent element. This means if the element you’re setting the height of is located directly inside the body, it will be half the height of the body."
                />
                <CSSElement
                  property={"height: auto"}
                  standard={false}
                  text="Set the height to automatically be exactly the size of its contents."
                />
                <li>
                  The same sizing styles can be applied to the{" "}
                  <p className="highlight-text">width</p> property.
                </li>
              </ul>
            </p>
            <HeightWidth />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">display</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">display</p> property determines
              which type of display behavior used when rendering an HTML
              element. Generally, this is most understandable as defining the
              type of container (the shape that holds the element’s contents)
              used to display the element. While there are around twenty
              different display styles, we will be talking about the most
              commonly used ones:
              <ul className="child-list">
                <CSSElement
                  property={"display: inline"}
                  standard={true}
                  text="An `inline` element does not generate line breaks before or after themselves. This means if there is enough space to contain the element following this one, it will appear on the same line. With this display style, setting the element’s `height` and `width` have no effect."
                />
                <CSSElement
                  property={"dislay: block"}
                  standard={false}
                  text="A `block` element generates line breaks before and after themselves and takes up the whole width of its parent element if its width is not defined."
                />
                <CSSElement
                  property={"dislay: flex"}
                  standard={false}
                  text="An element with display type `flex` will be rendered as a flex container. This display type is super useful for laying page structure and is something we will focus on in the next section."
                />
                <CSSElement
                  property={"dislay: inline-block"}
                  standard={false}
                  text="An `inline-block` element is displayed similar to an `inline` element except you can set its `height` and `width`."
                />
                <CSSElement
                  property={"dislay: none"}
                  standard={false}
                  text="An element with display type `none` will not be rendered at all. This can be useful for hiding certain elements without completely removing them."
                />
              </ul>
            </p>
            <Display />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">top</p>,{" "}
              <p className="highlight-text">bottom</p>,{" "}
              <p className="highlight-text">left</p>, and{" "}
              <p className="highlight-text">right</p>:
            </p>
            <p className="page-list-content-text child">
              These styles are used to determine the offset of an element
              depending on its render position (to be described next). Like{" "}
              <p className="highlight-text">height</p> and{" "}
              <p className="highlight-text">width</p> you can set its position
              using fixed-length units (generally preferred), or with
              percentage-based units (not as commonly used). We will look at an
              example of how these properties are used in the following section.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">position</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">position</p> property is used to
              define how the HTML element is positioned on the page.
              <ul className="child-list">
                <CSSElement
                  property={"position: static"}
                  standard={true}
                  text="By default, HTML elements will be rendered in the order that they are written in your .html document. This style is generally used throughout your document as it allows you to build up your page in the same way that we visually view it as we code. The `top`, `bottom`, `left`, and `right` styles have no effect with this positioning style."
                />
                <CSSElement
                  property={"position: absolute"}
                  standard={false}
                  text="An HTML element positioned with the `absolute` takes up no physical space in your rendered document flow (that is other elements act as if this element is not rendered on the page when determining their render location) and positioned relative to its parent element. To define the element’s offset in comparison to the parent element, you must set the `top`, `bottom`, `left`, and `right` properties."
                />
                <CSSElement
                  property={"position: fixed"}
                  standard={false}
                  text="Similar to the `absolute` render style, elements with the `fixed` render style take up no space in your rendered document flow (again, that is other elements act if this element is not rendered on the page when determining their render location). Elements with a `fixed` rendered style are rendered with a relative offset to the entire page, set by using the `top`, `bottom`, `left`, and `right` properties."
                />
                <CSSElement
                  property={"position: relative"}
                  standard={false}
                  text="An HTML element positioned with the `relative` property is positioned relative to its parent element, with the offset determined by the `top`, `bottom`, `left`, and `right` properties. Initially, relative elements are placed as if they were rendered using the default `static` option."
                />
              </ul>
            </p>
            <Position />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">padding</p> and{" "}
              <p className="highlight-text">margin</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">padding</p> and{" "}
              <p className="highlight-text">margin</p> properties are used to
              provide additional space either inside or around the element. The{" "}
              <p className="highlight-text">padding</p> property adds additional
              space to the HTML element between the edge of the element and its
              content. The <p className="highlight-text">margin</p>
              property adds additional space to the HTML element outside of its
              edge between the next element. You can define padding and margin
              multiple ways as seen below:
              <ul className="child-list">
                <CSSElement
                  property={"padding: 5px 10px 15px 20px"}
                  standard={false}
                  text="By default, HTML elements will be rendered in the order that they are written in your .html document. This style is generally used throughout your document as it allows you to build up your page in the same way that we visually view it as we code. The `top`, `bottom`, `left`, and `right` styles have no effect with this positioning style."
                />
                <li>
                  <p className="highlight-text">padding-top: 5px;</p>,{" "}
                  <p className="highlight-text">padding-right: 10px;</p>,{" "}
                  <p className="highlight-text">padding-bottom: 15px;</p>, and{" "}
                  <p className="highlight-text">padding-left: 20px;</p>:{" "}
                  <p className="inline">
                    Sometimes it is easier to define each padding separately
                    using individual padding properties. These four style
                    properties are equivalent to the padding shown above.
                  </p>
                </li>
                <li>
                  You can apply margin styling using the same properties, except
                  for margins they are called{" "}
                  <p className="highlight-text">margin</p> and{" "}
                  <p className="highlight-text">margin-top</p>,{" "}
                  <p className="highlight-text">margin-right</p>,{" "}
                  <p className="highlight-text">margin-bottom</p>, and{" "}
                  <p className="highlight-text">margin-left</p>.
                </li>
              </ul>
            </p>
            <PaddingMargin />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">color</p>:
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">color</p> property is used to
              define the color of text and can be set to any valid hex color
              (i.e. #ffffff for white) or any{" "}
              <a
                className="page-link"
                href="https://htmlcolorcodes.com/color-names/"
              >
                predefined color name (learn more here)
              </a>
              .
              <ul className="child-list">
                <li>
                  <p className="highlight-text">color: white;</p> and{" "}
                  <p className="highlight-text">color: #ffffff;</p>:{" "}
                  <p className="inline">
                    These two styles would both set the text color to white.
                  </p>
                </li>
              </ul>
            </p>
            <Color />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">background</p>:
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">background</p> property sets the
              background color of an HTML element and follows the same
              conventions as the <p className="highlight-text">color</p>{" "}
              property.
            </p>
            <Background />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">border</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">border</p> property is used to
              add a border to the HTML element. The{" "}
              <p className="highlight-text">border</p>is composed of three
              parts: <p className="highlight-text">border-width</p>,{" "}
              <p className="highlight-text">border-style</p>, and{" "}
              <p className="highlight-text">border-color</p>.
              <ul className="child-list">
                <li>
                  The <p className="highlight-text">border-width</p> property is
                  the size of the border, generally defined in the number of
                  pixels.
                </li>
                <li>
                  The <p className="highlight-text">border-style</p> property is
                  the type of border that can be set to any of the following
                  styles: <p className="highlight-text">dotted</p>,{" "}
                  <p className="highlight-text">solid</p>,{" "}
                  <p className="highlight-text">double</p>, and{" "}
                  <p className="highlight-text">dashed</p>.
                </li>
                <li>
                  The <p className="highlight-text">border-color</p> property is
                  used to define the color of the border and can be set to any
                  valid color.
                </li>
                <li>
                  For example, the border property can be set like:{" "}
                  <HTMLHighlightText text="1px solid black;" /> or{" "}
                  <HTMLHighlightText text="2px dotted #ffffff;" />
                </li>
              </ul>
            </p>
            <Border />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">border-radius</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">border-radius</p> property is
              used to the border-radius or the amount of curve that the border
              has. Generally, the border-radius property is defined in the
              number of pixels.
              <ul className="child-list">
                <CSSElement
                  property={"border-radius: 5px"}
                  standard={false}
                  text="This would set the border-radius to 5px."
                />
              </ul>
            </p>
            <BorderRadius />
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">font</p>:
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">font</p> is used to change the
              typeface and styling of the text within an HTML element. The
              <p className="highlight-text">font</p> property is one of the most
              difficult CSS stylings to get correct, so I will point to an
              external guide that does a much better job of explaining this
              property than I could. To read more about the{" "}
              <p className="highlight-text">font</p> property,{" "}
              <a
                className="page-link"
                href="https://css-tricks.com/almanac/properties/f/font/"
              >
                follow this link
              </a>
            </p>
            <Font />
          </li>
        </ol>
      </div>
    </div>
  );
}
