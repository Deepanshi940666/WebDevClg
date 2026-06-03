import React, { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'
const To_Do = () => {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState(() => {
        let data = localStorage.getItem("key")
        if (data) {
            return JSON.parse(data)
        }
        return []
    });
    console.log(task);

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify(todo))
    }, [todo])

    function Task() {
        setTodo([...todo, task])
        // console.log("heyyyyyyyyy");
        setTask("")

    }

    function d(key) {
        let newTodo = todo.filter((a, b) => {
            return b != key
        })
        setTodo(newTodo);
    }

    return (
        <div id='List'>
            <h1>Todo List</h1>
            <div id='Card'>
                <input placeholder='Enter the Task' value={task} onChange={(e) => {
                    setTask(e.target.value)

                }} />
                <button id='Add' onClick={Task}>Add</button>
            </div>
            <div className="todo-list">
                {todo.map((to_do, index) => (
                    <div className="todo-item">
                        <span>{to_do}</span>

                        <div className="actions">
                            <button >
                                Edit
                            </button>

                            <button onClick={() => { d(index) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default To_Do