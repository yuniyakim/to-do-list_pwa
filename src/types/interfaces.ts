export interface ToDo {
  id: number;
  content: string;
  completed: boolean;
}

export interface ToDoItemProps {
  todo: ToDo;
  completeToDo: (id: number) => ToDo[];
  deleteToDo: (id: number) => ToDo[];
}

export interface ToDoListProps {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export interface ToDoFormProps {
  addTodo: (todo: ToDo) => ToDo[];
}
