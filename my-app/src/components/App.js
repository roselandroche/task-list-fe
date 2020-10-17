import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
      }
    }
  }, [])

  useEffect(() => {
    if(localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  function toggleComplete(id) {
    const updatedTask = tasks.map(task => {
      if(task.id === id) {
        return ({ ...task, completed: !task.completed })
      } else {
        return task
      }
    })
    setTasks(updatedTask);
  }

  function deleteCompleted() {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route path='/addTask' render={ props => <TaskForm {...props} setTasks={ setTasks } tasks={ tasks } /> } />
        <Route exact path='/' render={ props => <TaskList {...props} toggle={ toggleComplete } tasks={tasks} deleteCompleted={ deleteCompleted } /> } />
      </Switch>
    </div>
  );
}

export default App;
