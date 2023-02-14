import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello React</h1>;

const container = (
  <div>
    <Title />
    <h2>Understanding JSX</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
