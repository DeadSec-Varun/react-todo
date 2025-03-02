import React, { useState, useRef } from 'react';

const InputLayout = ({ setTitle }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);

  const handleSave = () => {
    const inputValue = inputRef.current.value;
    if (inputValue.trim() === '') {
      setError(true);
    } else {
      setTitle(inputValue);
      inputRef.current.value = '';
      setError(false);
    }
  };

  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>Add a Todo</h2>
      <div className='flex space-x-2 items-center'>
        <input 
          type='text'
          ref={inputRef} 
          onChange={()=>error && setError(false)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className={`${error?'border-red-500':('focus:ring-purple-500 focus:ring-2')} flex-grow border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none`}
        />
        <button
          onClick={handleSave}
          className='px-3 py-1 rounded-2xl bg-purple-400 text-white hover:bg-purple-700 focus:outline-none cursor-pointer'
        >
          Save
        </button>
      </div>
      {error && <p className='text-red-500'>Input cannot be empty</p>}
    </div>
  );
};

export default InputLayout;