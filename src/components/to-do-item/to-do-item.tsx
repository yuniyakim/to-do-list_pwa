import { ToDoItemProps } from '../../types/interfaces';

const ToDoItem = ({ todo, completeToDo, deleteToDo }: ToDoItemProps) => {

  const handleComplete = () => {
    completeToDo(todo.id);
  }

  const handleDelete = () => {
    deleteToDo(todo.id);
  }

  return (
    <div>
      <div className="todo">
        <li className={todo.completed ? "checked" : ""}>
          {todo.content}
        </li>
        <button onClick={handleComplete} className="check-btn">{todo.completed ? "Uncheck" : "Check"}</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
