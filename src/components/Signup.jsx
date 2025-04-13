import React from 'react';

const Signup = ({setPage}) => {
  return (
    <div className="w-full max-w-md mx-auto h-3/4 p-8 space-y-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input type="text" id="username" name="username" minLength={3} required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" minLength={6} required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        <button type="submit" className="w-full mt-4 px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">Sign Up</button>
      </form>
      <p className="text-sm text-center">
        Already have an account? <span onClick={()=>setPage('login')} className="text-indigo-600 hover:underline cursor-pointer">Login</span>
      </p>
    </div>
  );
};

export default Signup;