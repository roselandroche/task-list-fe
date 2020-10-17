import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

function TaskList({ tasks, toggle, deleteCompleted }) {
    return (
        <div>
            <ul>
                {tasks.map(task => <Task key={task.id} task={task} toggle={toggle} /> )}
            </ul>
            <button>
                <Link to='/addTask' >
                    Add Task
                </Link>
            </button>
            <button onClick={ deleteCompleted }>
                Delete Task
            </button>
        </div>
    )
}

export default TaskList
