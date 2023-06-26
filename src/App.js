import React, { useState } from 'react';

import TaskList from './components/Tasks/TaskList/TaskList';
import TaskInput from './components/Tasks/TaskInput/TaskInput';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'Створення курсу – 1 година', id: 't1' },
    { text: 'Розминка 15 хв', id: 't2' },
    { text: 'Створення курсу – 2 години', id: 't3' },
  ]);

  const addTaskHandler = inputText => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: inputText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>Завдань не знайдено! Додати?</p>
  );

  if (tasks.length > 0) {
    content = <TaskList items={tasks} onDeleteTask={deleteTaskHandler} />;
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">{content}</section>
    </div>
  );
};

export default App;
