import React from "react";


function Box({ w, h, color, onDelete }) {
  const style = {
    border: `1px solid ${color}`,
    width: `${w}rem`,
    height: `${h}rem`,
    backgroundColor: color
  };

  return (
    <div className="box" style={style}>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Box;