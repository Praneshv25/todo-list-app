import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
    const localStorageKey = 'taskList';

    useEffect(() => {
        const savedTasks = localStorage.getItem(localStorageKey);
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    }, [tasks]);

  return (
      <div className="App">
        <h1>My To-Do List</h1>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
  );
}

export default App;
