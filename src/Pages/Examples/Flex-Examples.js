import React from "react";
import "./Examples.css";
import "./Flex-Examples.css";

let flexdirectionStr = `<div id="flexdirection">
  <div class="flexdirection-row">
    <div class="flexdirection-obj">1: Row</div>
    <div class="flexdirection-obj">2: Row</div>
    <div class="flexdirection-obj">3: Row</div>
    <div class="flexdirection-obj">4: Row</div>
    <div class="flexdirection-obj">5: Row</div>
  </div>
  <div class="flexdirection-row-reverse">
    <div class="flexdirection-obj">1: Row Reverse</div>
    <div class="flexdirection-obj">2: Row Reverse</div>
    <div class="flexdirection-obj">3: Row Reverse</div>
    <div class="flexdirection-obj">4: Row Reverse</div>
    <div class="flexdirection-obj">5: Row Reverse</div>
  </div>
  <div class="flex-vert-space">
    <div class="flexdirection-column">
      <div class="flexdirection-obj">1: Column</div>
      <div class="flexdirection-obj">2: Column</div>
      <div class="flexdirection-obj">3: Column</div>
      <div class="flexdirection-obj">4: Column</div>
      <div class="flexdirection-obj">5: Column</div>
    </div>
    <div class="flexdirection-column-reverse">
      <div class="flexdirection-obj">1: Column Reverse</div>
      <div class="flexdirection-obj">2: Column Reverse</div>
      <div class="flexdirection-obj">3: Column Reverse</div>
      <div class="flexdirection-obj">4: Column Reverse</div>
      <div class="flexdirection-obj">5: Column Reverse</div>
    </div>
  </div>
</div>`;
let flexdirectionCSS = `.flexdirection-obj {
  height: 95px;
  width: 100px;
  margin: 5px;
  padding-top: 5px;
  background: #8cbd71;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

.flexdirection-row {
  display: flex;
  flex-direction: row;

  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.flexdirection-row-reverse {
  display: flex;
  flex-direction: row-reverse;

  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.flexdirection-column {
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.flexdirection-column-reverse {
  display: flex;
  flex-direction: column-reverse;

  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.flex-vert-space {
  display: flex;
  justify-content: space-evenly;
}`;
export function FlexDirection() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this flex property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{flexdirectionStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{flexdirectionCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div id="flexdirection">
                <div class="flexdirection-row">
                  <div class="flexdirection-obj">1: Row</div>
                  <div class="flexdirection-obj">2: Row</div>
                  <div class="flexdirection-obj">3: Row</div>
                  <div class="flexdirection-obj">4: Row</div>
                  <div class="flexdirection-obj">5: Row</div>
                </div>
                <div class="flexdirection-row-reverse">
                  <div class="flexdirection-obj">1: Row Reverse</div>
                  <div class="flexdirection-obj">2: Row Reverse</div>
                  <div class="flexdirection-obj">3: Row Reverse</div>
                  <div class="flexdirection-obj">4: Row Reverse</div>
                  <div class="flexdirection-obj">5: Row Reverse</div>
                </div>
                <div class="flex-vert-space">
                  <div class="flexdirection-column">
                    <div class="flexdirection-obj">1: Column</div>
                    <div class="flexdirection-obj">2: Column</div>
                    <div class="flexdirection-obj">3: Column</div>
                    <div class="flexdirection-obj">4: Column</div>
                    <div class="flexdirection-obj">5: Column</div>
                  </div>
                  <div class="flexdirection-column-reverse">
                    <div class="flexdirection-obj">1: Column Reverse</div>
                    <div class="flexdirection-obj">2: Column Reverse</div>
                    <div class="flexdirection-obj">3: Column Reverse</div>
                    <div class="flexdirection-obj">4: Column Reverse</div>
                    <div class="flexdirection-obj">5: Column Reverse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let flexwrapStr = `<div id="flexwrap">
  <div class="flexwrap-nowrap">
    <div class="flexwrap-obj">1: nowrap</div>
    <div class="flexwrap-obj">2: nowrap</div>
    <div class="flexwrap-obj">3: nowrap</div>
    <div class="flexwrap-obj">4: nowrap</div>
    <div class="flexwrap-obj">5: nowrap</div>
  </div>
  <div class="flexwrap-wrap">
    <div class="flexwrap-obj">1: wrap</div>
    <div class="flexwrap-obj">2: wrap</div>
    <div class="flexwrap-obj">3: wrap</div>
    <div class="flexwrap-obj">4: wrap</div>
    <div class="flexwrap-obj">5: wrap</div>
  </div>
  <div class="flexwrap-wrap-reverse">
    <div class="flexwrap-obj">1: wrap reverse</div>
    <div class="flexwrap-obj">2: wrap reverse</div>
    <div class="flexwrap-obj">3: wrap reverse</div>
    <div class="flexwrap-obj">4: wrap reverse</div>
    <div class="flexwrap-obj">5: wrap reverse</div>
  </div>
</div>`;
let flexwrapCSS = `.flexwrap-obj {
  height: 95px;
  width: 300px;
  margin: 5px;
  padding-top: 5px;
  background: #dc6169;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

.flexwrap-nowrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
}

.flexwrap-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
}

.flexwrap-wrap-reverse {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;

  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
}`;
export function FlexWrap() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this flex property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{flexwrapStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{flexwrapCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div id="flexwrap">
                <div class="flexwrap-nowrap">
                  <div class="flexwrap-obj">1: nowrap</div>
                  <div class="flexwrap-obj">2: nowrap</div>
                  <div class="flexwrap-obj">3: nowrap</div>
                  <div class="flexwrap-obj">4: nowrap</div>
                  <div class="flexwrap-obj">5: nowrap</div>
                </div>
                <div class="flexwrap-wrap">
                  <div class="flexwrap-obj">1: wrap</div>
                  <div class="flexwrap-obj">2: wrap</div>
                  <div class="flexwrap-obj">3: wrap</div>
                  <div class="flexwrap-obj">4: wrap</div>
                  <div class="flexwrap-obj">5: wrap</div>
                </div>
                <div class="flexwrap-wrap-reverse">
                  <div class="flexwrap-obj">1: wrap reverse</div>
                  <div class="flexwrap-obj">2: wrap reverse</div>
                  <div class="flexwrap-obj">3: wrap reverse</div>
                  <div class="flexwrap-obj">4: wrap reverse</div>
                  <div class="flexwrap-obj">5: wrap reverse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let justifycontentStr = `<div id="justifycontent">
  <div class="justifycontent-flex-start">
    <div class="justifycontent-obj">1: flex start</div>
    <div class="justifycontent-obj">2: flex start</div>
    <div class="justifycontent-obj">3: flex start</div>
    <div class="justifycontent-obj">4: flex start</div>
    <div class="justifycontent-obj">5: flex start</div>
  </div>
  <div class="justifycontent-flex-end">
    <div class="justifycontent-obj">1: flex end</div>
    <div class="justifycontent-obj">2: flex end</div>
    <div class="justifycontent-obj">3: flex end</div>
    <div class="justifycontent-obj">4: flex end</div>
    <div class="justifycontent-obj">5: flex end</div>
  </div>
  <div class="justifycontent-center">
    <div class="justifycontent-obj">1: center</div>
    <div class="justifycontent-obj">2: center</div>
    <div class="justifycontent-obj">3: center</div>
    <div class="justifycontent-obj">4: center</div>
    <div class="justifycontent-obj">5: center</div>
  </div>
  <div class="justifycontent-space-between">
    <div class="justifycontent-obj">1: space between</div>
    <div class="justifycontent-obj">2: space between</div>
    <div class="justifycontent-obj">3: space between</div>
    <div class="justifycontent-obj">4: space between</div>
    <div class="justifycontent-obj">5: space between</div>
  </div>
  <div class="justifycontent-space-evenly">
    <div class="justifycontent-obj">1: space evenly</div>
    <div class="justifycontent-obj">2: space evenly</div>
    <div class="justifycontent-obj">3: space evenly</div>
    <div class="justifycontent-obj">4: space evenly</div>
    <div class="justifycontent-obj">5: space evenly</div>
  </div>
</div>`;
let justifycontentCSS = `.justifycontent-obj {
  height: 95px;
  width: 100px;
  margin: 5px;
  padding-top: 5px;
  background: #56a2ea;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

.justifycontent-flex-start {
  display: flex;
  justify-content: flex-start;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #56a2ea;
  margin-bottom: 10px;
}

.justifycontent-flex-end {
  display: flex;
  justify-content: flex-end;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #56a2ea;
  margin-bottom: 10px;
}

.justifycontent-center {
  display: flex;
  justify-content: center;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #56a2ea;
  margin-bottom: 10px;
}

.justifycontent-space-between {
  display: flex;
  justify-content: space-between;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #56a2ea;
  margin-bottom: 10px;
}

.justifycontent-space-evenly {
  display: flex;
  justify-content: space-evenly;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #56a2ea;
  margin-bottom: 10px;
}`;
export function JustifyContent() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this flex property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{justifycontentStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{justifycontentCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div id="justifycontent">
                <div class="justifycontent-flex-start">
                  <div class="justifycontent-obj">1: flex start</div>
                  <div class="justifycontent-obj">2: flex start</div>
                  <div class="justifycontent-obj">3: flex start</div>
                  <div class="justifycontent-obj">4: flex start</div>
                  <div class="justifycontent-obj">5: flex start</div>
                </div>
                <div class="justifycontent-flex-end">
                  <div class="justifycontent-obj">1: flex end</div>
                  <div class="justifycontent-obj">2: flex end</div>
                  <div class="justifycontent-obj">3: flex end</div>
                  <div class="justifycontent-obj">4: flex end</div>
                  <div class="justifycontent-obj">5: flex end</div>
                </div>
                <div class="justifycontent-center">
                  <div class="justifycontent-obj">1: center</div>
                  <div class="justifycontent-obj">2: center</div>
                  <div class="justifycontent-obj">3: center</div>
                  <div class="justifycontent-obj">4: center</div>
                  <div class="justifycontent-obj">5: center</div>
                </div>
                <div class="justifycontent-space-between">
                  <div class="justifycontent-obj">1: space between</div>
                  <div class="justifycontent-obj">2: space between</div>
                  <div class="justifycontent-obj">3: space between</div>
                  <div class="justifycontent-obj">4: space between</div>
                  <div class="justifycontent-obj">5: space between</div>
                </div>
                <div class="justifycontent-space-evenly">
                  <div class="justifycontent-obj">1: space evenly</div>
                  <div class="justifycontent-obj">2: space evenly</div>
                  <div class="justifycontent-obj">3: space evenly</div>
                  <div class="justifycontent-obj">4: space evenly</div>
                  <div class="justifycontent-obj">5: space evenly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let alignitemsStr = `<div id="alignitems">
  <div class="alignitems-stretch">
    <div class="alignitems-obj">1: stretch</div>
    <div class="alignitems-obj">2: stretch</div>
    <div class="alignitems-obj">3: stretch</div>
    <div class="alignitems-obj">4: stretch</div>
    <div class="alignitems-obj">5: stretch</div>
  </div>
  <div class="alignitems-flex-start">
    <div class="alignitems-obj">1: flex start</div>
    <div class="alignitems-obj">2: flex start</div>
    <div class="alignitems-obj">3: flex start</div>
    <div class="alignitems-obj">4: flex start</div>
    <div class="alignitems-obj">5: flex start</div>
  </div>
  <div class="alignitems-flex-end">
    <div class="alignitems-obj">1: flex end</div>
    <div class="alignitems-obj">2: flex end</div>
    <div class="alignitems-obj">3: flex end</div>
    <div class="alignitems-obj">4: flex end</div>
    <div class="alignitems-obj">5: flex end</div>
  </div>
  <div class="alignitems-center">
    <div class="alignitems-obj">1: center</div>
    <div class="alignitems-obj">2: center</div>
    <div class="alignitems-obj">3: center</div>
    <div class="alignitems-obj">4: center</div>
    <div class="alignitems-obj">5: center</div>
  </div>
</div>`;
let alignitemsCSS = `.alignitems-obj {
  min-height: 95px;
  width: 100px;
  margin: 5px;
  padding-top: 5px;
  background: #8cbd71;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

.alignitems-stretch {
  display: flex;
  align-items: stretch;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.alignitems-flex-start {
  display: flex;
  align-items: flex-start;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.alignitems-flex-end {
  display: flex;
  align-items: flex-end;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}

.alignitems-center {
  display: flex;
  align-items: center;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #8cbd71;
  margin-bottom: 10px;
}`;
export function AlignItems() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this flex property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{alignitemsStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{alignitemsCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div id="alignitems">
                <div class="alignitems-stretch">
                  <div class="alignitems-obj">1: stretch</div>
                  <div class="alignitems-obj">2: stretch</div>
                  <div class="alignitems-obj">3: stretch</div>
                  <div class="alignitems-obj">4: stretch</div>
                  <div class="alignitems-obj">5: stretch</div>
                </div>
                <div class="alignitems-flex-start">
                  <div class="alignitems-obj">1: flex start</div>
                  <div class="alignitems-obj">2: flex start</div>
                  <div class="alignitems-obj">3: flex start</div>
                  <div class="alignitems-obj">4: flex start</div>
                  <div class="alignitems-obj">5: flex start</div>
                </div>
                <div class="alignitems-flex-end">
                  <div class="alignitems-obj">1: flex end</div>
                  <div class="alignitems-obj">2: flex end</div>
                  <div class="alignitems-obj">3: flex end</div>
                  <div class="alignitems-obj">4: flex end</div>
                  <div class="alignitems-obj">5: flex end</div>
                </div>
                <div class="alignitems-center">
                  <div class="alignitems-obj">1: center</div>
                  <div class="alignitems-obj">2: center</div>
                  <div class="alignitems-obj">3: center</div>
                  <div class="alignitems-obj">4: center</div>
                  <div class="alignitems-obj">5: center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let aligncontentStr = `<div id="aligncontent">
  <div class="aligncontent-stretch">
    <div class="aligncontent-obj">1: stretch</div>
    <div class="aligncontent-obj">2: stretch</div>
    <div class="aligncontent-obj">3: stretch</div>
    <div class="aligncontent-obj">4: stretch</div>
    <div class="aligncontent-obj">5: stretch</div>
  </div>
  <div class="aligncontent-flex-start">
    <div class="aligncontent-obj">1: flex start</div>
    <div class="aligncontent-obj">2: flex start</div>
    <div class="aligncontent-obj">3: flex start</div>
    <div class="aligncontent-obj">4: flex start</div>
    <div class="aligncontent-obj">5: flex start</div>
  </div>
  <div class="aligncontent-flex-end">
    <div class="aligncontent-obj">1: flex end</div>
    <div class="aligncontent-obj">2: flex end</div>
    <div class="aligncontent-obj">3: flex end</div>
    <div class="aligncontent-obj">4: flex end</div>
    <div class="aligncontent-obj">5: flex end</div>
  </div>
  <div class="aligncontent-center">
    <div class="aligncontent-obj">1: center</div>
    <div class="aligncontent-obj">2: center</div>
    <div class="aligncontent-obj">3: center</div>
    <div class="aligncontent-obj">4: center</div>
    <div class="aligncontent-obj">5: center</div>
  </div>
  <div class="aligncontent-space-between">
    <div class="aligncontent-obj">1: space between</div>
    <div class="aligncontent-obj">2: space between</div>
    <div class="aligncontent-obj">3: space between</div>
    <div class="aligncontent-obj">4: space between</div>
    <div class="aligncontent-obj">5: space between</div>
  </div>
  <div class="aligncontent-space-around">
    <div class="aligncontent-obj">1: space around</div>
    <div class="aligncontent-obj">2: space around</div>
    <div class="aligncontent-obj">3: space around</div>
    <div class="aligncontent-obj">4: space around</div>
    <div class="aligncontent-obj">5: space around</div>
  </div>
</div>`;
let aligncontentCSS = `.aligncontent-obj {
  min-height: 95px;
  width: 300px;
  margin: 5px;
  padding-top: 5px;
  background: #dc6169;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

.aligncontent-stretch {
  display: flex;
  align-content: stretch;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.aligncontent-flex-start {
  display: flex;
  align-content: flex-start;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.aligncontent-flex-end {
  display: flex;
  align-content: flex-end;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.aligncontent-center {
  display: flex;
  align-content: center;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.aligncontent-space-between {
  display: flex;
  align-content: space-between;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.aligncontent-space-around {
  display: flex;
  align-content: space-around;
  height: 350px;
  border-radius: 5px;
  border: 1px solid #dc6169;
  margin-bottom: 10px;
  flex-wrap: wrap;
}`;
export function AlignContent() {
  return (
    <>
      <div className="page-example-text child">
        <p className="bold">Let us look at an example of this flex property:</p>
        <div className="flex-split">
          <div className="html-preview">
            <div className="html-file">index.html</div>
            <div className="html-text">{aligncontentStr}</div>
          </div>
          <div className="css-preview">
            <div className="css-file">style.css</div>
            <div className="css-text">{aligncontentCSS}</div>
          </div>
          <div className="html-render">
            <div className="html-file">html body</div>
            <div className="html-body">
              <div id="aligncontent">
                <div class="aligncontent-stretch">
                  <div class="aligncontent-obj">1: stretch</div>
                  <div class="aligncontent-obj">2: stretch</div>
                  <div class="aligncontent-obj">3: stretch</div>
                  <div class="aligncontent-obj">4: stretch</div>
                  <div class="aligncontent-obj">5: stretch</div>
                </div>
                <div class="aligncontent-flex-start">
                  <div class="aligncontent-obj">1: flex start</div>
                  <div class="aligncontent-obj">2: flex start</div>
                  <div class="aligncontent-obj">3: flex start</div>
                  <div class="aligncontent-obj">4: flex start</div>
                  <div class="aligncontent-obj">5: flex start</div>
                </div>
                <div class="aligncontent-flex-end">
                  <div class="aligncontent-obj">1: flex end</div>
                  <div class="aligncontent-obj">2: flex end</div>
                  <div class="aligncontent-obj">3: flex end</div>
                  <div class="aligncontent-obj">4: flex end</div>
                  <div class="aligncontent-obj">5: flex end</div>
                </div>
                <div class="aligncontent-center">
                  <div class="aligncontent-obj">1: center</div>
                  <div class="aligncontent-obj">2: center</div>
                  <div class="aligncontent-obj">3: center</div>
                  <div class="aligncontent-obj">4: center</div>
                  <div class="aligncontent-obj">5: center</div>
                </div>
                <div class="aligncontent-space-between">
                  <div class="aligncontent-obj">1: space between</div>
                  <div class="aligncontent-obj">2: space between</div>
                  <div class="aligncontent-obj">3: space between</div>
                  <div class="aligncontent-obj">4: space between</div>
                  <div class="aligncontent-obj">5: space between</div>
                </div>
                <div class="aligncontent-space-around">
                  <div class="aligncontent-obj">1: space around</div>
                  <div class="aligncontent-obj">2: space around</div>
                  <div class="aligncontent-obj">3: space around</div>
                  <div class="aligncontent-obj">4: space around</div>
                  <div class="aligncontent-obj">5: space around</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
