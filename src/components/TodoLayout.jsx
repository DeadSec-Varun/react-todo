import React, { useState, useEffect, createContext } from 'react';
import InputLayout from './InputLayout';
import TodoFilterList from './TodoFilterList';
import axios from 'axios';

export const TodoContext = createContext();

const TodoLayout = () => {

    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:5000/todos');
            setData(result.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const saveAndFetchData = async () => {
            try {
                await axios.post('http://localhost:5000/todos', { title });
                fetchData();
            } catch (error) {
                console.error('Error creating todo:', error);
            }
        };
        if (title) {
            saveAndFetchData();
        }
    }, [title]);



    const handleUpdate = async (id, updatedFields) => {
        try {
            await axios.put(`http://localhost:5000/todos/${id}`, updatedFields);
            fetchData();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };


    return (
            <main>
                <div className='flex flex-col gap-10 container mx-auto my-10 p-10 bg-purple-100 rounded-lg shadow-lg max-w-[60%]'>
                    <h1 className=' self-center text-3xl font-bold'>iTask - Manage your Todos at one place</h1>
                    <InputLayout setTitle={setTitle} />
                    <TodoContext.Provider value={{data, handleUpdate, handleDelete }}>
                    <TodoFilterList />
                    </TodoContext.Provider>
                </div>
            </main>
    );
};

export default TodoLayout;
