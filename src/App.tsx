// import {useState} from 'react';
import {useState, Profiler} from 'react';
import {ToDo} from './types/interfaces';
import {ToDoList} from './components/to-do-list/to-do-list';
import {ToDoForm} from './components/to-do-form/to-do-form';
import './styles/styles.css';

export const App = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDo = (toDo: ToDo): ToDo[] => {
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
    return newToDos;
  };

  const onRender = (_id: string, _phase: 'mount' | 'update', actualDuration: number, _baseDuration: number, _startTime: number, _commitTime: number) => {
    // ios
    // const platform = 'ios';
    // const url = 'http://127.0.0.1:5555/add';
    // android
    const platform = 'macos';
    const url = 'http://192.168.67.1:5555/add';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({app: 'pwa', platform: platform, time: actualDuration, device: 'Apple MacBook Air'})
    });
  }

  return (
    <Profiler id="App" onRender={onRender}>
      <div className="toDo-list-app-container">
        <div id="toDo-list-app-title" className="toDo-list-app-title">ToDo List</div>
        <ToDoForm addToDo={addToDo} />
        <ToDoList toDos={toDos} setToDos={setToDos} />
      </div>
    </Profiler>
  );
};
