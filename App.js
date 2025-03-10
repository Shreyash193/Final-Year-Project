import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading 1"
);

const heading1=React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heading 2"
);

const container=React.createElement(
    "div",
    {
        id:"container",
        hello:"world",
    },
    [heading,heading1]

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


root.render(container);