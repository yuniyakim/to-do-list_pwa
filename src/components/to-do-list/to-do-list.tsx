import ToDoItem from "../to-do-item/to-do-item";
import { ToDo, ToDoListProps } from '../../types/interfaces';

const ToDoList = ({ toDos, setToDos }: ToDoListProps) => {

  const completeToDo = (id: number): ToDo[] => {
    const updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
      }
      return toDo;
    })
    setToDos(updatedToDos);
    return updatedToDos;
  }

  const deleteToDo = (id: number): ToDo[] => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
    return toDos.filter(toDo => toDo.id !== id);
  }

  return (
    <div className="toDo-container">
      <ul className="toDo-list">
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id}
            toDo={toDo}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
