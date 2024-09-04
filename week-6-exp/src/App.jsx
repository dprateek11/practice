import { useState } from "react"

function App() {

  let counter = 3;

  const [todos, SetTodos] = useState([{
    id:1,
    title: "go to gym",
    description: "Go to gym in afternoon"
  },
  {
    id:2,
    title: "go to gym",
    description: "Go to gym in night"
  }])

  function addTodo(){
    SetTodos([...todos, {
      id: counter++,
      title: "read",
      description: "Do reading before bed"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a todo!</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({ title, description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}


export default App
