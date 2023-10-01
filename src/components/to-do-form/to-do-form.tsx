import { useState } from 'react';
import { ToDoFormProps } from '../../types/interfaces';

const ToDoForm = ({ addToDo }: ToDoFormProps) => {

  const [inputText, setInputText] = useState('');

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const submitToDoHandler = () => {
    if (inputText) {
      addToDo({ id: Date.now() + Math.random(), content: inputText, completed: false });
    }
    setInputText('');
  }

  return (
    <div className="toDo-form">
      <input className="toDo-input" type="text" value={inputText} placeholder="Add ToDo" onChange={inputTextHandler} />
      <button className="toDo-button toDo-add-button" type="submit" onClick={submitToDoHandler}>
        Add
      </button>
    </div>
  );
};

export default ToDoForm;
