import React, { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'
const To_Do = () => {
    const [task, setTask] = useState("")
    const [index,setIndex]=useState(null)
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

    function edit(index){
        setIndex(index);
        setTask(todo[index])
    }

    function HandleORUpdate(){
        if(index!=null){
            let UpdateData=[...todo]
            UpdateData[index]=task
            setTodo(UpdateData)
        }
        else{
            setTodo([...todo,task])
            setTask(" ")
        }
    }

    return (
        <div id='List'>
            <h1>Todo List</h1>
            <div id='Card'>
                <input placeholder='Enter the Task' value={task} onChange={(e) => {
                    setTask(e.target.value)

                }} />
                <button id='Add' onClick={HandleORUpdate}>
                    {index!=null?"update":"add"}
                </button>
            </div>
            <div className="todo-list">
                {todo.map((to_do, index) => (
                    <div className="todo-item">
                        <span>{to_do}</span>

                        <div className="actions">
                            <button onClick={()=>edit(index)} >
                                edit
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