import React from "react";


function Task({category, text }) {
  
  const handleDelete = (e) => {
    e.target.parentNode.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
