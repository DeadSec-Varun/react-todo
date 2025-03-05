import { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import './App.css';
import TodoLayout from './components/TodoLayout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  useEffect(() => {
    document.title = 'iTask - Manage your Todos at one place';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} replace/>} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/register' element={<Signup/>} /> 
        <Route element={ <ProtectedRoutes/> }>
                <Route path='/home' element={<Home />} />
                <Route path='/tasks' element={<Tasks />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
