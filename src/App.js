import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count= 1

function App() {
 var [todo, setTodo] = useState([])
  const addtodo = () =>
  {
    console.log("Add todo")

 const todotext = document.getElementById("todoInput").value
 let todoObject= {
  id: count++,
  title: todotext
 }

 console.log("todotext: "+todotext)

 todo.push(todoObject)
 setTodo([...todo]) //=>
    //todoArray.puch()
  }

  // console.log("Length of Todo",todo.length)

  const getDynamicList = () =>
  {
    let response =""
    for(let count1 = 0; count1<todo.length; count1++)
    {
      console.log("Todo[count].title: "+todo[count1].title)
      response += <div>{todo[count1].title}</div>
      console.log(response)
    }
    console.log(response)
    return response
  }

   const deletetodo = (id) =>
   {
    console.log("Delete todo id:", id)
    todo = todo.filter(todoTemp => {
      if(id === todoTemp.id)
      {
        return false
      }
      else{
        return  true
      }
    })
    setTodo([...todo])

    

   }

  return (
    <div>
      <h1>Todo App</h1>
      <input id="todoInput" type='text' placeholder='Add your Todo here...'/>
      <button onClick={addtodo}>Add</button><br/>
      {todo.map(tempTodo =>
        {
      
       return <div>
        {tempTodo.title}
        <button onClick={()=>deletetodo()}>Delete</button>
        </div>

      })}
    </div>
  );
}

export default App;
