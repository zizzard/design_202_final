import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";

export default function Page9({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          While it is great to have a single page website, often we want to be
          able to link together multiple pages together to create a more robust
          website. The good news is that this is super easy to do. In the
          skeleton code, we provided a file called{" "}
          <p className="highlight-text">index.html</p> which was intended to be
          the home page of your website.
        </p>
        <p className="page-body-text">
          Let’s assume you want to create another page called{" "}
          <p className="highlight-text">about</p>. First,{" "}
          <p className="highlight-text">about.html</p> in the same location as
          the <p className="highlight-text">index.html</p> file. Earlier we
          learned about the anchor tag which can be used to link together pages.
          If you want to include a link from the home page to the about page,
          you can include the following anchor element in your home page:{" "}
          <HTMLHighlightText text="<a href=“about.html”>About</a>" />. You can
          do the same thing if you want to link back to the home page from the
          about page. The only difference is you need to change the{" "}
          <p className="highlight-text">href</p> attribute back to{" "}
          <p className="highlight-text">index.html</p> to link to the home page.
        </p>
        <p className="page-body-text">
          If you want to store your pages in different directories, you will
          have to link them using their relative file paths. To learn more about{" "}
          <a
            className="page-link"
            href="https://www.w3schools.com/html/html_filepaths.asp"
          >
            relative file paths click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
