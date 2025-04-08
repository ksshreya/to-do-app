import { useState, useEffect } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Login from '.components/Login'

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('auth') || false)
  );
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || []);
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  if(!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return (
    <>
      <div>
        <h1>To-Do Application</h1>
        <button onClick={() => {
          setIsLoggedIn(false);
          localStorage.removeItem('auth')}}>Logout</button>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App
