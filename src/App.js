import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  return (
    <div className="App">
      <h1>Hello TODO List {inputText} </h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
