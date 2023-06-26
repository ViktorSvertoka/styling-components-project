import React from "react";

import "./Task.css";

const Task = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Task;
