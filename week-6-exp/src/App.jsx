import React, { useState } from "react"

function App() {

  const [title, setTitle] = useState("Prateek")

  function changeTitle(){
    setTitle(Math.random())
  }

  return (
    <>
      <button onClick={changeTitle}>Click to change the title</button>
      <Header title={title}></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>
      <Header title="Dabas"></Header>

    </>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App
