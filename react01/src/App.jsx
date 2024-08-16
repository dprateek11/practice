import {useState} from "react";

function App() {

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Got to gym from 7-9",
    completed: false
  }, {
    title: "study web development",
    description: "Study web development",
    completed: true
  }])

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

// todo app {
// title,
// description,
// completed
//}
function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
