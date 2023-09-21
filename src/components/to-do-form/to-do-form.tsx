import { useState } from 'react';
import { ToDoFormProps } from '../../types/interfaces';

const ToDoForm = ({ addTodo }: ToDoFormProps) => {

  const [inputText, setInputText] = useState('');

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText) {
      addTodo({ id: Date.now() + Math.random(), content: inputText, completed: false });
    }
    setInputText('');
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input type="text" value={inputText} placeholder="Add ToDo" onChange={inputTextHandler} />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
