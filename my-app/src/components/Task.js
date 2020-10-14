import React from 'react'

function Task({ task }) {
    return (
        <div>
            <ul>{task.taskName}</ul>
        </div>
    )
}

export default Task
