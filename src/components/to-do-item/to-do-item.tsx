import {ToDoItemProps} from '../../types/interfaces';

export const ToDoItem = ({toDo, completeToDo, deleteToDo}: ToDoItemProps) => {
  const handleComplete = () => {
    completeToDo(toDo.id);
  };

  const handleDelete = () => {
    deleteToDo(toDo.id);
  };

  return (
    <div className="toDo-container">
      <input
        className="toDo-checkbox"
        type="checkbox"
        onChange={handleComplete}></input>
      <div
        className={
          'toDo-content ' + (toDo.completed ? 'toDo-content-completed' : '')
        }>
        {toDo.content}
      </div>
      <button className="toDo-button toDo-delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
