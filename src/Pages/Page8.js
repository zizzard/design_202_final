import React from "react";
import "./Pages.css";
import HTMLHighlightText from "./HTMLHighlightText";
import Table from "./Examples/Table";

export default function Page8({ pageName }) {
  return (
    <div className="page-container">
      <h1>{pageName}</h1>
      <div className="page-copy">
        <p className="page-content-text">
          Now that we have a pretty basic understanding of HTML and how to style
          it, let’s jump into an example of an HTML element that uses both. An
          HTML table is defined inside the{" "}
          <p className="highlight-text">table</p> tag and is structured by
          creating rows and adding individual cells. After that, the elements
          are then styled by modifying the style of the html row and cell
          elements.
        </p>
        <ol className="parent-list">
          <li className="page-list-header-number">
            <p className="page-list-header">
              <HTMLHighlightText text="<table>" />:{" "}
            </p>
            <p className="page-list-content-text child">
              The <p className="highlight-text">table</p> tag defines an HTML
              table that contains a set of <HTMLHighlightText text="<tr>" />{" "}
              tags corresponding to each row in the table.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <HTMLHighlightText text="<tr>" /> tag:{" "}
            </p>
            <p className="page-list-content-text child">
              The <HTMLHighlightText text="<tr>" /> tag defines a single row in
              the table. Each <HTMLHighlightText text="<tr>" /> tag contains
              either a set of <HTMLHighlightText text="<td>" /> elements or if
              the row is the table header, a set of{" "}
              <HTMLHighlightText text="<th>" /> elements (both called
              table-cells). The number of table cells in a{" "}
              <HTMLHighlightText text="<tr>" /> element is the number of columns
              that a row will have.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <HTMLHighlightText text="<td>" />:{" "}
            </p>
            <p className="page-list-content-text child">
              The <HTMLHighlightText text="<td>" /> tag defines a single table
              cell element. A table cell functions similar to a{" "}
              <HTMLHighlightText text="<div>" /> element where it can contain
              any other HTML element.
            </p>
          </li>
          <li className="page-list-header-number">
            <p className="page-list-header">
              <HTMLHighlightText text="<td>" />:{" "}
            </p>
            <p className="page-list-content-text child">
              The <HTMLHighlightText text="<th>" /> tag is just like the{" "}
              <HTMLHighlightText text="<td>" /> tag except they render text in
              bold by default.
            </p>
          </li>
        </ol>
        <p className="page-example-text">
          <p className="bold">
            Let us look at an example HTML table and how we can style it using
            CSS styles:
          </p>
          <Table />
        </p>
      </div>
    </div>
  );
}
