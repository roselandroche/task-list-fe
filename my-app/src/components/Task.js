import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Task.css';

function Task({ task, toggle }) {
    
    return (
        <div className='ind_task'>
            <li onClick={() => toggle(task.id)}>
                {task.completed ? <del>{`${task.taskName}`}</del> : `${task.taskName}`}
            </li>
            <button className='edit_btn'>
                <Link to={`/edittask/${task.id}`}>
                    Edit
                </Link>
            </button>
        </div >
    )
}

export default Task
