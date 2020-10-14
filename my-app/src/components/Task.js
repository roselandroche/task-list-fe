import React from 'react'

function Task({ task }) {
    return (
        <div>
            <p>{task.taskName}</p>
        </div>
    )
}

export default Task
