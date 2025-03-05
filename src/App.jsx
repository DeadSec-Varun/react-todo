import { useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import TodoLayout from './components/TodoLayout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    document.title = 'iTask - Manage your Todos at one place'
  }, [])

  return (
    <Router>
      <Routes>
        <Route index element={<TodoLayout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>

  )
}

export default App
