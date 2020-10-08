import React, { useState } from 'react'

function TaskForm() {
    const [form, setForm] = useState({
        id: null,
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
        console.log(form);
    }
    return (
        <div>
            <h1>
                Task Form
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Task
                </label>
                <input name='task' value={form.task} onChange={handleChange} />
            </form>
        </div>
    )
}

export default TaskForm
