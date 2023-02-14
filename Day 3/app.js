import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello React</h1>;

const container = (
  <div>
    <Title />
    <h2>Understanding JSX</h2>
  </div>
);

// we usually have only one root to inject React into
const root = ReactDOM.createRoot(document.getElementById("root"));

// render will modify (overwrite) the DOM
// we render only once
root.render(container);
