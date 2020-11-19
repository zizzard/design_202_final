import React from "react";
import "./Examples.css";

let htmlStr = `<div>
  This text sits inside the body tag!
  <div>This text is inside a div!</div>
  <p>This text sits inside a paragraph tag!</p>
  <h1>This is an h1 tag</h1>
  <h2>And this is an h2 tag</h2>
  <h3>Now this is an h3 tag</h3>
  <h4>How about an h4 tag</h4>
  <h5>What about an h5 tag</h5>
  <h6>Finally, this is an h6 tag</h6>
  <div><img src="https://placekitten.com/360/360" alt="cats!" /></div>
  <div><img src="https://.com/" alt="cats that can't be found!" /></div>
  <a href="https://google.com">Google</a>
  <p>This is more text in a paragraph tag. Below is an hr!</p>
  <hr />
  <ol>
    <li>The first item in an ordered list looks like this</li>
    <li>And this is the second!</li>
    <ol>
      <li>This is what a sub list looks like</li>
    </ol>
  </ol>
  <ul>
    <li>The first item in an unordered list looks like this</li>
    <li>And this is the second!</li>
    <ul>
      <li>This is what a sub list looks like</li>
    </ul>
  </ul>
</div>`;

export default function Body() {
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
            <div>
              This text sits inside the body tag!
              <div>This text is inside a div!</div>
              <p>This text sits inside a paragraph tag!</p>
              <h1>This is an h1 tag</h1>
              <h2>And this is an h2 tag</h2>
              <h3>Now this is an h3 tag</h3>
              <h4>How about an h4 tag</h4>
              <h5>What about an h5 tag</h5>
              <h6>Finally, this is an h6 tag</h6>
              <div>
                <img src="https://placekitten.com/360/360" alt="cats!" />
              </div>
              <div>
                <img src="https://.com/" alt="cats that can't be found!" />
              </div>
              <a href="https://google.com">Google</a>
              <p>This is more text in a paragraph tag. Below is an hr!</p>
              <hr />
              <ol>
                <li>The first item in an ordered list looks like this</li>
                <li>And this is the second!</li>
                <ol>
                  <li>This is what a sub list looks like</li>
                </ol>
              </ol>
              <ul>
                <li>The first item in an unordered list looks like this</li>
                <li>And this is the second!</li>
                <ul>
                  <li>This is what a sub list looks like</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
