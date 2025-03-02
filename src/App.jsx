import { useEffect } from 'react'
import './App.css'
import TodoLayout from './components/TodoLayout'

function App() {
  useEffect(() => {
    document.title = 'iTask - Manage your Todos at one place'
  }, [])

  return (
    <>
      <TodoLayout/>
    </>
  )
}

export default App
