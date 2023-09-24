export interface ToDo {
  id: number;
  content: string;
  completed: boolean;
}

export interface ToDoItemProps {
  toDo: ToDo;
  completeToDo: (id: number) => ToDo[];
  deleteToDo: (id: number) => ToDo[];
}

export interface ToDoListProps {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export interface ToDoFormProps {
  addToDo: (toDo: ToDo) => ToDo[];
}
