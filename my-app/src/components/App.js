import React, { useState, useEffect } from 'react';
import '../css/App.css';

import Header from './Header';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
      }
    } 
    // else {
      // if (localStorage.getItem('tasks')) {
      //   localStorage.removeItem('tasks')
      // }
    //   localStorage.setItem('tasks', JSON.stringify(tasks));
    // }
  }, [])
  useEffect(() => {
    if(localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks.length])
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
