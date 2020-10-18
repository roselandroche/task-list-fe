import React, { useState, useEffect } from 'react'

function TaskForm({ setTasks, tasks, history, edit, match: {params: {id}} }) {
    const [form, setForm] = useState({
        id: Date.now(),
        taskName: '',
        completed: false
    })

    useEffect(()=> {
        if(edit) {
            const editTask = tasks.filter(task => task.id.toString() === id)[0];
            setForm(editTask);
        }
    }, [])

    function handleChange(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    function updateTask() {
        const updatedTasks = tasks.map(task => {
            if(task.id.toString() === id) {
                return form;
            } else {
                return task;
            }
        })
        setTasks(updatedTasks);
    }

    function addTask() {
        setForm({...form, id: Date.now()})
        setTasks([...tasks, form])
    }

    function handleSubmit(event) {
        event.preventDefault();
        edit ? updateTask() : addTask();
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
                <input name='taskName' value={form.taskName} onChange={handleChange} />
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
