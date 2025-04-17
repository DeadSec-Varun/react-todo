import { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import ProtectedRoutes from './components/ProtectedRoutes';
import { jwtClientAuth } from './utilities/jwtClientAuth';

function App() {
  useEffect(() => {
    document.title = 'iTask - Manage your Todos at one place';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} replace/>} />
        <Route path='/welcome' element={jwtClientAuth()?<Navigate to={'/home'} replace/>:<Welcome/>} /> 
        <Route element={ <ProtectedRoutes/> }>
                <Route path='/home' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
