import { useState } from "react"

function App() {

  return (
    <>
      <HeaderWithTitle />
      <Header title="Dabas"></Header>
    </>
  )
}

function HeaderWithTitle(){
  const [title, setTitle] = useState("Prateek")

  function changeTitle(){
    setTitle(Math.random())
  }

  return <div>
      <button onClick={changeTitle}>Click to change the title</button>
      <Header title={title}></Header>
  </div>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
