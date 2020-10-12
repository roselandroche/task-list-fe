import React, { useState, useEffect } from 'react';
import '../css/App.css';

import Header from './Header';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks === []) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
      }
    } else {
      if (localStorage.getItem('tasks')) {
        localStorage.removeItem('tasks')
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks])
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <TaskForm setTasks={ setTasks } tasks = { tasks } />
    </div>
  );
}

export default App;
