import React from "react";
import "./Examples.css";

let htmlStr = `<!DOCTYPE html>
<html>
  <head>
    <title>Website Title</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    Anything placed inside the body tags will be displayed on your webpage
  </body>
</html>`;

export default function Structure() {
  return (
    <>
      <div className="flex-split">
        <div className="html-preview">
          <div className="html-file">index.html</div>:
          <div className="html-text">{htmlStr}</div>
        </div>
        <div className="html-render">
          <div className="html-file">html body</div>:
          <div className="html-body">
            Anything placed inside the body tags will be displayed on your
            webpage
          </div>
        </div>
      </div>
    </>
  );
}
