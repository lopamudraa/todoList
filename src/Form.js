import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {


    const inputTextHandler = (event) => {
        console.log("e....", event.target.value);
        setInputText(event.target.value);
        // props.setInputText(event.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    }
    return (
        <form>
            <input value={inputText} type="text" onChange={inputTextHandler} />
            <button onClick={submitTodoHandler} type="submit">
                <i className="fas fa-plus-square"></i>
            </button> &nbsp; &nbsp;
            <span className="select">
                <select name="todos">
                    <option value="All">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </span>
        </form>
    )
}




export default Form;