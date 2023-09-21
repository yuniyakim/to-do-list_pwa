import ToDoItem from "../to-do-item/to-do-item";
import { ToDo, ToDoListProps } from '../../types/interfaces';

const ToDoList = ({ todos, setTodos }: ToDoListProps) => {

  const completeToDo = (id: number): ToDo[] => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos);
    return updatedTodos;
  }

  const deleteToDo = (id: number): ToDo[] => {
    setTodos(todos.filter(todo => todo.id !== id));
    return todos.filter(todo => todo.id !== id);
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem key={todo.id}
            todo={todo}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
