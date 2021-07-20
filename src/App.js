import React, {useState} from 'react';
import './App.css';

// Importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText ] = useState('');
  const [todos, setTodos] = useState([]); //arrays
  return (
     <div className="App">
       <header>
         <h1>Listahan Ko</h1>
       </header>
       <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList todos={todos} setTodos={setTodos} />
     </div>
  );
}

export default App;
