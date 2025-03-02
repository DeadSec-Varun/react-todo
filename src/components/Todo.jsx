import React, { useState } from 'react';
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [error, setError] = useState(false);


    const handleCheckboxChange = (event) => {
        onEdit(todo._id, { completed: event.target.checked });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (editTitle.trim() === '') {
            setError(true);
            return;
        }
        onEdit(todo._id, { title: editTitle });
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditTitle(todo.title); // Reset the edit title to the original title
    };

    return (
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-6 font-semibold">
                <input
                    type="checkbox"
                    className="accent-purple-400"
                    onChange={handleCheckboxChange}
                    checked={todo.completed}
                />
                {isEditing ? (
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => {setEditTitle(e.target.value); error && setError(false)}}
                            className={`${error?'border-red-500':('focus:ring-purple-500 focus:ring-2')} border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none`}
                        />
                        <button
                            className="w-5 h-5 cursor-pointer text-green-600"
                            onClick={handleSaveClick}
                        >
                            <FaCheck />
                        </button>
                        <button
                            className="w-5 h-5 cursor-pointer text-red-600"
                            onClick={handleCancelClick}
                        >
                            <FaTimes />
                        </button>
                    </div>
                ) : (
                    <span className={todo.completed ? 'line-through' : undefined}>
                        {todo.title}
                    </span>
                )}
            </div>
            <div className="flex items-center">
                {!isEditing && (
                    <button
                        className="w-5 h-5 mr-2 cursor-pointer text-purple-600"
                        onClick={handleEditClick}
                    >
                        <FaEdit />
                    </button>
                )}
                <button
                    className="w-5 h-5 cursor-pointer text-purple-600"
                    onClick={() => onDelete(todo._id)}
                >
                    <AiFillDelete />
                </button>
            </div>
        </div>
    );
};

export default Todo;