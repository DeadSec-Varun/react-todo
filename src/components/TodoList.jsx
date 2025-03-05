import React, { useState, useEffect } from 'react';
import { TodoContext } from './TodoLayout';
import Todo from './Todo';

const TodoList = ({ showFinished }) => {

  const { data } = React.useContext(TodoContext);

  return (
    <div>
      {data.length === 0 ? (
        <p className=' text-2xl text-gray-500'>Start by adding a task</p>
      ) : (
        <>
          <h2 className='text-xl font-bold mb-4'>Your Todos</h2>
          {data.map(todo => {
            if (showFinished || !todo.completed) {
              return <Todo key={todo._id} todo={todo} />;
            }
            return null;
          })}
        </>
      )}
    </div>
  );
};

export default TodoList;