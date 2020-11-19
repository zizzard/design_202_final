import React from "react";
import "./Pages.css";

export default function Page10({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          Now that we have learned the basics of web development, let’s finish
          getting your site online! You’re going to have to fill out the content
          of your website yourself, but the tutorial we walked through earlier
          should give you a good idea of how to add the basics to your site.
          However, since we did a lot of the leg work to get your website hosted
          earlier, this actually is one of the easiest steps.
        </p>
        <ol className="parent-list">
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Open GitHub desktop back up so we can publish our latest changes.
              Start by clicking <p className="highlight-text">Commit to main</p>{" "}
              in the lower left-hand corner. This prepares your changes to be
              uploaded to GitHub.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Next, click <p className="highlight-text">Push origin</p> along
              the application header to add your code to your online GitHub
              repository.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Navigate to your GitHub repository by clicking{" "}
              <p className="highlight-text">Show on GitHub</p> on the GitHub
              Desktop main page. From there, connect on the Settings option
              underneath your repository name.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Scroll down to the <p className="highlight-text">GitHub Pages</p>{" "}
              section, change the <p className="highlight-text">Source</p>{" "}
              option to <p className="highlight-text">main</p>, and click{" "}
              <p className="highlight-text">Save</p>.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              GitHub should now display an URL inside the GitHub Pages section
              where your website is currently live. As long as the repository is
              public, you will be able to share your website through this link.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              If you want to use a custom domain follow{" "}
              <a
                className="page-link"
                href="https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site"
              >
                this guide here
              </a>
              .
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
