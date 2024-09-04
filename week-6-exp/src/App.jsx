import { useState, useEffect   } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  return (
    <>
      {todos.map(
        todo => <Todo key={id} title={todo.title} description={todo.description}></Todo>
      )}
    </>
  )

  function Todo({title, description}){
    return <div>
      {title}
      {description}
    </div>
  }
}

export default App
