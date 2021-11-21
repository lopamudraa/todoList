import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {
                todos.map(todo => (
                    <Todo 
                     todo={todo}
                     setTodos={setTodos}
                     todos={todos}
                     key={todo.id} 
                     text={todo.text} />
                ))
            }
        </div>
    )
}

export default TodoList;