import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { pages } from "./Pages";
import history from "./History";

import Navigation from "./Navigation";

export default function Content() {
  let routerHistory = useHistory();
  const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(parseInt(id));

  function prev() {
    let nextPage = pageNumber - 1;
    history.push("/" + nextPage);
    setPageNumber(parseInt(nextPage));
  }

  function next() {
    let nextPage = pageNumber + 1;
    history.push("/" + nextPage);
    setPageNumber(parseInt(nextPage));
  }

  function change(event) {
    let newPage = parseInt(event.value);

    if (newPage === 0) {
      routerHistory.push("/");
    } else {
      history.push("/" + newPage);
      setPageNumber(newPage);
    }
  }

  function home() {
    routerHistory.push("/");
  }

  return (
    <>
      <>{pages[pageNumber - 1]}</>
      <Navigation
        pageNumber={pageNumber}
        prev={prev}
        next={next}
        change={change}
        home={home}
      />
    </>
  );
}
