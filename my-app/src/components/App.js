import React, { useState } from 'react';
import '../css/App.css';

import Header from './Header';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)
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
