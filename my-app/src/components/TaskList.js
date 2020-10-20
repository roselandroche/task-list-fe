import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';
import '../css/TaskList.css';

function TaskList({ tasks, toggle, deleteCompleted }) {
    return (
        <div className='main_list'>
            <ul>
                {tasks.map(task => <Task key={task.id} task={task} toggle={toggle} /> )}
            </ul>
            <button>
                <Link to='/addtask' >
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
