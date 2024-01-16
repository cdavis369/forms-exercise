import React from "react";


function Box({ w, h, color, onDelete , index}) {
  const style = {
    border: `1px solid ${color}`,
    width: `${w}rem`,
    height: `${h}rem`,
    backgroundColor: color
  };

  return (
    <div className="box" style={style} data-testid={`box-${index}`}>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Box;