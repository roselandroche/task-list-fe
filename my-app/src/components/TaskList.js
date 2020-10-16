import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
    return (
        <div>
            <ul>
                {tasks.map(task => <Task key={task.id} task={task} setTasks={setTasks} /> )}
            </ul>
            <button>
                <Link to='/addTask' >
                    Add Task
                </Link>
            </button>
        </div>
    )
}

export default TaskList
