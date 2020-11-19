import React from "react";
import "./Pages.css";
import CSSElement from "./CSSElement";

export default function Page7({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          One of the most frustrating parts of developing a website used to be
          getting the content on your page to align the way you wanted it to. In
          2017, a new display type was introduced to CSS classes called{" "}
          <p className="highlight-text">flex</p>. Formally called flex-boxes,
          this property allows you to define a container that lays out its
          internal elements according to other set properties which are to be
          described below. This CSS module is best described through examples so
          let’s just jump right into it.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">display: flex;</p>:
            </p>
            <p className="page-list-content-text child">
              <p className="highlight-text">display</p> properties describe how
              an HTML element contains its objects, the{" "}
              <p className="highlight-text">flex</p> display property defines
              the HTML object as a flex container. While defining an element as
              a flex container does not do much on its own, in combination with
              the below properties it makes creating layouts incredibly simple.{" "}
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">flex-direction</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              In a flex container, objects flow (or are rendered) along a main
              axis and a cross axis. The{" "}
              <p className="highlight-text">flex-direction</p> property defines
              the main axis for the flex container, meaning all objects will be
              rendered side by side in that direction. The types of{" "}
              <p className="highlight-text">flex-direction</p> are:
              <ul className="child-list">
                <CSSElement
                  property={"flex-direction: row"}
                  standard={true}
                  text="The objects will flow left-to-right along the horizontal axis."
                />
                <CSSElement
                  property={"flex-direction: row-reverse"}
                  standard={false}
                  text="The objects will flow right-to-left along the horizontal axis."
                />
                <CSSElement
                  property={"flex-direction: column"}
                  standard={false}
                  text="The objects will flow left-to-right along the vertical axis."
                />
                <CSSElement
                  property={"flex-direction: column-reverse"}
                  standard={false}
                  text="The objects will flow right-to-left along the vertical axis."
                />
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">flex-wrap</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              By default, if the objects within a flex container are larger than
              the container, then the objects will flow outside the container.
              By changing the <p className="highlight-text">flex-wrap</p> you’re
              enabling the container to allow objects to flow along the
              cross-axis (axis perpendicular to the main axis) once they can no
              longer fit along the main axis in their parent container.
              <ul className="child-list">
                <CSSElement
                  property={"flex-wrap: nowrap"}
                  standard={true}
                  text="By default, the flex objects will not wrap if they overflow their container."
                />
                <CSSElement
                  property={"flex-wrap: wrap"}
                  standard={false}
                  text="The flex objects will wrap to multiple lines if they overflow their container."
                />
                <CSSElement
                  property={"flex-wrap: wrap-reverse"}
                  standard={false}
                  text="The flex objects will wrap to multiple lines if they overflow their container, from bottom to top."
                />
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">justify-content</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              This property defines the alignment of the content along the main
              axis. There are a lot of properties here so we will briefly talk
              about each one and describe each option through examples:
              <ul className="child-list">
                <CSSElement
                  property={"justify-content: flex-start"}
                  standard={true}
                  text="All of the contents within the container are aligned to the start of the flex."
                />
                <CSSElement
                  property={"justify-content: flex-end"}
                  standard={false}
                  text="All of the contents within the container are aligned to the end."
                />
                <CSSElement
                  property={"justify-content: center"}
                  standard={false}
                  text="All of the contents within a container are aligned to the center."
                />
                <CSSElement
                  property={"justify-content: space-between"}
                  standard={false}
                  text="Align the first and last item to the beginning and the end edge of the container, with all other elements evenly spaced between the beginning and end elements."
                />
                <CSSElement
                  property={"justify-content: space-evenly"}
                  standard={false}
                  text="Align each item with even visual spacing between each element and the edge of the container."
                />
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">align-items</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              This property defines the alignment of the items in the container
              along the cross axis. Essentially, this property is just the{" "}
              <p className="highlight-text">justify-content</p> definition for
              the cross-axis.
              <ul className="child-list">
                <CSSElement
                  property={"align-items: stretch"}
                  standard={true}
                  text="All of the contents within the container are aligned to the start of the flex."
                />
                <CSSElement
                  property={"align-items: flex-start"}
                  standard={false}
                  text="Place the items at the start of the cross axis."
                />
                <CSSElement
                  property={"align-items: flex-end"}
                  standard={false}
                  text="Place the items at the end of the cross axis."
                />
                <CSSElement
                  property={"align-items: center"}
                  standard={false}
                  text="Place the items so that the center of their content is along the centerline of the cross axis."
                />
              </ul>
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <p className="highlight-text">align-content</p>:{" "}
            </p>
            <p className="page-list-content-text child">
              This property defines the overall alignment of a group of items
              inside the container when{" "}
              <p className="highlight-text">flex-wrap: wrap</p> or{" "}
              <p className="highlight-text">flex-wrap: wrap-reverse</p> is set
              and there is additional space along the cross axis.
              <ul className="child-list">
                <CSSElement
                  property={"align-content: normal"}
                  standard={true}
                  text="The flex content is placed in at its default position."
                />
                <CSSElement
                  property={"align-content: flex-start"}
                  standard={false}
                  text="The flex content is packed to the start of the container."
                />
                <CSSElement
                  property={"align-content: flex-end"}
                  standard={false}
                  text="The flex content is packed to the end of the container."
                />
                <CSSElement
                  property={"align-content: center"}
                  standard={false}
                  text="The flex content is centered within the container."
                />
                <CSSElement
                  property={"align-content: space-between"}
                  standard={false}
                  text="Align the first and last rows of items to the beginning and the end edge of the container, with all other rows evenly spaced between the beginning and end rows."
                />
                <CSSElement
                  property={"align-content: space-evenly"}
                  standard={false}
                  text="Align each row with even visual spacing between each row and the edge of the container."
                />
                <CSSElement
                  property={"align-content: stretch"}
                  standard={false}
                  text="Stretch each row to take up the extra space in the container."
                />
              </ul>
            </p>
          </li>
        </ol>
        <p className="page-body-text">
          There is a lot of information here so make sure you take your time to
          digest it all. Flex boxes might take a bit of time to fully grasp, but
          they allow you to build beautifully designed websites incredibly
          easily.
        </p>
      </div>
    </div>
  );
}
