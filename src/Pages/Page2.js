import React from "react";
import "./Pages.css";

export default function Page2({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          Now that we have installed all of the dependencies that we need, we
          will move onto getting your code connected with GitHub and opened on
          your machine.
        </p>
        <ol className="parent-list">
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              First, open GitHub desktop and sign into your GitHub account. For
              help doing this step, follow the{" "}
              <a
                className="page-link"
                href="https://docs.github.com/en/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop"
              >
                GitHub Desktop documentation here
              </a>
              .
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Next, create your project repository through the GitHub Desktop
              app by clicking:{" "}
              <p className="highlight-text">File > New Repository</p>. Name the
              repository whatever you would like and select or create a folder
              to contain your code through the local path folder option. Note
              that this is difficult to change later, so make sure it is in a
              place that you’re happy with. Leave the rest of the settings to
              their default values and click{" "}
              <p className="highlight-text">Create Repository</p>.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Now locate the skeleton.zip that we downloaded earlier and extract
              its contents to the folder that you just specified as your GitHub
              repository.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              To push your code to GitHub, open up GitHub Desktop again and
              select <p className="highlight-text">Publish Repository</p> along
              the application header. This will add your code to your online
              GitHub repository.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Now your repository is linked to your GitHub account and your code
              can easily be transferred.
            </p>
          </li>
          <li className="page-list-subheader-number">
            <p className="page-list-content-text">
              Now open your index.html file in your text editor and your web
              browser by right-clicking on the file and selecting each
              application respectively through the{" "}
              <p className="highlight-text">Open With</p> option. At this point,
              your project is all set up, and you’re ready to begin learning to
              code!
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
