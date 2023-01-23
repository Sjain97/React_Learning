// const heading = React.createElement(tag to create, props/html_attibutes object, content/text inside tag)

const heading1 = React.createElement(
    "h1", 
    {
        id: "heading1"
    }, 
    "Learning React!"
);

const heading2 = React.createElement("h1", {id: "heading2"}, "Sub-Heading!");

// last parameter is the children (as an array) where heading1 and heading2 are React elements (which is basically an object)
const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

// we usually have only one root to inject React into
const root = ReactDOM.createRoot(document.getElementById("root"));

// render will modify (overwrite) the DOM
// we render only once
root.render(container);
