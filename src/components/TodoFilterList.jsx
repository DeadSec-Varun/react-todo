import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoFilterList = () => {
    const [showFinished, setShowFinished] = useState(false);

    const handleCheckboxChange = (event) => {
        setShowFinished(event.target.checked);
    };

    return (
        <div>
            <label className='flex items-center space-x-2'>
                <input type="checkbox" className=" accent-purple-400" onChange={handleCheckboxChange} />
                <span>Show finished</span>
            </label>
            <div className=' w-[90%] h-[1px] bg-gray-300 my-6 place-self-center'></div>
            <TodoList showFinished={showFinished}/>
        </div>
    )
}

export default TodoFilterList