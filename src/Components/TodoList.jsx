import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState('');
const [listInputs, setListInputs] = useState({});

// Function to add new todo list to todos array
const handleTodo = () => {
    if (headingInput.trim() !== '') {
        setTodos([...todos, { heading: headingInput, lists: [] }]);
        setHeadingInput('');
    }
};

// Function to add new items to a specific list 
const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
        const newTodos = [...todos]; // copy current todos array
        newTodos[index].lists.push(listInputs[index]); // Append new item to specific list in todos array
        setTodos(newTodos); // update the todos array with update version
        setListInputs({...listInputs, [index]: ''}); // clear the input field for that specific list
    }
};

// Function to update list input value for a specific list
const handleListInputChange = (index, value) => {
    setListInputs({...listInputs, [index]: value});
};

// Function to delete lists
const handleDeleteTodo = (index) => {
    const newTodos = [...todos]; // copy todos array
    newTodos.splice(index, 1); // remove one list from array at specified index
    setTodos(newTodos); // update todos array
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

                {/* Display To-do Lists in todo array */}
                {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
                    <div key={index} className='todo-card'> 
                        {/* Display Heading */}
                        <div className='heading_todo'>
                            <h3>{todo.heading}</h3> {/* Displaying heading of todo item */}
                            <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                        </div>
                        
                        {/* Iterate over each list item in current todo list */}
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{list}</p> {/* Display text of list item */}
                                </li>
                            ))}
                        </ul>

                        {/* Field for adding a new item under under a specific heading*/}
                        <div className='add_list'>
                            <input
                                type='text'
                                className='list-input'
                                placeholder='Add List'
                                value={listInputs[index] || ''} // Use the value from listInputs arry based on the current heading index
                                onChange={(e) => handleListInputChange(index, e.target.value)}/>
                            <button className='add-list-button' onClick={() => handleAddList(index)}>Add List</button>
                        </div>
                    </div>
                ))}

            </div>
        </>
  );
};

export default TodoList;
