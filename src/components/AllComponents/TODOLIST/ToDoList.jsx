import React, { useState } from "react";
import style from "./ToDoList.module.css";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => index !== i);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={style.toDoList}>
            <h1>To-Do List</h1>
            <div className="flex gap-5 items-center mb-2">
                <input
                    className="border border-gray-600 p-2"
                    type="text"
                    placeholder="Enter a task ..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className={style.addButton} onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className="inline">
                            <span className="text">{task}</span>
                        </div>
                        <div className="flex gap-5">
                            <button className={style.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
                            <button className={style.moveButton} onClick={() => moveTaskUp(index)}>☝️</button>
                            <button className={style.moveButton} onClick={() => moveTaskDown(index)}>👇</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;