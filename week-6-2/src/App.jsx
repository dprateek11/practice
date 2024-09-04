import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])


  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com")
      .then(function (response) {
        setTodos(response.data.todos)
      })
  },[]);
  
  return (
    <>
      {todos.map( todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({ title, description }){
  return <div>
    {title}
    {description}
  </div>
}

export default App
