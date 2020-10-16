import React, { useState } from 'react'

function TaskForm({ setTasks, tasks, history }) {
    const [form, setForm] = useState({
        id: Date.now(),
        taskName: '',
        completed: false
    })
    function handleChange(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setForm({...form, id: Date.now()})
        setTasks([...tasks, form])
        history.push('/')
    }
    function handleCancel() {
        history.push('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add a Task
                </label>
                <input name='taskName' value={form.task} onChange={handleChange} />
                <button type='submit'>
                    Submit
                </button>
                <button onClick={ handleCancel }>
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default TaskForm
