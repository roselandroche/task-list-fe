import React from 'react';
import '../css/App.css';

import Header from './Header';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <TaskForm />
    </div>
  );
}

export default App;
