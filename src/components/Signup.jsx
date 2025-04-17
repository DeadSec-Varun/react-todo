import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = ({ setPage }) => {

  const [cred, setCred] = useState({ username: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setError(""); // Clear error message when typed
  }, [cred])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (cred.password !== cred.confirmPassword) {
      setError("Passwords do not match"); // Set error message if passwords do not match
      return;
    }
    setError(""); // Clear error message if passwords match
    try {
      const res = await axios.post('http://localhost:5000/user/signup', cred);
      console.log("Signup successful:", res.data);
      localStorage.setItem('token', res.data.token); // Store token in local storage
      navigate('/home'); // Use navigate to redirect
    } 
    catch (error) {
      console.error(error);
      setError(error.response.data.message); // Set error message on server error
    }
  };
  return (
    <div className="w-full max-w-md mx-auto h-3/4 p-8 space-y-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input type="text" id="username" name="username" value={cred.username} onChange={handleChange} minLength={3} required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" value={cred.password} minLength={5} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirmPassword" value={cred.confirmPassword} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300" />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>} {/* Display error message */}
        <button type="submit" className="w-full mt-4 px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">Sign Up</button>
      </form>
      <p className="text-sm text-center">
        Already have an account? <span onClick={() => setPage('login')} className="text-indigo-600 hover:underline cursor-pointer">Login</span>
      </p>
    </div>
  );
};

export default Signup;