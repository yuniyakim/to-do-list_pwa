import { useState } from 'react'
import { ToDo } from './types/interfaces';
import ToDoList from './components/to-do-list/to-do-list'
import ToDoForm from './components/to-do-form/to-do-form'
import './App.css'

function App() {

  const [toDos, setToDos] = useState<ToDo[]>([])

  const addToDo = (toDo: ToDo) : ToDo[] => {
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
    return newToDos;
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  )
}

export default App
