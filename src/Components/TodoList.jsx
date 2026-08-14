import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState('');
const [listInputs, setListInputs] = useState({});

const handleTodo = () => {
    if (headingInput.trim() !== '') {
        setTodos([...todos, { heading: headingInput, lists: [] }]);
        setHeadingInput('');
    }
};

    return (
        <>
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading"
                        value={headingInput} // Store value of the input field to the state variable headinginput
                        onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
                    />
                    {/*Button push triggers handleTodo function */}
                    <button className="add-list-button" onClick={handleTodo}>Add Heading</button>
                </div>
            </div>
            <div className="todo_main">

                {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
                    <div key={index} className='todo-card'> 
                        <div className='heading_todo'>
                            <h3>{todo.heading}</h3> {/* Displaying heading of todo item */}
                            <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                        </div>
                    </div>
                ))}

            </div>
        </>
  );
};

export default TodoList;
