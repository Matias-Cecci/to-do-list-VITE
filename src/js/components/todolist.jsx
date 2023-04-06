import { useState } from "react"
import "./../../styles/todolist.css"

export const TodoList = () => {
    const [taskList, setTaskList] = useState([])

    const deleteAll = () => {
        setTaskList([])
    }
    
    
    const taskDone = (index) => {
        setTaskList(taskList.map((task, i) => {
            if (i === index) {
                return { ...task, done: !task.done };
            } else {
                return task;
            }
        }));
    }

    const countUncompletedTasks = () => {
        return taskList.filter((task) => !task.done).length;
    };

    return(
        <div className=".task-list-container">
            <h1 className="title">To Do List</h1>
                <input 
                    type="text" 
                    className="task-input"
                    placeholder="Write your task here!"
                    onKeyUp={(e) => {
                    if(e.key === "Enter" && e.target.value.trim() !== ""){
                        setTaskList([...taskList, { label: e.target.value, done: false }])
                        e.target.value = "";
                    }
                }}>

                </input>
                <ul className="list-group">
                    {taskList.map((element, index) => {
                        return(
                            <li 
                            key={index}
                            className="task-container">
                                <span onClick={() => taskDone(index)} className={element.done ? "task-container-completed" : ""} >{element.label} </span>
                                <i type='button' onClick={() => {
                                    setTaskList(taskList.filter((e, i) => i != index)) //elimino la tarea seleccionada
                                }}
                                className="fa-solid fa-trash">
                                </i>
                            </li>
                        )
                    })}
                    <li className="task-list-left">   
                        {countUncompletedTasks()}{" "}
                        {countUncompletedTasks() === 1 ? "task" : "tasks"} left
                    </li>
                </ul>
                <div >
                    <button className="task-button" type="button"  onClick={deleteAll}>Delete all TASK</button>
                </div>
        </div>

    )

}