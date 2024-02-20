import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [todo, setTodo] = useState([])
  const addtodo = () =>
  {
    console.log("Add todo")

 const todotext = document.getElementById("todoInput").value

 console.log("todotext: "+todotext)

 todo.push(todotext)
 setTodo([...todo]) //=>
    //todoArray.puch()
  }

  console.log("Length of Todo",todo.length)

  return (
    <div>
      <h1>Todo App</h1>
      <input id="todoInput" type='text' placeholder='Add your Todo here...'/>
      <button onClick={addtodo}>Add</button><br/>
      {todo.map(tempTodo =>
        {
      
       return <div>{tempTodo}</div>

      })}
    </div>
  );
}

export default App;
