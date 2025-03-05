import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/home"
        className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;