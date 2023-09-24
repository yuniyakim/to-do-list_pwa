import { ToDoItemProps } from '../../types/interfaces';

const ToDoItem = ({ toDo, completeToDo, deleteToDo }: ToDoItemProps) => {

  const handleComplete = () => {
    completeToDo(toDo.id);
  }

  const handleDelete = () => {
    deleteToDo(toDo.id);
  }

  return (
    <div>
      <div className="toDo">
        <li className={toDo.completed ? "checked" : ""}>
          {toDo.content}
        </li>
        <button onClick={handleComplete} className="check-btn">{toDo.completed ? "Uncheck" : "Check"}</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
