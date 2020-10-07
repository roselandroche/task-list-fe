import React, { useState } from 'react'

function TaskForm() {
    const [form, setForm] = useState({
        id: null,
        taskName: '',
        completed: false
    })
    function handleChange() {

    }
    return (
        <div>
            <h1>
                Task Form
            </h1>
            <form>
                <label>
                    Task
                </label>
                <input name='task' value={form.task} onChange={handleChange} />
            </form>
        </div>
    )
}

export default TaskForm
