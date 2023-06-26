import React from "react";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => (
        <Task key={task.id} id={task.id} onDelete={props.onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
