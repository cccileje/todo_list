import React, { useState } from 'react';
import './TodoList.css';

const [todos, setTodos] = useState([]);
const [headingInput, setheadingInput] = useState('');
const [listInputs, setListInputs] = useState({});

const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
        setTodos([...todos, { heading: headingInput, lists: [] }]);
        setheadingInput('');
    }
};

const TodoList = () => {
  return (
    <>
      <div className="todo-container">
            <h1 className="title">My Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="heading-input"
                    placeholder="Enter heading"
                    value={headingInput}
                    onChange={(e) => {setheadingInput(e.target.value);}}
                />
                <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
            </div>
      </div>
      <div className="todo_main">
            {todos.map((todo, index) => ( // iterate over each todo item
                <div key={index} className='todo-card'>
                    <div className='heading_todo'>
                        <h3>{todo.heading}</h3> {/* Display heading here */}
                        <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
                    </div>
                </div>
            ))}
      </div>
    </>
  );
};

export default TodoList;
