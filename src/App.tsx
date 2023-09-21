import { useState } from 'react'
import { ToDo } from './types/interfaces';
import ToDoList from './components/to-do-list/to-do-list'
import ToDoForm from './components/to-do-form/to-do-form'
import './App.css'

function App() {

  const [todos, setTodos] = useState<ToDo[]>([])

  const addTodo = (todo: ToDo) : ToDo[] => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    return newTodos;
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
