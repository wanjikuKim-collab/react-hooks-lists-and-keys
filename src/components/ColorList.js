import React from "react";

function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}

//ColorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const iterateThroughColors = colors.map(color=> <ColorItem key={color} color={color}/>)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {iterateThroughColors}
      </ol>
    </div>
  );
}

export default ColorList;
