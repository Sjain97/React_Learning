import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello React</h1>;
const heading2 = <h2>Hello Part 2</h2>;

const container = (
  <>
    <Title />
    {heading2}
    <h2>Understanding JSX</h2>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
