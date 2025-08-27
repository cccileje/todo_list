import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});

    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };
    // Function to handle adding new list item to specific todo heading 
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim !== '') { // check for empty input
            const newTodos = [...todos]; // copy exisitng todos array
            newTodos[index].lists.push(listInputs[index]); // add new item to correct list (based on index)
            setTodos(newTodos); // update the todos state with the new list item
            setListInputs({ ...listInputs, [index]: ''}); // reset input field for that index
        }
    };
    // Function to update list input value for specific heading based on index
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }) // update the listInputs state for the given index
    };
    // Function to delete list
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos]; // create copy of current todos array
        newTodos.splice(index, 1); // remove todo list at specified index
        setTodos(newTodos); // update state with new todo array (with specified todo list removed)
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
                        value={headingInput}
                        onChange={(e) => {setHeadingInput(e.target.value);}}
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
                        <ul>
                            {/* iterate over each list item inside the current todo */}
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    {/* display text content of the list item */}
                                    <p>{list}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='add_list'>
                                {/* input field for adding items under specific heading */}
                                <input
                                    type='text'
                                    className='list-input'
                                    placeholder='Add List'
                                    value={listInputs[index] || ''} // use value from listInputs array based on the current heading index
                                    onChange={(e) => handleListInputChange(index, e.target.value)}/>
                                {/* button to add the list item to the corresponding heading */}
                                <button className='add-list-button' onClick={() => handleAddList(index)}>Add List</button>
                            </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;
