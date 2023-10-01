import { useState } from 'react'
import { ToDo } from './types/interfaces';
import { ToDoList } from './components/to-do-list/to-do-list'
import { ToDoForm } from './components/to-do-form/to-do-form'
import './styles/styles.css'

export const App = () => {
  const [toDos, setToDos] = useState<ToDo[]>([])

  const addToDo = (toDo: ToDo) : ToDo[] => {
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
    return newToDos;
  }

  return (
    <div className="toDo-list-app-container">
      <div className="toDo-list-app-title">ToDo List</div>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  )
}
