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
  }, [tasks.length])
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route path='/addTask' render={ props => <TaskForm {...props} setTasks={ setTasks } tasks={ tasks } /> } />
        <Route exact path='/' render={ props => <TaskList {...props} tasks={tasks} /> } />
      </Switch>
      {/* <TaskForm setTasks={ setTasks } tasks ={ tasks } />
      <TaskList tasks={ tasks }/> */}
    </div>
  );
}

export default App;
