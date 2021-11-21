import React, { useState } from 'react';
import './Todo.css';


const Todo = ({ text, todo, setTodos, todos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
        console.log(todo)
    }
    const completeHandler = () =>{
        setTodos(todos.map((item, index)=> {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <span className="abc">
                <button onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button> &nbsp; &nbsp;
                <button onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </span>


        </div>
    )
}


export default Todo;