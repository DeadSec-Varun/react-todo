import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodoList = ({ showFinished, data, onEdit, onDelete }) => {

  return (
    <div>
      {data.length === 0 ? (
        <p className=' text-2xl text-gray-500'>Start by adding a task</p>
      ) : (
        <>
          <h2 className='text-xl font-bold mb-4'>Your Todos</h2>
          {data.map(todo => {
            if (showFinished || !todo.completed) {
              return <Todo key={todo._id} todo={todo} onEdit={onEdit} onDelete={onDelete} />;
            }
            return null;
          })}
        </>
      )}
    </div>
  );
};

export default TodoList;