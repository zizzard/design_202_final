import React from "react";
import "./Examples.css";
import "./CSS-Examples.css";

let heightwidthStr = `<div className="heightwidth-green">This is the green div</div>
<div className="heightwidth-red">This is the red div</div>
<div className="heightwidth-blue">This is the blue div</div>`;
let heightwidthCSS = `.heightwidth-green {
    background: #8cbd71;
    height: 150px;
    width: 150px;
}

.heightwidth-red {
    background: #dc6169;
    width: 50%;
}

.heightwidth-blue {
    background: #56a2ea;
    height: 150px;
}`;
export function HeightWidth() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{heightwidthStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{heightwidthCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="heightwidth-green">This is the green div</div>
              <div className="heightwidth-red">This is the red div</div>
              <div className="heightwidth-blue">This is the blue div</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let displayStr = `<div className="display-inline-first">This is the first inline div</div>
<div className="display-inline-second">
  This is the second inline div
</div>
<div className="display-block-first">This is the first block div</div>
<div className="display-block-second">This is the second block div</div>
<div className="display-inline-block-first">
  This is the first inline-block div
</div>
<div className="display-inline-block-second">
  This is the second inline-block div
</div>`;
let displayCSS = `.display-inline-first {
  display: inline;
  background: #8cbd71;
}
.display-inline-second {
  display: inline;
  background: #dc6169;
}

.display-block-first {
  display: block;
  background: #56a2ea;
}

.display-block-second {
  display: block;
  background: #8cbd71;
}

.display-inline-block-first {
  display: inline-block;
  background: #dc6169;
  height: 100px;
}

.display-inline-block-second {
  display: inline-block;
  background: #8cbd71;
  height: 50px;
}`;
export function Display() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{displayStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{displayCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="display-inline-first">
                This is the first inline div
              </div>
              <div className="display-inline-second">
                This is the second inline div
              </div>
              <div className="display-block-first">
                This is the first block div
              </div>
              <div className="display-block-second">
                This is the second block div
              </div>
              <div className="display-inline-block-first">
                This is the first inline-block div
              </div>
              <div className="display-inline-block-second">
                This is the second inline-block div
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let positionStr = `<div className="position-static">static</div>
<div className="position-relative">relative</div>`;
let positionCSS = `.position-static {
  background: #8cbd71;
  position: static;
}

.position-relative {
  background: #56a2ea;
  position: relative;
  left: 10px;
  top: 5px;
}`;
export function Position() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{positionStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{positionCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="position-static">static</div>
              <div className="position-relative">relative</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let paddingmarginStr = `<div className="padding-first">
  Filling up the container with text to show what padding looks like
</div>
<div className="margin">
  Filling up the container with text to show what margin looks like
</div>
<div className="padding-second">
  Filling up the container with text to show what another padding style
  looks like
</div>`;
let paddingmarginCSS = `.padding-first {
  padding: 5px 10px 15px 20px;
  background: #56a2ea;
  width: fit-content;
}

.padding-second {
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 5px;

  background: #dc6169;
  width: fit-content;
}

.margin {
  margin: 5px 10px 15px 20px;
  background: #8cbd71;
  width: fit-content;
}`;
export function PaddingMargin() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{paddingmarginStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{paddingmarginCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="padding-first">
                Filling up the container with text to show what padding looks
                like
              </div>
              <div className="margin">
                Filling up the container with text to show what margin looks
                like
              </div>
              <div className="padding-second">
                Filling up the container with text to show what another padding
                style looks like
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let colorStr = `<div className="color-green">This div has green text</div>
<div className="color-red">This div has green text</div>
<div className="color-blue">This div has green text</div>`;
let colorCSS = `.color-green {
  color: #8cbd71;
}

.color-red {
  color: #dc6169;
}

.color-blue {
  color: #56a2ea;
}`;
export function Color() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{colorStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{colorCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="color-green">This div has green text</div>
              <div className="color-red">This div has green text</div>
              <div className="color-blue">This div has green text</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let backgroundStr = `<div className="background-green">This is the green div</div>
<div className="background-red">This is the red div</div>
<div className="background-blue">This is the blue div</div>`;
let backgroundCSS = `.background-green {
  background: #8cbd71;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.background-red {
  background: #dc6169;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.background-blue {
  background: #56a2ea;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}`;
export function Background() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{backgroundStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{backgroundCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="background-green">This is the green div</div>
              <div className="background-red">This is the red div</div>
              <div className="background-blue">This is the blue div</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let borderStr = `<div className="border-green">
  This div has a solid 1px green border
</div>
<div className="border-red">This div has a dotted 2px red border</div>
<div className="border-blue">This div has a double 3px blue border</div>`;
let borderCSS = `.border-green {
  border: 1px solid #8cbd71;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.border-red {
  border: 2px dotted #dc6169;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.border-blue {
  border: 3px double #56a2ea;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}`;
export function Border() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{borderStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{borderCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="border-green">
                This div has a solid 1px green border
              </div>
              <div className="border-red">
                This div has a dotted 2px red border
              </div>
              <div className="border-blue">
                This div has a double 3px blue border
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let borderradiusStr = `<div className="border-radius-green"></div>
<div className="border-radius-red"></div>
<div className="border-radius-blue"></div>`;
let borderradiusCSS = `.border-radius-green {
  border-radius: 5px;
  background: #8cbd71;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.border-radius-red {
  border-radius: 20px;
  background: #dc6169;
  height: 150px;
  width: 150px;
  padding: 5px;
  display: inline-block;
}

.border-radius-blue {
  border-radius: 75px;
  background: #56a2ea;
  height: 150px;
  width: 150px;
  display: inline-block;
}`;
export function BorderRadius() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{borderradiusStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{borderradiusCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="border-radius-green"></div>
              <div className="border-radius-red"></div>
              <div className="border-radius-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let fontStr = `<div className="font-green">This div uses Helvetica Neue at 16px</div>
<div className="font-red">
  This div uses Times New Roman Italic at 20px
</div>
<div className="font-blue">This div uses Courier New Bold at 24px</div>`;
let fontCSS = `.font-green {
  color: #8cbd71;
  font: 16px "Helvetica Neue";
}

.font-red {
  color: #dc6169;
  font: italic 20px "Times New Roman";
}

.font-blue {
  color: #56a2ea;
  font: bold 24px "Courier New";
}`;
export function Font() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this CSS property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{fontStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{fontCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div className="font-green">
                This div uses Helvetica Neue at 16px
              </div>
              <div className="font-red">
                This div uses Times New Roman Italic at 20px
              </div>
              <div className="font-blue">
                This div uses Courier New Bold at 24px
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
