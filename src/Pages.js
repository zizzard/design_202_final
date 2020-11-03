import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Page10 from "./Pages/Page10";
import Page11 from "./Pages/Page11";
import Page12 from "./Pages/Page12";
import Page13 from "./Pages/Page13";
import Page14 from "./Pages/Page14";
import Page15 from "./Pages/Page15";
import PageHeader from "./Pages/PageHeader";

const pageNames = [
  "Environment Setup",
  "Project Structure",
  "HTML Structure Tags",
  "HTML Content Tags",
  "Introduction to CSS",
  "Important CSS Styles",
  "HTML Table",
  "Flex Boxes",
  "Introduction to JavaScript",
  "HTML Forms",
  "HTML Buttons",
  "Linking Pages",
  "Hosting",
  "Tips & Other Resources",
  "Closing",
];

const options = [
  { label: "Home", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
];

let pages = [
  <>
    <PageHeader pageName={pageNames[0]} />
    <Page1 />
  </>,
  <>
    <PageHeader pageName={pageNames[1]} />
    <Page2 />
  </>,
  <>
    <PageHeader pageName={pageNames[2]} />
    <Page3 />
  </>,
  <>
    <PageHeader pageName={pageNames[3]} />
    <Page4 />
  </>,
  <>
    <PageHeader pageName={pageNames[4]} />
    <Page5 />
  </>,
  <>
    <PageHeader pageName={pageNames[5]} />
    <Page6 />
  </>,
  <>
    <PageHeader pageName={pageNames[6]} />
    <Page7 />
  </>,
  <>
    <PageHeader pageName={pageNames[7]} />
    <Page8 />
  </>,
  <>
    <PageHeader pageName={pageNames[8]} />
    <Page9 />
  </>,
  <>
    <PageHeader pageName={pageNames[9]} />
    <Page10 />
  </>,
  <>
    <PageHeader pageName={pageNames[10]} />
    <Page11 />
  </>,
  <>
    <PageHeader pageName={pageNames[11]} />
    <Page12 />
  </>,
  <>
    <PageHeader pageName={pageNames[12]} />
    <Page13 />
  </>,
  <>
    <PageHeader pageName={pageNames[13]} />
    <Page14 />
  </>,
  <>
    <PageHeader pageName={pageNames[14]} />
    <Page15 />
  </>,
];

export { pages, options, pageNames };
