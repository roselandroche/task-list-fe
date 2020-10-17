import React from 'react'

function Task({ task, toggle }) {
    
    return (
        <li onClick={() => toggle(task.id)}>
            {task.completed ? <del>{`${task.taskName}`}</del> : `${task.taskName}`}
        </li>
    )
}

export default Task
