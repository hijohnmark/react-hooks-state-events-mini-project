import React from "react";
import Task from "./Task"

function TaskList({ tasks, selectedCategory }) {
  
  const filteredTasks = selectedCategory && selectedCategory !== "All"
    ? tasks.filter(task => task.category === selectedCategory)
    : tasks;

  return (
    <div className="tasks">
      {filteredTasks.map(task => (
        <Task key={task.text} category={task.category} text={task.text}/>
        ))}
    </div>
  );
}

export default TaskList;
